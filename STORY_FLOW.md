# ブラック企業からの脱出 - ストーリーフローチャート

> このドキュメントは自動生成されています。
> 生成コマンド: `npm run story:chart`

## ストーリー統計

- **総シーン数**: 115
- **到達可能シーン数**: 115
- **到達不可能シーン数**: 0
- **総エンディング数**: 31
  - グッドエンド: 3 (到達可能: 3)
  - バッドエンド: 28 (到達可能: 28)

## エンディング一覧

### グッドエンド

- ✅ **労働組合で会社改革成功** (`company_wide_union`)
- ✅ **転職成功で新たな人生へ** (`parting_and_cry_then_jobhunt`)
- ✅ **弁護士による和解成功** (`receive_settlement_money`)

### バッドエンド

- ✅ **弁護士と対立して契約解除** (`client_lawyer_conflict`)
- ✅ **証拠提示のタイミングミスで逆効果** (`evidence_backfire`)
- ✅ **証拠集めがバレて退職勧告** (`evidence_discovered`)
- ✅ **過労で体調崩して強制退職** (`health_breakdown`)
- ✅ **無能な弁護士で大損失** (`incompetent_lawyer`)
- ✅ **非公式グループで団体交渉権なし** (`informal_group_failure`)
- ✅ **会社の脅迫に屈して低額和解** (`intimidation_success`)
- ✅ **転職活動に疲弊して諦める** (`job_search_burnout`)
- ✅ **専門外の弁護士で失敗** (`lawyer_initial_consultation_bad`)
- ✅ **交渉破裂で退職勧告** (`lawyer_negotiation_breakdown`)
- ✅ **準備不足で弁護士に受任拒否される** (`lawyer_refuses_case`)
- ✅ **報復で精神を病んで退職** (`mental_breakdown`)
- ✅ **中途半端な改善で妥協** (`moderate_improvement_ending`)
- ✅ **拙速な拡大で管理職の反撃** (`premature_expansion`)
- ✅ **衝動的暴行で人生破綻** (`punch_boss`)
- ✅ **安易な妥協で大幅に損をする** (`quick_low_settlement`)
- ✅ **小さな成功に満足して全社改革を放棄** (`small_union_success`)
- ✅ **部下を潰す** (`thirty_minutes_condition`)
- ✅ **契約書の不利な条項を見落とす** (`unfair_contract_terms`)
- ✅ **会社に先手を打たれて組合潰される** (`union_crushed_early`)
- ✅ **会社の圧力に屈して組合解散** (`union_dissolution`)
- ✅ **情報漏洩で組合が潰される** (`union_info_leak`)
- ✅ **内部対立で組合崩壊** (`union_internal_conflict`)
- ✅ **法的知識不足で組合活動失敗** (`union_legal_mistake`)
- ✅ **組合分裂で孤立無援** (`union_split`)
- ✅ **暴力沙汰で解雇・刑事事件化** (`violent_confrontation`)
- ✅ **不利な和解で組合の威信失墜** (`weak_union_settlement`)
- ✅ **過労で限界に達する** (`work_alone_suffer`)

## フローチャート

