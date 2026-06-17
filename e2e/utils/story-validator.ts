import { storyData } from '@/data/story';

/**
 * ストーリーデータの完全性を検証するユーティリティ
 */

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    totalScenes: number;
    endingScenes: number;
    choiceScenes: number;
    unreachableScenes: string[];
  };
}

/**
 * 全てのシーンキーを取得
 */
export function getAllSceneKeys(): string[] {
  return Object.keys(storyData);
}

/**
 * エンディングシーン（選択肢がないシーン）を取得
 */
export function getEndingScenes(): string[] {
  return Object.keys(storyData).filter(
    (key) => storyData[key as keyof typeof storyData].choices.length === 0
  );
}

/**
 * 選択肢があるシーンを取得
 */
export function getChoiceScenes(): string[] {
  return Object.keys(storyData).filter(
    (key) => storyData[key as keyof typeof storyData].choices.length > 0
  );
}

/**
 * 特定のシーンから到達可能な全てのシーンを取得（深さ優先探索）
 */
export function getReachableScenes(startScene: string = 'start'): Set<string> {
  const reachable = new Set<string>();
  const stack = [startScene];

  while (stack.length > 0) {
    const current = stack.pop()!;

    if (reachable.has(current)) {
      continue;
    }

    reachable.add(current);

    const scene = storyData[current as keyof typeof storyData];
    if (scene && scene.choices) {
      for (const choice of scene.choices) {
        if (choice.next && !reachable.has(choice.next)) {
          stack.push(choice.next);
        }
      }
    }
  }

  return reachable;
}

/**
 * 到達不可能なシーンを検出
 */
export function getUnreachableScenes(): string[] {
  const allScenes = new Set(getAllSceneKeys());
  const reachableScenes = getReachableScenes('start');

  const unreachable: string[] = [];
  for (const scene of allScenes) {
    if (!reachableScenes.has(scene)) {
      unreachable.push(scene);
    }
  }

  return unreachable;
}

/**
 * 無効な参照（存在しないシーンへのnext）を検出
 */
export function getInvalidReferences(): Array<{ scene: string; choice: string; invalidNext: string }> {
  const allScenes = new Set(getAllSceneKeys());
  const invalidRefs: Array<{ scene: string; choice: string; invalidNext: string }> = [];

  for (const [sceneKey, sceneData] of Object.entries(storyData)) {
    if (sceneData.choices) {
      for (const choice of sceneData.choices) {
        if (choice.next && !allScenes.has(choice.next)) {
          invalidRefs.push({
            scene: sceneKey,
            choice: choice.text,
            invalidNext: choice.next,
          });
        }
      }
    }
  }

  return invalidRefs;
}

/**
 * 全ての可能なストーリーパスを取得
 */
export function getAllStoryPaths(): Array<{ path: string[]; ending: string }> {
  const paths: Array<{ path: string[]; ending: string }> = [];

  function explorePath(currentScene: string, currentPath: string[]) {
    const scene = storyData[currentScene as keyof typeof storyData];
    const newPath = [...currentPath, currentScene];

    // エンディングに到達した場合
    if (!scene || scene.choices.length === 0) {
      paths.push({
        path: newPath,
        ending: currentScene,
      });
      return;
    }

    // 各選択肢を探索
    for (const choice of scene.choices) {
      if (choice.next) {
        // 循環参照のチェック（同じシーンを2回訪れない）
        if (!newPath.includes(choice.next)) {
          explorePath(choice.next, newPath);
        }
      }
    }
  }

  explorePath('start', []);
  return paths;
}

/**
 * ストーリーデータの完全性を検証
 */
