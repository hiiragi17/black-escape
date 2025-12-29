# ストーリー分析レポート
**分析日**: 2025-12-29
**対象ファイル**: `/home/user/black-escape/src/data/story.ts`

---

## 📊 分析サマリー

| カテゴリ | 検出数 |
|---------|--------|
| **参照エラー** | 0件 |
| **デッドエンド** | 0件 |
| **到達不可能なシーン** | 0件 |
| **論理的矛盾** | 13件 |
| **不自然な選択肢** | 19件 |
| **合計** | **32件** |

---

## 🚨 重大な問題（最優先で修正が必要）

### 問題1: listen_silently_to_lecture シーンのテキスト矛盾

**シーンID**: `listen_silently_to_lecture`

**問題内容**:
- 選択肢: 「お互い転職活動しようか」
- 遷移先: `parting_and_cry_then_jobhunt`
- **遷移先シーンの冒頭**: 「お互い頑張ろうな」

選択肢で「転職活動しようか」と言っているのに、遷移先シーンでは「頑張ろうな」と言っています。**これは完全な矛盾です。**

**推奨修正案**:
```typescript
// parting_and_cry_then_jobhunt シーンの冒頭を修正
"text": "「お互い、転職活動しようか」\n\n後輩が角を曲がって見えなくなった。..."
```

---

### 問題2: receive_document_task → procrastinate への不自然な遷移

**シーンID**: `receive_document_task`

**問題内容**:
- 選択肢: 「無理です」
- 遷移先: `procrastinate`（転職活動を先延ばしにするシーン）

部長に対して勇気を出して「無理です」と断る選択肢なのに、遷移先は「転職活動は面倒だから後回しにした」という内容。**これは論理的に矛盾しています。**

**推奨修正案**:
1. 新しいシーン `refuse_boss_task` を作成し、部長に断った結果（パワハラ強化、降格など）の展開を追加
2. または、選択肢を「今は無理ですが...（と曖昧に濁す）」のように変更

---

### 問題3: listen_silently_to_lecture → work_alone_suffer への矛盾

**シーンID**: `listen_silently_to_lecture`

**問題内容**:
- 選択肢: 「お互い頑張ろうな」
- 遷移先: `work_alone_suffer`（一人で黙々と作業して過労で倒れるバッドエンド）

「お互い」と言っているのに、遷移先では「一人で」作業しています。**これは明らかな論理的矛盾です。**

**推奨修正案**:
```typescript
// 選択肢を修正
{ "text": "一人で頑張るしかない", "next": "work_alone_suffer" }
```

---

## ⚠️ 論理的矛盾（前向きな選択肢がバッドエンドに繋がる）

### 問題4: 前向きな選択肢が直接バッドエンドに繋がるケース

以下の選択肢は、プレイヤーに前向きな印象を与えるにも関わらず、バッドエンドに直行します：

| シーンID | 選択肢 | 遷移先 | 問題 |
|---------|--------|--------|------|
| `joint_job_hunting` | 「転職エージェントに相談する」 | `job_search_burnout` | 前向きな選択肢がバッドエンドに直行 |
| `consult_lawyer_first` | 「安い弁護士を選ぶ」 | `incompetent_lawyer` | 選択肢に「安い」とあるが罠だと気づきにくい |
| `union_preparation_meeting` | 「会社に事前相談して認めてもらう」 | `union_crushed_early` | 合理的に見える選択肢が最悪の結果に |
| `union_legal_support` | 「費用をケチって一般の弁護士」 | `weak_union_settlement` | 弁護士を雇うという前向きな行動がバッドエンド |
| `lawyer_gradual_success` | 「この改善で満足する」 | `moderate_improvement_ending` | 「満足する」という前向きな選択がバッドエンド |
| `wait_investigation_results` | 「この程度の改善で満足する」 | `moderate_improvement_ending` | 同上 |
| `monitor_company_improvement` | 「この改善で満足して働き続ける」 | `moderate_improvement_ending` | 同上 |
| `monitor_company_improvement` | 「改善された経験を活かして転職」 | `job_search_burnout` | 前向きな転職がバッドエンドに |
| `continue_improved_company` | 「この改善に満足する」 | `moderate_improvement_ending` | 「満足する」がバッドエンド |

**推奨修正案**:
1. **選択肢のテキストにヒントを追加**:
   - 「転職エージェントに相談する」→ 「転職エージェントに相談する（疲弊のリスクあり）」
   - 「この改善で満足する」→ 「これくらいで妥協する」

2. **moderate_improvement_ending をノーマルエンドに変更**:
   - 現在は「バッドエンド」として扱われていますが、「ノーマルエンド」に変更
   - または、「小さな成功エンド」として、ポジティブな結末に変更

---

## 🔄 論理的矛盾（要確認）

### 問題5: 「断る」選択肢が procrastinate に繋がる