```mermaid
graph TD

  %% スタイル定義
  classDef goodEnding fill:#4ade80,stroke:#22c55e,stroke-width:3px,color:#000
  classDef badEnding fill:#f87171,stroke:#ef4444,stroke-width:3px,color:#000
  classDef unreachable fill:#9ca3af,stroke:#6b7280,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
  classDef start fill:#60a5fa,stroke:#3b82f6,stroke-width:3px,color:#000

  start{"ここは片田舎のとある会社。8時出社で20"}
  consider_job_change{"このところずっと脳内にちらついていた。で"}
  awkward_smile{"「部長お疲れ様です」と適当に笑って誤魔化"}
  sarcastic_reply{"思わず口から出てしまった。  「部長こそ"}
  leave_on_time{"「今日こそ定時で帰る」そう心に決めた。も"}
  leave_confidently{"「お先に失礼します」と言って堂々と帰る。"}
  eat_overtime_bread{"コンビニで買った残業パンを食べながら、黙"}
  taxi_home{"終電を逃したのでタクシーで帰ることにした"}
  complain_to_colleague{"同期に愚痴をこぼした。「部長、本当にひど"}
  joint_job_hunting{"同期と一緒に転職活動を始めることにした。"}
  talk_to_boss_comment_break{"渋々部長の元へ行く。どうせいつもの無茶振"}
  talk_to_boss_ignore{"渋々部長の元へ行く。どうせいつもの無茶振"}
  receive_document_task{"「……えっ」渡されたのは大量の資料。もう"}
  refuse_boss_task{"勇気を振り絞って、部長に逆らった。  そ"}
  accept_task_reluctantly{"とはいえ自分に拒否権などあるわけがない。"}
  laugh_off_and_work{"「ははは……そうですね」と適当に笑って誤"}
  ask_junior_for_help{"今年入ったばかりの新人で、気立てが良い。"}
  ask_colleague_for_help{"同期に相談することにした。  「ちょっと"}
  work_alone_suffer["過労で限界に達する"]
  work_with_junior{"結局0時前までかかって、部長に資料を提出"}
  attend_drinking_with_boss{"ここで断ったら面倒なことになる。俺は後輩"}
  thirty_minutes_condition["部下を潰す"]
  listen_silently_to_lecture{"結局黙って聞き、空が明るくなる少し前に解"}
  parting_and_cry_then_jobhunt["転職成功で新たな人生へ"]
  research_union{"ネットで労働組合の作り方を調べた。  「"}
  union_member_recruitment{"労働組合を作るには、信頼できるメンバーが"}
  union_preparation_meeting{"3人で密かに準備会議を開いた。喫茶店の奥"}
  union_registration_process{"労働法を勉強し、組合規約を作成した。  "}
  form_union_three{"正式に労働組合を結成した！  労働基準監"}
  company_union_busting{"人事部長が組合員を個別に呼び出し始めた。"}
  union_member_wavering{"不当労働行為を記録していたところ、さらに"}
  gather_union_evidence{"「みんな、冷静に考えよう。会社は俺たちを"}
  union_legal_support{"証拠を集めたが、法的な知識が不足している"}
  demand_overtime_pay{"ついに団体交渉の日が来た。  労働組合側"}
  first_negotiation_tactics{"弁護士「労働基準法第37条に基づき、時間"}
  company_divide_strategy{"休憩時間、人事部長が後輩を別室に呼び出し"}
  cut_executive_pay{"「赤字経営なら、まず役員報酬を削減すべき"}
  recording_evidence_timing{"交渉は膠着状態に。会社は一部支払いでお茶"}
  negotiation_final_stage{"録音証拠の威力は絶大だった。  会社側弁"}
  win_overtime_pay{"ついに残業代全額の支払いを勝ち取った！ "}
  union_expansion_planning{"他部署に慎重にアプローチした。  営業部"}
  management_resistance{"管理職たちが組合拡大に激しく抵抗し始めた"}
  company_reform_negotiation{"労基署と連携し、不当労働行為として正式に"}
  company_wide_union["労働組合で会社改革成功"]
  labor_inspection{"労働基準監督署に相談することにした。  "}
  consult_lawyer_first{"弁護士に相談することにした。  でも、ど"}
  research_lawyers{"労働問題専門の弁護士事務所を慎重にリサー"}
  lawyer_initial_consultation{"弁護士事務所を訪れた。落ち着いた雰囲気の"}
  evidence_collection_phase{"弁護士「まずは徹底的に証拠を集めましょう"}
  lawyer_strategy_meeting{"1ヶ月後、十分な証拠を集めて再び弁護士事"}
  lawyer_strategy_meeting_rushed{"2週間で集めた証拠を弁護士に見せた。  "}
  plan_anonymous_report{"匿名申告について考えることにした。  署"}
  lawyer_group_negotiation{"弁護士に団体交渉を依頼することにした。 "}
  lawyer_individual_negotiation{"弁護士「会社に内容証明郵便で、未払い残業"}
  company_initial_response{"弁護士を交えた正式な交渉が始まった。  "}
  labor_tribunal{"会社が和解額を渋り、交渉は平行線をたどっ"}
  negotiation_pressure_tactics{"交渉が進む中、会社側が圧力をかけてきた。"}
  settlement_amount_negotiation{"脅迫を記録したことで、会社側の態度が軟化"}
  company_counteroffer{"弁護士「この金額で合意しましょう。これ以"}
  settlement_agreement_review{"和解契約書が届いた。  弁護士「署名の前"}
  gather_evidence_carefully{"慎重に証拠を集めることにした。  ・給与"}
  report_with_minimal_evidence{"給与明細だけで申告することにした。  「"}
  gather_evidence_with_colleague{"同期に証拠集めを手伝ってもらうことにした"}
  lawyer_demanding_negotiation{"強気で全面的な改善を要求することにした。"}
  lawyer_gradual_plan{"段階的改善案を提示することにした。  弁"}
  lawyer_listen_first{"会社の最初の提案を聞くことにした。  会"}
  lawyer_demand_full_amount{"全額請求を貫くことにした。  弁護士「未"}
  lawyer_litigation_threat{"裁判を辞さない姿勢を見せて交渉することに"}
  submit_evidence_report{"十分な証拠を集めて申告書を提出した。  "}
  gather_more_evidence{"さらに追加で証拠を集めることにした。  "}
  rush_evidence_submission{"追加の証拠をすぐに労働基準監督署に送るこ"}
  multi_person_report{"複数人での申告で力を強めることにした。 "}
  lawyer_accept_compromise{"会社の妥協案を軸に進めることにした。  "}
  lawyer_push_further{"さらに厳しい条件を要求することにした。 "}
  lawyer_gradual_success{"段階的改善を受け入れることにした。  第"}
  lawyer_set_deadlines{"各段階の期限を明記させることにした。  "}
  follow_lawyer_advice{"弁護士の指示で交渉を進めることにした。 "}
  assert_own_demands{"自分の主張を強く出すことにした。  「こ"}
  receive_settlement_money["弁護士による和解成功"]
  lawyer_additional_claim{"是正勧告だけでは終わらせない。正式に弁護"}
  lawyer_low_settlement{"低額の和解を受け入れることにした。  こ"}
  lawyer_negotiation_breakdown["交渉破裂で退職勧告"]
  lawyer_low_settlement_accept{"低額の和解金を受け取った。  「少ないけ"}
  wait_investigation_results{"労働基準監督署の調査が進んだ。  2週間"}
  monitor_company_improvement{"会社の改善状況を監視することにした。  "}
  continue_improved_company{"改善された会社で、しばらく働き続けること"}
  procrastinate{"転職活動は面倒だから、後回しにすることに"}
  accept_overtime_daily{"毎日の残業を受け入れることにした。  「"}
  health_breakdown["過労で体調崩して強制退職"]
  union_route{"労働組合について考えてみることにした。 "}
  run_away_quickly{"小走りで部長の前から逃げた。  「待てよ"}
  mental_breakdown["報復で精神を病んで退職"]
  job_search_burnout["転職活動に疲弊して諦める"]
  evidence_discovered["証拠集めがバレて退職勧告"]
  punch_boss["衝動的暴行で人生破綻"]
  union_info_leak["情報漏洩で組合が潰される"]
  union_legal_mistake["法的知識不足で組合活動失敗"]
  union_crushed_early["会社に先手を打たれて組合潰される"]
  informal_group_failure["非公式グループで団体交渉権なし"]
  violent_confrontation["暴力沙汰で解雇・刑事事件化"]
  union_dissolution["会社の圧力に屈して組合解散"]
  union_split["組合分裂で孤立無援"]
  union_internal_conflict["内部対立で組合崩壊"]
  weak_union_settlement["不利な和解で組合の威信失墜"]
  evidence_backfire["証拠提示のタイミングミスで逆効果"]
  premature_expansion["拙速な拡大で管理職の反撃"]
  small_union_success["小さな成功に満足して全社改革を放棄"]
  moderate_improvement_ending["中途半端な改善で妥協"]
  incompetent_lawyer["無能な弁護士で大損失"]
  lawyer_refuses_case["準備不足で弁護士に受任拒否される"]
  lawyer_initial_consultation_bad["専門外の弁護士で失敗"]
  client_lawyer_conflict["弁護士と対立して契約解除"]
  intimidation_success["会社の脅迫に屈して低額和解"]
  quick_low_settlement["安易な妥協で大幅に損をする"]
  unfair_contract_terms["契約書の不利な条項を見落とす"]

  %% エッジの定義
  start -->|"そろそろ転職かなあ"| consider_job_change
  start -->|"転職活動面倒だしなあ"| procrastinate
  start -->|"労働組合とかないのかなあ"| union_route
  consider_job_change -->|"曖昧に笑って誤魔化す"| awkward_smile
  consider_job_change -->|"「部長こそお疲れ様です」と皮肉..."| sarcastic_reply
  consider_job_change -->|"よし殴ろう"| punch_boss
  awkward_smile -->|"今日こそ定時で帰る"| leave_on_time
  awkward_smile -->|"残業パンを食べながら耐える"| eat_overtime_bread
  awkward_smile -->|"同期に愚痴る"| complain_to_colleague
  sarcastic_reply -->|"そのまま逃げる"| run_away_quickly
  sarcastic_reply -->|"「冗談です」と取り繕う"| awkward_smile
  sarcastic_reply -->|"部長の元へ呼ばれる"| talk_to_boss_ignore
  leave_on_time -->|"堂々と帰る"| leave_confidently
  leave_on_time -->|"やっぱり気が引けて残業を続ける"| eat_overtime_bread
  leave_confidently -->|"労働基準監督署に相談する"| labor_inspection
  leave_confidently -->|"そのまま転職活動を始める"| job_search_burnout
  leave_confidently -->|"今日の解放感を噛み締める"| eat_overtime_bread
  eat_overtime_bread -->|"タクシーで帰る"| taxi_home
  eat_overtime_bread -->|"同期に愚痴をこぼす"| complain_to_colleague
  eat_overtime_bread -->|"部長に呼ばれる"| talk_to_boss_comment_break
  taxi_home -->|"転職活動を本格化する"| job_search_burnout
  taxi_home -->|"労働組合について調べる"| research_union
  taxi_home -->|"このまま我慢し続ける"| procrastinate
  complain_to_colleague -->|"一緒に転職活動をする"| joint_job_hunting
  complain_to_colleague -->|"労働組合について調べる"| research_union
  complain_to_colleague -->|"まずは自分だけで行動する"| job_search_burnout
  joint_job_hunting -->|"勢いで本格的に転職活動を始める"| job_search_burnout
  joint_job_hunting -->|"焦って転職エージェントに駆け込..."| job_search_burnout
  joint_job_hunting -->|"まず労働環境改善を試みる"| research_union
  talk_to_boss_comment_break -->|"資料作成の仕事を受ける"| receive_document_task
  talk_to_boss_comment_break -->|"暑気払いの準備を手伝う"| receive_document_task
  talk_to_boss_comment_break -->|"書類提出について話を聞く"| receive_document_task
  talk_to_boss_ignore -->|"資料作成の仕事を受ける"| receive_document_task
  talk_to_boss_ignore -->|"プレゼン資料の作成を受ける"| receive_document_task
  talk_to_boss_ignore -->|"週末出社の指示を受ける"| receive_document_task
  receive_document_task -->|"わかりました……"| accept_task_reluctantly
  receive_document_task -->|"なぜ今日中なんですか？"| refuse_boss_task
  receive_document_task -->|"無理です"| refuse_boss_task
  refuse_boss_task -->|"弁護士に相談して法的に戦う"| consult_lawyer_first
  refuse_boss_task -->|"労働組合の結成を検討する"| research_union
  refuse_boss_task -->|"労働基準監督署に駆け込む"| labor_inspection
  accept_task_reluctantly -->|"よし殴ろう"| punch_boss
  accept_task_reluctantly -->|"適当に笑って誤魔化す"| laugh_off_and_work
  accept_task_reluctantly -->|"無視して仕事に戻る"| laugh_off_and_work
  laugh_off_and_work -->|"一人で終わりそうもない。後輩の..."| ask_junior_for_help
  laugh_off_and_work -->|"一人で終わりそうもない。同期の..."| ask_colleague_for_help
  laugh_off_and_work -->|"一人で終わりそうもない。けど一..."| work_alone_suffer
  ask_junior_for_help -->|"一緒に作業して仕上げる"| work_with_junior
  ask_junior_for_help -->|"やっぱり一人でやることにする"| work_alone_suffer
  ask_junior_for_help -->|"他の先輩にも声をかける"| ask_colleague_for_help
  ask_colleague_for_help -->|"一緒に作業して仕上げる"| work_with_junior
  ask_colleague_for_help -->|"後輩も巻き込んで3人で仕上げる"| work_with_junior
  ask_colleague_for_help -->|"やっぱり迷惑かけたくない"| work_alone_suffer
  work_with_junior -->|"断固として断る"| refuse_boss_task
  work_with_junior -->|"仕方なく付き合う"| attend_drinking_with_boss
  work_with_junior -->|"30分だけなら"| thirty_minutes_condition
  attend_drinking_with_boss -->|"反論する"| refuse_boss_task
  attend_drinking_with_boss -->|"黙って聞く"| listen_silently_to_lecture
  attend_drinking_with_boss -->|"席を立つ"| refuse_boss_task
  listen_silently_to_lecture -->|"お互い転職活動しようか"| parting_and_cry_then_jobhunt
  listen_silently_to_lecture -->|"一人で頑張るしかない"| work_alone_suffer
  listen_silently_to_lecture -->|"もう限界だ..."| mental_breakdown
  research_union -->|"慎重にメンバーを集める"| union_member_recruitment
  research_union -->|"やっぱり転職の方が安全かも"| job_search_burnout
  research_union -->|"労基署に相談してみる"| labor_inspection
  union_member_recruitment -->|"信頼できる3人だけで始める"| union_preparation_meeting
  union_member_recruitment -->|"すぐに大人数を集めて力を見せる"| union_info_leak
  union_member_recruitment -->|"一人で始めるのが一番安全"| work_alone_suffer
  union_preparation_meeting -->|"労働法の勉強会を開く"| union_registration_process
  union_preparation_meeting -->|"勉強は後回し、すぐに行動"| union_legal_mistake
  union_preparation_meeting -->|"会社に事前相談して認めてもらう"| union_crushed_early
  union_registration_process -->|"正式に労働組合として登録する"| form_union_three
  union_registration_process -->|"非公式なグループのまま進める"| informal_group_failure
  union_registration_process -->|"登録は後回しにして先に行動"| company_union_busting
  form_union_three -->|"様子を見る"| company_union_busting
  form_union_three -->|"すぐに団体交渉を申し入れる"| company_union_busting
  company_union_busting -->|"不当労働行為として詳細に記録す..."| union_member_wavering
  company_union_busting -->|"怒って人事部長に詰め寄る"| violent_confrontation
  company_union_busting -->|"怖くなって組合を解散する"| union_dissolution
  union_member_wavering -->|"冷静に組合の意義を説明する"| gather_union_evidence
  union_member_wavering -->|"『昇進を受けていいよ』と勧める"| union_split
  union_member_wavering -->|"感情的に『裏切り者！』と非難"| union_internal_conflict
  gather_union_evidence -->|"組合員全員で組織的に証拠収集"| union_legal_support
  gather_union_evidence -->|"自分一人で証拠を集める"| evidence_discovered
  gather_union_evidence -->|"証拠なしですぐ交渉開始"| union_legal_mistake
  union_legal_support -->|"労働組合専門の弁護士に依頼"| demand_overtime_pay
  union_legal_support -->|"自力で法律を解釈して進める"| union_legal_mistake
  union_legal_support -->|"費用をケチって一般の弁護士"| weak_union_settlement
  demand_overtime_pay -->|"弁護士同席で冷静に法的根拠を説..."| first_negotiation_tactics
  demand_overtime_pay -->|"感情的に怒りをぶつける"| lawyer_negotiation_breakdown
  demand_overtime_pay -->|"低い金額から交渉開始する"| weak_union_settlement
  first_negotiation_tactics -->|"会社の分断工作を警戒する"| company_divide_strategy
  first_negotiation_tactics -->|"交渉を続行する"| company_divide_strategy
  company_divide_strategy -->|"団結を守り、個別交渉を拒否"| cut_executive_pay
  company_divide_strategy -->|"『個別交渉してもいいよ』と言う"| union_split
  company_divide_strategy -->|"強硬姿勢で即座に交渉打ち切り"| lawyer_negotiation_breakdown
  cut_executive_pay -->|"交渉が膠着した時まで待つ"| recording_evidence_timing
  cut_executive_pay -->|"今すぐ録音を提示して優位に立つ"| evidence_backfire
  cut_executive_pay -->|"録音を隠したまま交渉継続"| union_legal_mistake
  recording_evidence_timing -->|"この機会に冷静に全額支払いを要..."| negotiation_final_stage
  recording_evidence_timing -->|"勢いに任せて慰謝料まで一気に上..."| lawyer_negotiation_breakdown
  negotiation_final_stage -->|"満額の支払いまで粘る"| win_overtime_pay
  negotiation_final_stage -->|"妥協して一部の支払いで合意"| weak_union_settlement
  negotiation_final_stage -->|"さらに慰謝料も請求する"| lawyer_negotiation_breakdown
  win_overtime_pay -->|"慎重に他部署に声をかける"| union_expansion_planning
  win_overtime_pay -->|"勢いで全社に呼びかける"| premature_expansion
  win_overtime_pay -->|"3人のままで満足する"| small_union_success
  union_expansion_planning -->|"管理職の動きを警戒し、慎重に足..."| management_resistance
  union_expansion_planning -->|"勢いそのままに一気に全社へ呼び..."| premature_expansion
  management_resistance -->|"労基署と連携して不当労働行為で..."| company_reform_negotiation
  management_resistance -->|"管理職と直接対決する"| union_internal_conflict
  management_resistance -->|"引き下がって3人体制に戻る"| small_union_success
  company_reform_negotiation -->|"段階的な改革案を提示する"| company_wide_union
  company_reform_negotiation -->|"一気に全ての要求を押し通す"| premature_expansion
  company_reform_negotiation -->|"現状維持で妥協する"| small_union_success
  labor_inspection -->|"組合を結成して団体交渉する"| form_union_three
  labor_inspection -->|"弁護士に相談するルートを選ぶ"| consult_lawyer_first
  labor_inspection -->|"会社への匿名申告を検討する"| plan_anonymous_report
  consult_lawyer_first -->|"労働問題専門の弁護士を探す"| research_lawyers
  consult_lawyer_first -->|"安い弁護士を選ぶ"| incompetent_lawyer
  consult_lawyer_first -->|"知人の紹介で適当に決める"| lawyer_initial_consultation_bad
  research_lawyers -->|"実績重視で初回相談に行く"| lawyer_initial_consultation
  research_lawyers -->|"やはり費用が惜しくなり、安い事..."| incompetent_lawyer
  lawyer_initial_consultation -->|"詳細に状況を説明し証拠も見せる"| evidence_collection_phase
  lawyer_initial_consultation -->|"曖昧な説明だけにする"| lawyer_refuses_case
  lawyer_initial_consultation -->|"感情的に訴える"| lawyer_initial_consultation_bad
  evidence_collection_phase -->|"1ヶ月かけて徹底的に証拠収集"| lawyer_strategy_meeting
  evidence_collection_phase -->|"2週間で基本的な証拠のみ"| lawyer_strategy_meeting_rushed
  evidence_collection_phase -->|"すぐに交渉開始してほしい"| quick_low_settlement
  lawyer_strategy_meeting -->|"弁護士の戦略に完全に従う"| lawyer_individual_negotiation
  lawyer_strategy_meeting -->|"自分の意見を強く主張する"| client_lawyer_conflict
  lawyer_strategy_meeting -->|"消極的で任せきりにする"| lawyer_strategy_meeting_rushed
  lawyer_strategy_meeting_rushed -->|"この条件のまま交渉を開始する"| lawyer_individual_negotiation
  lawyer_strategy_meeting_rushed -->|"やはり不安なので、追加で証拠を..."| gather_more_evidence
  plan_anonymous_report -->|"証拠を集める"| gather_evidence_carefully
  plan_anonymous_report -->|"給与明細だけで申告する"| report_with_minimal_evidence
  plan_anonymous_report -->|"同期にも証拠集めを手伝ってもら..."| gather_evidence_with_colleague
  lawyer_group_negotiation -->|"強気で全面的な改善を要求"| lawyer_demanding_negotiation
  lawyer_group_negotiation -->|"段階的改善案を提示"| lawyer_gradual_plan
  lawyer_group_negotiation -->|"会社の最初の提案を聞く"| lawyer_listen_first
  lawyer_individual_negotiation -->|"追加証拠を冷静に提示"| company_initial_response
  lawyer_individual_negotiation -->|"感情的に反論する"| lawyer_negotiation_breakdown
  lawyer_individual_negotiation -->|"引き下がって妥協する"| quick_low_settlement
  company_initial_response -->|"ひるまず粘り強く交渉を続ける"| labor_tribunal
  company_initial_response -->|"提示された額で早期に和解してし..."| quick_low_settlement
  labor_tribunal -->|"弁護士とともに証拠を示して堂々..."| negotiation_pressure_tactics
  labor_tribunal -->|"場の空気に飲まれて会社の提示額..."| quick_low_settlement
  negotiation_pressure_tactics -->|"脅迫として記録し交渉継続"| settlement_amount_negotiation
  negotiation_pressure_tactics -->|"怖くなって妥協する"| intimidation_success
  negotiation_pressure_tactics -->|"激怒して交渉打ち切り"| lawyer_negotiation_breakdown
  settlement_amount_negotiation -->|"弁護士と相談して妥当な金額で合..."| company_counteroffer
  settlement_amount_negotiation -->|"すぐに会社の提示額で受け入れる"| quick_low_settlement
  settlement_amount_negotiation -->|"絶対に満額を譲らない"| lawyer_negotiation_breakdown
  company_counteroffer -->|"弁護士と一緒に契約書を精査"| settlement_agreement_review
  company_counteroffer -->|"ざっと読んで即座に署名"| unfair_contract_terms
  company_counteroffer -->|"契約に不満で拒否する"| lawyer_negotiation_breakdown
  settlement_agreement_review -->|"弁護士と一条ずつ精査し、納得し..."| receive_settlement_money
  settlement_agreement_review -->|"早く終わらせたくて確認を切り上..."| unfair_contract_terms
  gather_evidence_carefully -->|"申告書を提出する"| submit_evidence_report
  gather_evidence_carefully -->|"さらに追加で証拠を集める"| gather_more_evidence
  gather_evidence_carefully -->|"証拠集めがバレてしまう"| evidence_discovered
  report_with_minimal_evidence -->|"追加の証拠をすぐに送る"| rush_evidence_submission
  report_with_minimal_evidence -->|"調査の進行を見守る"| wait_investigation_results
  gather_evidence_with_colleague -->|"申告書を提出する"| submit_evidence_report
  gather_evidence_with_colleague -->|"複数人で申告の力を強める"| multi_person_report
  gather_evidence_with_colleague -->|"複数人での証拠集めがバレてしま..."| evidence_discovered
  lawyer_demanding_negotiation -->|"会社の妥協案を受け入れる"| lawyer_accept_compromise
  lawyer_demanding_negotiation -->|"さらに厳しい条件を要求する"| lawyer_push_further
  lawyer_gradual_plan -->|"段階的改善を受け入れる"| lawyer_gradual_success
  lawyer_gradual_plan -->|"各段階の期限を明記させる"| lawyer_set_deadlines
  lawyer_listen_first -->|"弁護士の指示で交渉を進める"| follow_lawyer_advice
  lawyer_listen_first -->|"自分の主張を強く出す"| assert_own_demands
  lawyer_demand_full_amount -->|"弁護士に正式な交渉を一任して詰..."| company_initial_response
  lawyer_demand_full_amount -->|"それでも足りないと最後までゴネ..."| lawyer_negotiation_breakdown
  lawyer_litigation_threat -->|"弁護士に正式な交渉を一任する"| company_initial_response
  lawyer_litigation_threat -->|"さらに交渉を続ける"| lawyer_demand_full_amount
  submit_evidence_report -->|"会社の改善状況を見守る"| continue_improved_company
  submit_evidence_report -->|"弁護士を雇って追加請求する"| lawyer_additional_claim
  submit_evidence_report -->|"この機会に転職活動を始める"| job_search_burnout
  gather_more_evidence -->|"完全な証拠とともに申告"| submit_evidence_report
  gather_more_evidence -->|"同僚と共に複数人で申告"| multi_person_report
  rush_evidence_submission -->|"是正勧告を見守る"| continue_improved_company
  rush_evidence_submission -->|"弁護士に依頼して慰謝料請求"| consult_lawyer_first
  rush_evidence_submission -->|"労働組合を結成する"| form_union_three
  multi_person_report -->|"この機会に労働組合を正式に結成"| form_union_three
  multi_person_report -->|"弁護士を立てて団体交渉"| lawyer_group_negotiation
  multi_person_report -->|"調査結果だけで満足する"| moderate_improvement_ending
  lawyer_accept_compromise -->|"弁護士に正式な交渉を一任して詰..."| company_initial_response
  lawyer_accept_compromise -->|"ここで打ち切って転職活動を始め..."| job_search_burnout
  lawyer_accept_compromise -->|"改善された会社で働き続ける"| continue_improved_company
  lawyer_push_further -->|"最終提案を受け入れる"| lawyer_accept_compromise
  lawyer_push_further -->|"裁判を決行する"| lawyer_litigation_threat
  lawyer_gradual_success -->|"労働組合を結成して全社改革を目..."| union_member_recruitment
  lawyer_gradual_success -->|"ここで戦いを終える"| moderate_improvement_ending
  lawyer_gradual_success -->|"改善の進捗を監視し続ける"| monitor_company_improvement
  lawyer_set_deadlines -->|"改善の進捗を確認する"| lawyer_gradual_success
  lawyer_set_deadlines -->|"毎月の監視体制を整える"| monitor_company_improvement
  lawyer_set_deadlines -->|"期限を待つ間に転職も検討"| job_search_burnout
  follow_lawyer_advice -->|"弁護士に正式な交渉を一任して詰..."| company_initial_response
  follow_lawyer_advice -->|"改善された会社に残る"| continue_improved_company
  assert_own_demands -->|"低額の和解を受け入れる"| lawyer_low_settlement
  assert_own_demands -->|"交渉を打ち切る"| lawyer_negotiation_breakdown
  lawyer_additional_claim -->|"弁護士に交渉を一任して進める"| lawyer_individual_negotiation
  lawyer_additional_claim -->|"焦って自分から会社に金額を提示..."| quick_low_settlement
  lawyer_low_settlement -->|"低額の和解金を受け取る"| lawyer_low_settlement_accept
  lawyer_low_settlement -->|"最後にもう一度交渉を試みる"| lawyer_demand_full_amount
  lawyer_low_settlement -->|"諦めてこれで終わりにする"| lawyer_low_settlement_accept
  lawyer_low_settlement_accept -->|"転職活動を本格的に始める"| job_search_burnout
  lawyer_low_settlement_accept -->|"改善された会社に残る"| continue_improved_company
  wait_investigation_results -->|"労働組合を結成して本格的に改革..."| union_member_recruitment
  wait_investigation_results -->|"弁護士に依頼して個人で戦う"| consult_lawyer_first
  wait_investigation_results -->|"この程度の改善で満足する"| moderate_improvement_ending
  monitor_company_improvement -->|"さらに組合を全社に拡大して根本..."| union_member_recruitment
  monitor_company_improvement -->|"この成果で妥協する"| moderate_improvement_ending
  monitor_company_improvement -->|"せっかくの改善を捨てて転職に踏..."| job_search_burnout
  continue_improved_company -->|"労働組合を結成し、全社的な改革..."| union_member_recruitment
  continue_improved_company -->|"今の改善で十分だと、ここで区切..."| moderate_improvement_ending
  continue_improved_company -->|"安定した今のうちに、より良い会..."| job_search_burnout
  procrastinate -->|"毎日残業を続ける"| accept_overtime_daily
  procrastinate -->|"今からでも転職活動を始める"| job_search_burnout
  procrastinate -->|"労働組合を作ろうと決意"| research_union
  accept_overtime_daily -->|"限界を感じる"| health_breakdown
  accept_overtime_daily -->|"今すぐ転職活動を始める"| job_search_burnout
  accept_overtime_daily -->|"労働基準監督署に相談"| labor_inspection
  union_route -->|"労働組合について調べる"| research_union
  union_route -->|"転職した方が早いかも"| job_search_burnout
  union_route -->|"まず労基署に相談"| labor_inspection
  run_away_quickly -->|"精神的に追い詰められる"| mental_breakdown
  run_away_quickly -->|"不当処分として弁護士に相談"| consult_lawyer_first
  run_away_quickly -->|"この機に転職を決意"| job_search_burnout

  %% スタイルクラスの適用
  class start start
  class parting_and_cry_then_jobhunt,company_wide_union,receive_settlement_money goodEnding
  class work_alone_suffer,thirty_minutes_condition,lawyer_negotiation_breakdown,health_breakdown,mental_breakdown,job_search_burnout,evidence_discovered,punch_boss,union_info_leak,union_legal_mistake,union_crushed_early,informal_group_failure,violent_confrontation,union_dissolution,union_split,union_internal_conflict,weak_union_settlement,evidence_backfire,premature_expansion,small_union_success,moderate_improvement_ending,incompetent_lawyer,lawyer_refuses_case,lawyer_initial_consultation_bad,client_lawyer_conflict,intimidation_success,quick_low_settlement,unfair_contract_terms badEnding
```

## 凡例

- 🟦 **青色**: スタートシーン
- 🟢 **緑色**: グッドエンド
- 🔴 **赤色**: バッドエンド
- ⚪ **灰色（点線）**: 到達不可能なシーン
- ◇ **ひし形**: 分岐点（複数の選択肢）
- ▭ **長方形**: 通常シーン