export function validateStoryData(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. startシーンの存在確認
  if (!storyData.start) {
    errors.push('必須の "start" シーンが見つかりません');
  }

  // 2. 無効な参照を検出
  const invalidRefs = getInvalidReferences();
  for (const ref of invalidRefs) {
    errors.push(
      `シーン "${ref.scene}" の選択肢 "${ref.choice}" が存在しないシーン "${ref.invalidNext}" を参照しています`
    );
  }

  // 3. 到達不可能なシーンを検出
  const unreachableScenes = getUnreachableScenes();
  for (const scene of unreachableScenes) {
    warnings.push(`シーン "${scene}" に到達する方法がありません`);
  }

  // 4. エンディングが1つもない場合
  const endings = getEndingScenes();
  if (endings.length === 0) {
    warnings.push('エンディングシーン（選択肢のないシーン）が1つもありません');
  }

  // 5. 選択肢のないシーンからさらに遷移がある場合（これは通常エラー）
  for (const [sceneKey, sceneData] of Object.entries(storyData)) {
    if (sceneData.choices.length === 0) {
      // エンディングシーンの場合、他のシーンから参照されていないか確認
      // これは正常なのでチェック不要
    }
  }

  // 6. 全てのストーリーパスを検証
  const allPaths = getAllStoryPaths();
  if (allPaths.length === 0) {
    errors.push('有効なストーリーパスが1つもありません');
  }

  // 統計情報
  const stats = {
    totalScenes: getAllSceneKeys().length,
    endingScenes: endings.length,
    choiceScenes: getChoiceScenes().length,
    unreachableScenes,
  };

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats,
  };
}

/**
 * グッドエンドのシーンキーを取得（本文に「グッドエンド」を含む終端シーン）
 */
export function getGoodEndingScenes(): string[] {
  return getEndingScenes().filter((key) => {
    const scene = storyData[key as keyof typeof storyData];
    return typeof scene?.text === 'string' && scene.text.includes('グッドエンド');
  });
}

export interface RouteStep {
  scene: string;
  choiceText: string;
  next: string;
}

/**
 * start から target までの最短ルートを、クリックすべき選択肢の列として返す。
 * 幅優先探索を使い、各ステップで「どのシーンでどの選択肢を押すか」を返す。
 * 到達不可能な場合は null。
 */
export function getShortestRoute(
  target: string,
  start: string = 'start'
): RouteStep[] | null {
  if (target === start) return [];

  // BFS で各シーンへの最短到達時の「直前の選択」を記録
  const prev = new Map<string, RouteStep>();
  const visited = new Set<string>([start]);
  const queue: string[] = [start];

  while (queue.length > 0) {
    const current = queue.shift()!;
    const scene = storyData[current as keyof typeof storyData];
    if (!scene || !scene.choices) continue;

    for (const choice of scene.choices) {
      if (!choice.next || visited.has(choice.next)) continue;
      visited.add(choice.next);
      prev.set(choice.next, {
        scene: current,
        choiceText: choice.text,
        next: choice.next,
      });
      if (choice.next === target) {
        // 経路を復元
        const route: RouteStep[] = [];
        let node = target;
        while (node !== start) {
          const step = prev.get(node)!;
          route.unshift(step);
          node = step.scene;
        }
        return route;
      }
      queue.push(choice.next);
    }
  }

  return null;
}

/**
 * target に到達できるシーンの集合（逆方向の到達可能性）を返す。
 */
function getScenesThatReach(target: string): Set<string> {
  // 逆向き隣接リストを構築
  const rev = new Map<string, string[]>();
  for (const [key, scene] of Object.entries(storyData)) {
    for (const choice of scene.choices ?? []) {
      if (!choice.next) continue;
      if (!rev.has(choice.next)) rev.set(choice.next, []);
      rev.get(choice.next)!.push(key);
    }
  }
  const canReach = new Set<string>([target]);
  const stack = [target];
  while (stack.length > 0) {
    const cur = stack.pop()!;
    for (const p of rev.get(cur) ?? []) {
      if (!canReach.has(p)) {
        canReach.add(p);
        stack.push(p);
      }
    }
  }
  return canReach;
}

/**
 * start から target までの「最長ルート」を返す。
 * ループ除去済み（DAG）のため、各ノードから target までの最長距離を
 * メモ化再帰で求めて経路を復元する。到達不可能なら null。
 */
