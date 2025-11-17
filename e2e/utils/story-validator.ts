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
 * 選択肢のテキストから対応するボタンを探すヘルパー
 */
export function getChoiceTexts(sceneKey: string): string[] {
  const scene = storyData[sceneKey as keyof typeof storyData];
  if (!scene || !scene.choices) {
    return [];
  }
  return scene.choices.map((choice) => choice.text);
}