| シーンID | 選択肢 | 遷移先 | 問題 |
|---------|--------|--------|------|
| `receive_document_task` | 「無理です」 | `procrastinate` | 断る勇気を出したのに先延ばしシーンに |
| `receive_document_task` | 「なぜ今日中なんですか？」 | `procrastinate` | 質問したのに先延ばしシーンに |
| `work_with_junior` | 「断固として断る」 | `procrastinate` | 断固として断ったのに先延ばしシーンに |
| `attend_drinking_with_boss` | 「反論する」 | `procrastinate` | 反論したのに先延ばしシーンに |
| `attend_drinking_with_boss` | 「席を立つ」 | `procrastinate` | 行動したのに先延ばしシーンに |

**推奨修正案**:
新しいシーン（例: `boss_confrontation_failure`）を作成し、部長に反抗した結果の展開を追加。

---

## 🎯 不自然な選択肢

### 問題6: 複数の選択肢が同じシーンに遷移

以下のシーンでは、意味が異なる複数の選択肢が同じ遷移先を指しています：

| シーンID | 選択肢 | 遷移先 |
|---------|--------|--------|
| `leave_on_time` | 「堂々と帰る」「「ちょっと用事が」と言い訳する」 | `leave_confidently` |
| `talk_to_boss_comment_break` | 「資料作成」「暑気払い」「書類提出」 | `receive_document_task` |
| `talk_to_boss_ignore` | 「資料作成」「プレゼン資料」「週末出社」 | `receive_document_task` |
| `accept_task_reluctantly` | 「適当に笑って誤魔化す」「無視して仕事に戻る」 | `laugh_off_and_work` |
| `ask_colleague_for_help` | 「一緒に作業」「3人で仕上げる」 | `work_with_junior` |
| `form_union_three` | 「様子を見る」「すぐに団体交渉」 | `company_union_busting` |

**推奨修正案**:
- 選択肢の意味が本当に同じなら、選択肢を1つに統合
- 意味が異なる場合は、遷移先を分けて異なる展開を作成

---

### 問題7: 選択肢が1つしかないシーン

以下のシーンでは、選択肢が1つしかなく、プレイヤーに選択の余地がありません：

| シーンID | 選択肢 |
|---------|--------|
| `recording_evidence_timing` | 「この機会に全額支払いを要求」 |
| `union_expansion_planning` | 「管理職の動きを警戒する」 |
| `research_lawyers` | 「初回相談に行く」 |
| `lawyer_strategy_meeting_rushed` | 「この条件で交渉開始」 |
| `company_initial_response` | 「交渉を続ける」 |
| `settlement_agreement_review` | 「和解金を受け取り新しい人生へ」 |
| `lawyer_demand_full_amount` | 「和解金を受け取る」 |
| `continue_improved_company` | 「この改善に満足する」 |

**推奨修正案**:
1. **自動遷移に変更**: 選択肢を削除し、シーンの終了時に自動的に次のシーンに進む
2. **別の選択肢を追加**: プレイヤーに選択の余地を与える

---

## ✅ 問題なし

以下の項目については問題が見つかりませんでした：

- ✅ **参照エラー**: すべての選択肢は有効なシーンIDを指しています
- ✅ **デッドエンド**: すべてのエンディングシーンには適切な【グッドエンド】または【バッドエンド】表示があります
- ✅ **到達不可能なシーン**: すべてのシーンは `start` シーンから到達可能です

---

## 📝 修正優先度

### 🔴 最優先（即座に修正が必要）
1. **問題1**: `listen_silently_to_lecture` → `parting_and_cry_then_jobhunt` のテキスト矛盾
2. **問題2**: `receive_document_task` → `procrastinate` の論理的矛盾
3. **問題3**: `listen_silently_to_lecture` → `work_alone_suffer` の論理的矛盾

### 🟡 高優先（早急に修正すべき）
4. **問題4**: 前向きな選択肢が直接バッドエンドに繋がるケース
5. **問題5**: 「断る」選択肢が `procrastinate` に繋がる問題

### 🟢 中優先（改善が望ましい）
6. **問題6**: 複数の選択肢が同じシーンに遷移
7. **問題7**: 選択肢が1つしかないシーン

---

## 🎮 ゲームデザイン上の提案

### 提案1: moderate_improvement_ending の扱い
現在、「この改善で満足する」という選択肢がバッドエンドに繋がっていますが、これはプレイヤーにとって不公平に感じる可能性があります。

**推奨案**:
- **ノーマルエンド**として扱う（バッドエンドでもグッドエンドでもない）
- または、選択肢のテキストを「これくらいで妥協する」「諦める」などネガティブな表現に変更

### 提案2: job_search_burnout への遷移
「転職活動を始める」という前向きな選択肢が、直接 `job_search_burnout` バッドエンドに繋がるケースが多数あります。

**推奨案**:
- 転職活動の途中経過シーンを追加し、プレイヤーに選択の機会を与える
- 例: `job_search_start` → 選択肢（頑張る / 諦める）→ グッドエンド or バッドエンド

---

## 📈 統計情報

- **総シーン数**: 87シーン
- **グッドエンド**: 3シーン
  - `parting_and_cry_then_jobhunt`
  - `company_wide_union`
  - `receive_settlement_money`
- **バッドエンド**: 24シーン
- **エンディング以外**: 60シーン

---

**分析完了**