export function getLongestRoute(
  target: string,
  start: string = 'start'
): RouteStep[] | null {
  const memo = new Map<string, number>(); // node -> target までの最長エッジ数（-Infで不達）
  function longest(node: string): number {
    if (node === target) return 0;
    if (memo.has(node)) return memo.get(node)!;
    memo.set(node, -Infinity); // DAG前提（再入はしない想定）
    const scene = storyData[node as keyof typeof storyData];
    let best = -Infinity;
    for (const choice of scene?.choices ?? []) {
      if (!choice.next) continue;
      const sub = longest(choice.next);
      if (sub + 1 > best) best = sub + 1;
    }
    memo.set(node, best);
    return best;
  }
  if (longest(start) === -Infinity) return null;

  // 最長になる子を辿って経路を復元
  const route: RouteStep[] = [];
  let node = start;
  while (node !== target) {
    const scene = storyData[node as keyof typeof storyData];
    let pick: { text: string; next: string } | null = null;
    let pickLen = -Infinity;
    for (const choice of scene?.choices ?? []) {
      if (!choice.next) continue;
      const l = longest(choice.next);
      if (l + 1 > pickLen) {
        pickLen = l + 1;
        pick = { text: choice.text, next: choice.next };
      }
    }
    if (!pick) return null;
    route.push({ scene: node, choiceText: pick.text, next: pick.next });
    node = pick.next;
  }
  return route;
}

/**
 * start から target へ到達する「ランダムな」ルートを1本返す（seedで決定的）。
 * 各シーンで target に到達できる選択肢の中からseed依存で1つ選ぶため、
 * 必ず target にたどり着く。最短とは限らない（回り道を含みうる）。
 */
export function getRandomRoute(
  target: string,
  seed: number,
  start: string = 'start'
): RouteStep[] | null {
  const canReach = getScenesThatReach(target);
  if (!canReach.has(start)) return null;

  // 決定的な擬似乱数（線形合同法）
  let state = (seed * 2654435761) >>> 0;
  const rand = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0xffffffff;
  };

  const route: RouteStep[] = [];
  const visited = new Set<string>([start]);
  let node = start;
  while (node !== target) {
    const scene = storyData[node as keyof typeof storyData];
    // target に到達でき、かつ未訪問の選択肢に限定（DAGなので未訪問制約で十分）
    const options = (scene?.choices ?? []).filter(
      (c) => c.next && canReach.has(c.next) && !visited.has(c.next)
    );
    if (options.length === 0) return null;
    const choice = options[Math.floor(rand() * options.length) % options.length];
    route.push({ scene: node, choiceText: choice.text, next: choice.next });
    visited.add(choice.next);
    node = choice.next;
  }
  return route;
}

/**
 * 「ストーリー時間が逆行する」エッジを検出する。
 * source の最短深さが target の最短深さより gap 以上大きいエッジは、
 * 物語上あとで到達するはずのシーンから前段のシーンへ戻る合流であり、
 * 文章の整合性（巻き戻り矛盾）を要確認の候補となる。
 */
export function getStoryTimeRegressions(
  minGap: number = 3
): Array<{ from: string; to: string; choiceText: string; gap: number }> {
  // 最短深さ（BFS）
  const depth = new Map<string, number>([['start', 0]]);
  const queue = ['start'];
  while (queue.length > 0) {
    const n = queue.shift()!;
    for (const c of storyData[n as keyof typeof storyData]?.choices ?? []) {
      if (c.next && !depth.has(c.next)) {
        depth.set(c.next, depth.get(n)! + 1);
        queue.push(c.next);
      }
    }
  }
  const out: Array<{ from: string; to: string; choiceText: string; gap: number }> = [];
  for (const [k, scene] of Object.entries(storyData)) {
    for (const c of scene.choices ?? []) {
      if (!c.next) continue;
      const target = storyData[c.next as keyof typeof storyData];
      if (!target || (target.choices?.length ?? 0) === 0) continue; // エンディングは除外
      const ds = depth.get(k);
      const dt = depth.get(c.next);
      if (ds != null && dt != null && ds - dt >= minGap) {
        out.push({ from: k, to: c.next, choiceText: c.text, gap: ds - dt });
      }
    }
  }
  return out.sort((a, b) => b.gap - a.gap);
}

/**
 * 選択肢のテキストから対応するボタンを探すヘルパー
 */
export function getChoiceTexts(sceneKey: string): string[] {
  const scene = storyData[sceneKey as keyof typeof storyData];
  if (!scene || !scene.choices) {
    return [];
  }
  return scene.choices.map((choice) => choice.text);
}
