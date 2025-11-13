interface Choice {
  text: string;
  next: string;
}

interface StoryNode {
  text: string;
  background: string;
  bgm: string;
  choices: Choice[];
}

interface StoryDataType {
  [key: string]: StoryNode;
}

export const storyData: StoryDataType = {
  "start": {
    "text": "ここは片田舎のとある会社。8時出社で20時就業がデフォルト。定時は5時。どうしようもない上司と訳のわからない人しかいない、変人の巣窟。給料は安く、残業時間は多い。なのに売上は伸びていないらしい。\n\n同期が囁く。「今週土曜日も出勤だけど、そんな売上ないのに、何のために出社してるんだろうなあ」\n\n本当にそうだ。こんな会社辞めてやりたい。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "そろそろ転職かなあ", "next": "consider_job_change" },
      { "text": "転職活動面倒だしなあ", "next": "procrastinate" },
      { "text": "労働組合とかないのかなあ", "next": "union_route" }
    ]
  },
  
  "consider_job_change": {
    "text": "転職を考えていると、部長が声をかけてきた。\n\n「お前今年で何歳だっけ」\n「25歳っす」\n「あ〜そうなのか。お前もそんな若くないんだな」\n\nは？40後半のおじさんに言われたくないが。こいつ絶対に定時で帰る人だし、タバコ休憩で1時間以上帰ってこないくせに。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "よし殴ろう", "next": "punch_boss" },
      { "text": "曖昧に笑って誤魔化す", "next": "awkward_smile" },
      { "text": "「部長こそお疲れ様です」と皮肉を込めて言う", "next": "sarcastic_reply" }
    ]
  },

  "punch_boss": {
    "text": "カッとなって部長に拳を振り上げた瞬間...!\n\n「おい、何やってんだお前！」\n\n即座に人事部に連れて行かれ、懲戒解雇が決定。履歴書に傷がついてしまった。\n\n「あー、やっちまった...」\n\n【バッドエンド：衝動的解雇】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "awkward_smile": {
    "text": "「あはは...そうですね」と曖昧に笑って誤魔化した。\n\n部長「そんな若くないよな。アラサーじゃんww」\n\n完全にセクハラまがいの発言だが、ここで反論すると面倒なことになりそう。\n\n今日も23時まで仕事が確定している。残業代は110円。昨日の残業パンがまだ残ってる...",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "今日こそ定時で帰る", "next": "leave_on_time" },
      { "text": "残業パンを食べながら耐える", "next": "eat_overtime_bread" },
      { "text": "同期に愚痴る", "next": "complain_to_colleague" }
    ]
  },

  "sarcastic_reply": {
    "text": "「部長こそお疲れ様です。今日もタバコ休憩、頑張ってくださいね」\n\n部長の顔が一瞬ピクリと動く。\n\n「...何だその言い方は」\n\n空気が険悪になった。これはまずい。でも言ってしまったものは仕方ない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "「冗談ですよ」とフォローする", "next": "cover_up_joke" },
      { "text": "そのまま逃げる", "next": "run_away" },
      { "text": "「事実を言っただけです」と開き直る", "next": "double_down" }
    ]
  },

  "leave_on_time": {
    "text": "今日こそ定時で帰ろうと決意した。17時になった瞬間、パソコンを閉じて帰る準備をする。\n\n「お疲れ様でした〜」\n\n部長「おい、まだ仕事残ってるだろ？」\n\n「明日やります」\n\n周りの視線が痛い。でも帰る。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "堂々と帰る", "next": "leave_confidently" },
      { "text": "小走りで逃げる", "next": "run_away_quickly" },
      { "text": "「体調悪いんで」と嘘をつく", "next": "fake_sick" }
    ]
  },

  "eat_overtime_bread": {
    "text": "残業パンを齧りながら23時まで仕事をした。コンビニのパンが夕食代わり。\n\n「今月のボーナスカットで、もうカップ麺生活確定だな...」\n\n会社は赤字経営らしいが、なぜか重役は高級車に乗っている。\n\n帰る頃には終電がなくなっていた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "タクシーで帰る（自腹）", "next": "taxi_home" },
      { "text": "会社に泊まる", "next": "sleep_at_office" },
      { "text": "歩いて帰る", "next": "walk_home" }
    ]
  },

  "complain_to_colleague": {
    "text": "同期に愚痴った。\n\n「あの部長、マジでムカつくよな」\n「わかる。この前なんて飲み会で俺らを潰そうとしてきたし」\n「あー、あの時か。違う部署の部長を追い込んでたのも引いたわ」\n\n「でも転職活動、面倒だよなあ...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "「一緒に転職活動しない？」", "next": "joint_job_hunting" },
      { "text": "「労働組合作ろうぜ」", "next": "create_union" },
      { "text": "「後輩いびりでストレス発散する？」", "next": "bully_junior" }
    ]
  },

  "leave_confidently": {
    "text": "堂々と帰った。翌日、部長に呼び出された。\n\n「昨日はなんだったんだ？」\n「定時で帰っただけです」\n「みんな残業してるのに、お前だけ帰るなんて協調性がない」\n\n「じゃあ残業代ちゃんと払ってください」\n\n部長、言葉に詰まる。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働基準監督署に相談する", "next": "labor_inspection" },
      { "text": "転職活動を本格化する", "next": "serious_job_hunting" },
      { "text": "「残業代払わないなら働きません」", "next": "no_work_no_pay" }
    ]
  },

  "taxi_home": {
    "text": "タクシーで帰宅。料金は5,000円。\n\n「残業代110円なのに、タクシー代5,000円って何の罰ゲームだよ...」\n\n家に着いて通帳を見ると、残高が危険水域。\n\n「このままじゃ生活できない」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "副業を始める", "next": "start_side_job" },
      { "text": "親に借金をお願いする", "next": "borrow_from_parents" },
      { "text": "転職サイトに登録する", "next": "register_job_site" }
    ]
  },

  "joint_job_hunting": {
    "text": "同期と一緒に転職活動を始めることにした。\n\n「お互い情報交換しながらやろうぜ」\n「そうしよう。一人だとサボりそうだし」\n\n二人で転職サイトに登録。お互いの履歴書をチェックし合う。\n\n「意外と俺たち、市場価値あるかもよ？」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "同じ会社に応募する", "next": "apply_same_company" },
      { "text": "違う業界を狙う", "next": "different_industries" },
      { "text": "転職エージェントに相談する", "next": "consult_agent" }
    ]
  },

  "serious_job_hunting": {
    "text": "本格的に転職活動を開始。定時で帰る習慣をつけ、面接のスケジュールを組む。\n\n1週間で5社の書類選考を通過。\n\n「あれ？俺、思ったより需要あるじゃん」\n\n面接で現在の会社の労働環境を説明すると、面接官が驚く。\n\n「それは酷いですね...うちはちゃんと残業代出ますよ」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "内定をもらう", "next": "get_job_offer" },
      { "text": "より良い条件を交渉する", "next": "negotiate_conditions" },
      { "text": "複数内定をもらって選ぶ", "next": "multiple_offers" }
    ]
  },

  "get_job_offer": {
    "text": "ついに内定をもらった！年収は100万円アップ、残業は月20時間以内、完全週休二日制。\n\n「これが普通の会社か...」\n\n退職願を出すため、部長に面談を申し込む。\n\n「退職？お前、どこに行くつもりだ？」\n\n「より良い環境で働きたいんです」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "きっぱりと退職する", "next": "clean_resignation" },
      { "text": "引き留めを断る", "next": "refuse_retention" },
      { "text": "後任の引き継ぎをしっかりする", "next": "proper_handover" }
    ]
  },

  "clean_resignation": {
    "text": "「お世話になりました」\n\n部長「待てよ、お前がいなくなったら困る」\n\n「それは会社の問題です。僕の問題ではありません」\n\n有給消化もしっかりと取得。最後の日、同期が見送ってくれた。\n\n「お前、変わったな」\n\n「当たり前だろ。人生変えるんだから」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "新しい会社でスタートする", "next": "new_company_start" }
    ]
  },

  "new_company_start": {
    "text": "新しい会社での初日。\n\n「定時で帰れるって本当ですか？」\n「もちろんです。残業する時はちゃんと申請してもらいますし、代休も取れますよ」\n\n「...本当に？」\n\n昼休みは1時間きっちり。コーヒーも無料。WiFiも爆速。\n\n「これが普通の会社か...今までの苦労はなんだったんだ」\n\n【グッドエンド：転職成功】",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": []
  },

  "create_union": {
    "text": "「労働組合作ろうぜ」\n\n同期が目を輝かせる。\n\n「それいいじゃん！残業代110円とか、絶対におかしいもん」\n「飲み会に無理やり連行とか、完全にパワハラだし」\n\n「でも、どうやって作るんだ？」\n\n労働組合について調べてみることにした。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "ネットで労働組合の作り方を調べる", "next": "research_union" },
      { "text": "他の同僚にも声をかける", "next": "recruit_colleagues" },
      { "text": "労働基準監督署に相談する", "next": "labor_inspection_first" }
    ]
  },

  "research_union": {
    "text": "ネットで労働組合の作り方を調べた。\n\n「労働組合は3人以上で作れるのか」\n「団体交渉権があるから、会社と対等に話し合えるんだ」\n\n同期「でも、会社にバレたらクビになるんじゃない？」\n\n「組合活動で解雇は違法だから大丈夫...のはず」\n\n不安だが、現状を変えるには行動するしかない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "まずは3人で組合を結成する", "next": "form_union_three" },
      { "text": "もっと人数を集めてから行動する", "next": "gather_more_people" },
      { "text": "外部の労働組合に加入する", "next": "join_external_union" }
    ]
  },

  "recruit_colleagues": {
    "text": "他の同僚にも声をかけてみた。\n\n「労働組合？やばくない？」\n「会社にバレたら終わりでしょ」\n\nほとんどの人が及び腰。でも、一人だけ興味を示した人がいた。\n\n後輩「実は僕も、この会社おかしいと思ってたんです。先輩の後輩いびりも酷いし...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "後輩と一緒に組合活動を始める", "next": "start_with_junior" },
      { "text": "もっと慎重に仲間を探す", "next": "find_allies_carefully" },
      { "text": "匿名で会社の問題を告発する", "next": "anonymous_report" }
    ]
  },

  "form_union_three": {
    "text": "同期と後輩の3人で労働組合を結成することにした。\n\n「組合名はどうする？」\n「『○○会社労働組合』でいいんじゃない？」\n\n組合規約を作成し、役員を決める。委員長は俺がやることになった。\n\n「いよいよ会社と交渉するのか...」\n\n緊張と期待が入り混じる。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "残業代の支払いを要求する", "next": "demand_overtime_pay" },
      { "text": "労働環境の改善を要求する", "next": "demand_work_environment" },
      { "text": "まずは会社に組合結成を通知する", "next": "notify_company" }
    ]
  },

  "demand_overtime_pay": {
    "text": "団体交渉で残業代の支払いを要求することにした。\n\n人事部長「残業代110円？そんなの払ってるじゃないか」\n\n「110円って何の冗談ですか？法定の残業代を支払ってください」\n\n人事部長、タバコ休憩で1時間以上席を外してから戻ってきて...\n\n「うちは赤字経営だから無理だ」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "「じゃあ役員報酬を削れ」と言う", "next": "cut_executive_pay" },
      { "text": "労働基準監督署に申告する", "next": "report_to_labor_office" },
      { "text": "ストライキを検討する", "next": "consider_strike" }
    ]
  },

  "cut_executive_pay": {
    "text": "「赤字なら役員報酬を削ったらどうですか？重役の高級車代を残業代に回してください」\n\n人事部長の顔が真っ赤になる。\n\n「生意気な口を叩くな！」\n\n「これはパワハラですね。録音してますから」\n\nスマホを取り出すと、人事部長が慌てる。\n\n「ちょ、ちょっと待て...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "録音を武器に交渉を有利に進める", "next": "use_recording" },
      { "text": "労働基準監督署に証拠として提出する", "next": "submit_evidence" },
      { "text": "SNSで会社の実態を拡散する", "next": "social_media_expose" }
    ]
  },

  "use_recording": {
    "text": "録音を武器に交渉を有利に進めた。\n\n「この録音が労働基準監督署に提出されたらどうなるか、お分かりですよね？」\n\n人事部長、完全に青ざめる。\n\n「わ、分かった...残業代については検討する」\n\n「検討じゃなくて、いつから支払うんですか？」\n\n組合の力を実感した瞬間だった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "残業代の支払いを勝ち取る", "next": "win_overtime_pay" },
      { "text": "さらに労働環境の改善も要求する", "next": "demand_more_improvements" },
      { "text": "他の部署にも組合を拡大する", "next": "expand_union" }
    ]
  },

  "win_overtime_pay": {
    "text": "ついに残業代の支払いを勝ち取った！\n\n「月給が5万円も上がった...」\n「組合作って本当に良かった」\n\n同期「他の人たちも羨ましがってるよ。組合に入りたいって」\n\n会社側も労働環境の改善に取り組み始めた。飲み会の強制参加も禁止になった。\n\n「俺たちが会社を変えたんだ」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働組合を全社に拡大する", "next": "company_wide_union" }
    ]
  },

  "company_wide_union": {
    "text": "労働組合は全社に拡大し、従業員の8割が加入した。\n\n・残業代は法定通り支払われるようになった\n・タバコ休憩は15分以内に制限\n・飲み会の強制参加は禁止\n・セクハラ・パワハラの相談窓口を設置\n・有給取得率は90%以上に\n\n「この会社、普通の会社になったな」\n\n組合委員長として、働きやすい職場作りに貢献できた。\n\n【グッドエンド：労働組合で会社改革成功】",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },

  "social_media_expose": {
    "text": "SNSで会社の実態を拡散した。\n\n「#ブラック企業 #残業代110円 #パワハラ録音」\n\nあっという間に拡散され、地元のニュースでも取り上げられた。\n\n「○○会社、残業代110円の実態が明らかに」\n\n会社は大慌て。緊急の役員会議が開かれた。\n\n「お前のせいで会社の評判が...」\n\n「評判を落としたのは会社の方です」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "メディアの取材を受ける", "next": "media_interview" },
      { "text": "会社が謝罪するまで戦う", "next": "fight_until_apology" },
      { "text": "労働基準監督署の調査を待つ", "next": "wait_investigation" }
    ]
  },

  "media_interview": {
    "text": "地元テレビ局の取材を受けた。\n\n「残業代110円って、どんな気持ちでしたか？」\n\n「コンビニのバイトより安いです。23時まで働いても、残業パン一個も買えません」\n\n放送後、全国からの応援メッセージが殺到。\n\n会社は世間の批判に耐えきれず、労働環境の大幅な改善を発表した。\n\n【グッドエンド：メディア戦略で勝利】",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },

  "consider_strike": {
    "text": "ストライキを検討することにした。\n\n「本当にストライキやるの？」\n「やるしかないでしょ。会社が話し合いに応じないんだから」\n\n組合員全員でストライキを決行。会社の前で横断幕を掲げる。\n\n「残業代を払え！」\n「パワハラをやめろ！」\n\n通りがかりの人たちも応援してくれる。",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "ストライキを継続する", "next": "continue_strike" },
      { "text": "会社との交渉を再開する", "next": "resume_negotiation" },
      { "text": "マスコミに取り上げてもらう", "next": "media_coverage" }
    ]
  },

  "continue_strike": {
    "text": "ストライキを1週間継続した。\n\n会社の業務は完全に停止。取引先からも苦情が殺到。\n\n社長がついに姿を現した。\n\n「わかった、わかった。話し合おう」\n\n「今更ですか？最初から話し合いに応じてればこんなことにならなかったのに」\n\n交渉の結果、残業代の支払いと労働環境の改善が決定した。\n\n【グッドエンド：ストライキで完全勝利】",
    "background": "/images/bg/company_front.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },

  "labor_inspection": {
    "text": "労働基準監督署に相談することにした。\n\n「残業代110円って...本当ですか？」\n「23時まで働いても残業パン一個買えません」\n\n監督官が驚いた顔をする。\n\n「それは明らかな法律違反ですね。詳しく聞かせてください」\n\n証拠を整理して、正式に申告することにした。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "残業代未払いを申告する", "next": "report_overtime_violation" },
      { "text": "パワハラも同時に申告する", "next": "report_harassment_too" },
      { "text": "匿名で申告する", "next": "anonymous_labor_report" }
    ]
  },

  "labor_inspection_first": {
    "text": "まずは労働基準監督署に相談してみることにした。\n\n同期「一人で行くの？」\n「うん、まずは相談だけでも」\n\n労働基準監督署は思ったより普通の役所だった。受付で説明すると、すぐに監督官が対応してくれた。\n\n「ご相談の内容をお聞かせください」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "残業代の問題を相談する", "next": "consult_overtime_issue" },
      { "text": "労働環境全般を相談する", "next": "consult_work_environment" },
      { "text": "どんな証拠が必要か聞く", "next": "ask_about_evidence" }
    ]
  },

  "report_overtime_violation": {
    "text": "残業代未払いを正式に申告した。タイムカードのコピーや給与明細を証拠として提出。\n\n「残業代110円...これは酷いですね」\n\n1週間後、労働基準監督署から会社に調査の連絡が入った。\n\n部長「お前、労基に何か言ったのか？」\n\n「何のことですか？」\n\n会社がざわつき始めた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "知らないふりを続ける", "next": "play_innocent" },
      { "text": "「法律違反だから当然です」と言う", "next": "admit_report" },
      { "text": "他の同僚にも労基への相談を勧める", "next": "encourage_others_report" }
    ]
  },

  "anonymous_labor_report": {
    "text": "匿名で申告することにした。\n\n「申告者の名前は伏せて調査していただけますか？」\n「もちろんです。労基法違反の調査に申告者の特定は必要ありません」\n\n安心して詳細な資料を提出。残業記録、給与明細、パワハラの録音まで全て渡した。\n\n「これだけあれば十分です」",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "調査結果を待つ", "next": "wait_investigation_results" },
      { "text": "同僚にも匿名申告を勧める", "next": "encourage_anonymous_reports" },
      { "text": "追加の証拠集めをする", "next": "gather_more_evidence" }
    ]
  },

  "play_innocent": {
    "text": "知らないふりを続けた。\n\n数日後、労働基準監督官が会社に立ち入り調査に入った。\n\n「労働基準監督署です。労働基準法違反の疑いで調査を行います」\n\n人事部が大慌て。タイムカードや給与台帳を慌てて確認している。\n\n部長の顔が真っ青になっている。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "調査に協力する", "next": "cooperate_investigation" },
      { "text": "様子を見守る", "next": "observe_investigation" },
      { "text": "同僚に調査のことを教える", "next": "inform_colleagues" }
    ]
  },

  "admit_report": {
    "text": "「法律違反だから当然です」\n\n部長「お前...会社を裏切るのか？」\n\n「裏切ったのは会社の方でしょう。残業代110円って何ですか？」\n\n周りの同僚たちも注目している。\n\n「労働基準監督署が調査に来るそうですよ」\n\n部長、完全に言葉を失う。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "他の違反行為も暴露する", "next": "expose_other_violations" },
      { "text": "調査に全面協力すると宣言する", "next": "declare_full_cooperation" },
      { "text": "「みんなも権利を主張しよう」と呼びかける", "next": "call_for_rights" }
    ]
  },

  "wait_investigation_results": {
    "text": "2週間後、労働基準監督署から調査結果の連絡があった。\n\n「重大な労働基準法違反が確認されました。会社に是正勧告を行います」\n\n会社に労働基準法違反の是正勧告書が交付された。\n\n・残業代の適正支払い\n・労働時間の適正管理\n・安全衛生管理の改善\n\n会社は1ヶ月以内の改善を命じられた。",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "会社の改善を見守る", "next": "monitor_company_improvement" },
      { "text": "追加の申告を検討する", "next": "consider_additional_reports" },
      { "text": "同僚に改善内容を伝える", "next": "share_improvement_news" }
    ]
  },

  "cooperate_investigation": {
    "text": "労働基準監督官の質問に正直に答えた。\n\n「残業時間の記録はありますか？」\n「はい、個人的につけていました」\n\n「残業代の支払い状況は？」\n「月100時間残業しても110円です」\n\n監督官が驚愕の表情を見せる。\n\n「これは重大な違反ですね」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "パワハラの実態も伝える", "next": "report_harassment_during_investigation" },
      { "text": "他の同僚の状況も説明する", "next": "explain_colleagues_situation" },
      { "text": "会社の隠蔽工作を指摘する", "next": "point_out_cover_up" }
    ]
  },

  "expose_other_violations": {
    "text": "「他にも違反行為があります。飲み会の強制参加、セクハラ発言、タバコ休憩の長時間化...」\n\n同僚たちがざわめき始める。\n\n「そうそう、俺も飲み会で潰されそうになった」\n「セクハラも酷いよな」\n\n部長「ちょっと待て、それは...」\n\n「全部録音してありますから」\n\nスマホを見せると、部長が震え上がった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "録音を労基に追加提出する", "next": "submit_additional_evidence" },
      { "text": "同僚たちにも証言を求める", "next": "ask_colleague_testimony" },
      { "text": "会社の体質改善を要求する", "next": "demand_culture_change" }
    ]
  },

  "monitor_company_improvement": {
    "text": "会社の改善状況を見守った。\n\n1ヶ月後、劇的な変化が起きていた。\n\n・残業代が法定通りに支払われるように\n・タイムカードによる正確な勤怠管理\n・飲み会の強制参加禁止\n・セクハラ・パワハラ防止研修の実施\n・有給取得の推奨\n\n「こんなに変わるんだ...」\n\n労働基準監督署の力は絶大だった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "改善された会社で働き続ける", "next": "continue_improved_company" }
    ]
  },

  "submit_additional_evidence": {
    "text": "録音データを追加証拠として労働基準監督署に提出した。\n\n「パワハラやセクハラの録音もあるんですね」\n「はい、日常的に行われていました」\n\n労働基準監督署は会社に対してより厳しい指導を行った。\n\n・労働基準法違反の是正\n・職場環境改善計画の提出\n・定期的な監査の実施\n\n会社は完全に生まれ変わることになった。",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "会社の完全改革を見届ける", "next": "witness_complete_reform" }
    ]
  },

  "continue_improved_company": {
    "text": "改善された会社で働き続けることにした。\n\n・月給が5万円アップ（適正な残業代支払い）\n・定時退社が当たり前に\n・有給取得率90%以上\n・ハラスメント防止体制の確立\n・働きやすい職場環境\n\n部長「お前のおかげで、この会社は良くなったな」\n\n「当たり前のことをしただけです」\n\n【グッドエンド：労基介入で会社完全改革】",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },

  "procrastinate": {
    "text": "「転職活動面倒だしなあ...」\n\n同期「わかる。履歴書書くのも面倒だし、面接とか緊張するし」\n\n「もうちょっとこの会社にいてもいいかな」\n\nそんな話をしていると、部長が近づいてきた。\n\n「何話してるんだ？仕事しろ仕事」\n\nまた今日も23時まで残業確定。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "とりあえず今日も残業する", "next": "accept_overtime_daily" },
      { "text": "「やっぱり転職考えようかな」", "next": "reconsider_job_change" },
      { "text": "現実逃避して何もしない", "next": "escape_reality" }
    ]
  },

  "accept_overtime_daily": {
    "text": "今日も23時まで残業。残業パンを齧りながら意味のない資料作成。\n\n「なんで俺こんなことしてるんだろう...」\n\n終電がなくなり、またタクシー代5,000円。給料の大半がタクシー代で消える。\n\n家に帰ると疲れて何もできない。転職活動する気力もない。",
    "background": "/images/bg/office_night.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "このまま続ける", "next": "continue_daily_grind" },
      { "text": "体調を崩す", "next": "health_breakdown" },
      { "text": "限界を感じる", "next": "reach_limit" }
    ]
  },

  "continue_daily_grind": {
    "text": "毎日同じことの繰り返し。残業→タクシー→睡眠不足→また残業。\n\n気がつくと1年が経っていた。\n\n「あれ？俺何してたんだっけ？」\n\n転職のタイミングを完全に逃し、年齢だけが上がっていく。市場価値は下がる一方。\n\n「もう手遅れかも...」\n\n【バッドエンド：時間を無駄にして手遅れ】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "health_breakdown": {
    "text": "ついに体調を崩してしまった。過労で倒れて病院に運ばれる。\n\n医師「完全に過労ですね。しばらく休養が必要です」\n\n会社「休職？困るなあ。代わりはいないんだよ」\n\n体調不良で働けないのに、会社からの圧力は止まらない。\n\n結局、体調が回復する前に退職せざるを得なくなった。\n\n【バッドエンド：過労で体調崩して強制退職】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "union_route": {
    "text": "「労働組合とかないのかなあ」\n\n同期「労働組合？この会社にそんなのあるわけないじゃん」\n\n「そっか...でも作れるんじゃない？」\n\n「やばくない？会社にバレたら...」\n\nその時、部長が現れた。なぜか話を聞いていたようだ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "何でもないフリをする", "next": "pretend_nothing" },
      { "text": "堂々と労働組合の話をする", "next": "openly_discuss_union" },
      { "text": "話題を変える", "next": "change_topic" }
    ]
  },

  "pretend_nothing": {
    "text": "「あ、部長お疲れ様です！」\n\n部長「さっき労働組合って言わなかったか？」\n\n「え？何のことですか？」\n\n部長の目が鋭くなる。完全に疑われている。\n\n「お前ら、何か企んでるな」\n\n嘘がバレてしまった。これはまずい。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "正直に話す", "next": "confess_truth" },
      { "text": "嘘を重ねる", "next": "double_down_lie" },
      { "text": "その場から逃げる", "next": "run_away_from_boss" }
    ]
  },

  "double_down_lie": {
    "text": "「本当に何でもないです！労働組合なんて...」\n\n部長「嘘つくな！聞こえてたんだよ」\n\n同期も巻き込んで嘘を重ねてしまった。部長の怒りは頂点に達する。\n\n「お前ら、明日人事部に来い」\n\n翌日、懲戒処分が下された。理由は「職場秩序を乱す行為」\n\n【バッドエンド：嘘がバレて懲戒処分】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "declare_full_cooperation": {
    "text": "「労働基準監督署の調査には全面協力します」\n\n部長の顔が真っ赤になる。\n\n「お前...覚えてろよ」\n\n翌日から嫌がらせが始まった。\n\n・机が倉庫に移される\n・仕事を全く振られなくなる\n・同僚が話しかけてくれなくなる\n\n「これは報復人事だな...」\n\n会社の陰湿な嫌がらせに心が折れそうになる。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "SNSで会社の実態を拡散する", "next": "social_media_expose_harassment" },
      { "text": "同僚に味方になってもらう", "next": "seek_colleague_support" },
      { "text": "一人で耐え抜く", "next": "endure_alone" }
    ]
  },

  "social_media_expose_harassment": {
    "text": "SNSで報復人事の実態を拡散した。\n\n「労基に相談したら机を倉庫に移された #報復人事 #ブラック企業」\n\n一気に拡散されて注目を集める。でも、会社の反応は予想外だった。\n\n「機密情報の漏洩」「会社の名誉毀損」として、逆に訴えられてしまった。\n\n弁護士費用で貯金が底をつく。\n\n【バッドエンド：SNS拡散で名誉毀損で訴えられる】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "seek_colleague_support": {
    "text": "同僚に味方になってもらおうと相談した。\n\n「実は俺も労基に相談したんだ。一緒に戦ってくれない？」\n\n同僚「え...それはちょっと...」\n\n誰も味方になってくれない。それどころか、翌日には部長に報告されていた。\n\n「お前、仲間を巻き込もうとしてるな？」\n\n孤立が決定的になった。信頼していた同僚にも裏切られた。\n\n【バッドエンド：同僚に裏切られて完全孤立】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "endure_alone": {
    "text": "一人で耐え抜くことにした。\n\n「絶対に負けない...」\n\n毎日の嫌がらせを詳細に記録。倉庫での孤独な作業も黙々とこなす。\n\n3ヶ月後、労働基準監督署の本格調査が始まった。\n\n監督官「報復人事の証拠もありますね。これは重大な違反です」\n\n耐え抜いた甲斐があった。会社は厳重注意を受け、環境が一変した。\n\n【グッドエンド：一人で耐え抜いて勝利】",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },

  "report_harassment_to_labor": {
    "text": "嫌がらせを労働基準監督署に追加で報告した。\n\n「報復人事も受けているんですね。これは重大な問題です」\n\n監督官は真剣に話を聞いてくれる。\n\n「ただし、報復の証拠をもう少し集める必要があります」\n\n証拠集めが必要になった。どう進めるべきか。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "隠しカメラで証拠を撮影する", "next": "hidden_camera_evidence" },
      { "text": "同僚に証言をお願いする", "next": "colleague_testimony" },
      { "text": "弁護士に相談する", "next": "consult_lawyer" }
    ]
  },

  "hidden_camera_evidence": {
    "text": "隠しカメラで証拠を撮影することにした。\n\n部長の嫌がらせを動画で記録。完璧な証拠が撮れた！\n\n「これで勝てる」\n\nしかし、会社に隠しカメラがバレてしまった。\n\n「盗撮だ！警察を呼べ！」\n\n労基への相談は正当でも、盗撮は犯罪。逆に警察に逮捕されてしまった。\n\n【バッドエンド：盗撮で逮捕される】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "colleague_testimony": {
    "text": "同僚に証言をお願いしてみた。\n\n「俺の机が倉庫に移されたの、見てたよね？」\n\n同僚「あー...それは...」\n\n誰も証言してくれない。みんな自分の身が可愛い。\n\n「一人じゃ証拠が弱いですね」\n\n労働基準監督署も動きが鈍くなった。結局、嫌がらせは続き、精神的に限界が来た。\n\n【バッドエンド：証拠不足で泣き寝入り】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "consult_lawyer": {
    "text": "弁護士に相談することにした。\n\n「報復人事は明らかな違法行為です。きちんと対応しましょう」\n\n弁護士のアドバイスで適切な証拠収集を行い、労働基準監督署と連携。\n\n会社は法的圧力に屈服し、全面的に改善することになった。\n\n「プロに相談して正解だった」\n\n弁護士費用はかかったが、確実に勝利できた。\n\n【グッドエンド：弁護士と連携して完全勝利】",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },

  "run_away_quickly": {
    "text": "小走りで会社から逃げ出した。\n\n「あいつ、なんで走ってるんだ？」\n\n同僚たちの視線が痛い。でも気にしない。\n\n家に帰ってから冷静になると、明日からどう会社に行けばいいか分からなくなった。\n\n「やっちまった...」\n\n翌日、なんとなく気まずい雰囲気で出社することになった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "何事もなかったかのように振る舞う", "next": "act_normal" },
      { "text": "部長に謝る", "next": "apologize_to_boss" },
      { "text": "転職活動を始める", "next": "start_job_hunting_after_escape" }
    ]
  },

  "fake_sick": {
    "text": "「すみません、体調悪いんで...」\n\n部長「またか？最近体調不良多いな」\n\n「はい...申し訳ありません」\n\n嘘をついて定時で帰った。でも罪悪感がある。\n\n家に帰ってから考えた。「このまま嘘をつき続けるのか？」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "嘘をつき続ける", "next": "continue_lying" },
      { "text": "正直に残業したくないと言う", "next": "honest_about_overtime" },
      { "text": "転職活動を本格化する", "next": "serious_job_hunting" }
    ]
  },

  "sleep_at_office": {
    "text": "会社に泊まることにした。\n\n「お疲れ様です」\n\n警備員に挨拶して、デスクで仮眠。\n\n朝になると、早出してきた部長と鉢合わせした。\n\n「お前...まさか泊まったのか？」\n\n「はい...終電なくなったので」\n\n部長、複雑な表情を見せる。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "「これが普通ですよね？」と聞く", "next": "ask_if_normal" },
      { "text": "「タクシー代がないので」と説明", "next": "explain_taxi_cost" },
      { "text": "「労働環境を改善してください」と要求", "next": "demand_better_conditions" }
    ]
  },

  "walk_home": {
    "text": "歩いて帰ることにした。\n\n深夜の街を2時間かけて歩く。コンビニの明かりだけが頼り。\n\n「俺の人生、何なんだろう...」\n\n歩きながら色々考えた。このままでいいのか。\n\n家に着く頃には朝の4時。2時間後にはまた出社。\n\n「もう限界だ」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "限界だと部長に伝える", "next": "tell_boss_limit" },
      { "text": "転職活動を始める", "next": "start_job_hunting_desperate" },
      { "text": "体調を崩す", "next": "health_breakdown" }
    ]
  },

  "continue_lying": {
    "text": "嘘をつき続けることにした。\n\n「今日も体調が...」\n「昨日も体調悪かったですよね？」\n「はい...風邪が長引いて」\n\n部長の目が疑いに満ちている。\n\n1ヶ月後、人事から呼び出された。\n\n「体調不良が続いているようですが、診断書を提出してください」\n\n嘘がバレそうになった。\n\n【バッドエンド：嘘がバレて信用失墜】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "honest_about_overtime": {
    "text": "正直に残業したくないと言うことにした。\n\n翌日、部長に話しかけた。\n\n「実は昨日、体調不良って嘘ついたんです。本当は残業したくなくて...」\n\n部長「...正直に言うんだな」\n\n「このままだと体を壊しそうで。残業時間を減らしてもらえませんか？」\n\n意外にも部長は理解を示してくれた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "残業時間の改善を話し合う", "next": "discuss_overtime_reduction" },
      { "text": "他の問題も相談する", "next": "discuss_other_issues" },
      { "text": "感謝して普通に働く", "next": "work_normally_grateful" }
    ]
  },

  "mental_breakdown": {
    "text": "連日の嫌がらせで精神的に参ってしまった。\n\n「もう無理...」\n\n会社に行くのが怖くなり、うつ病を発症。\n\n医師「労働環境が原因のうつ病ですね」\n\n労災申請をしたが、会社は「個人的な問題」として認めない。\n\n長期間の治療が必要になり、結局退職することに。\n\n【バッドエンド：報復で精神を病んで退職】",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "fight_harassment": {
    "text": "嫌がらせにも負けずに戦うことにした。\n\n「倉庫に机を移されても、ちゃんと仕事します」\n\n毎日の嫌がらせを詳細に記録。録音や写真も証拠として保存。\n\n労働基準監督署の調査が本格化すると、会社の態度が急変した。\n\n「あの...誤解があったようで...」\n\n部長が急に低姿勢になってきた。\n\n調査の威力を実感した。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "嫌がらせの責任を追及する", "next": "pursue_harassment_responsibility" },
      { "text": "会社の改善を見守る", "next": "monitor_company_improvement" },
      { "text": "転職を検討する", "next": "consider_transfer_after_fight" }
    ]
  },

  "bully_junior": {
    "text": "「後輩いびりでストレス発散する？」\n\n同期「それはちょっと...」\n\n「冗談だよ冗談」\n\nでも実際、後輩に八つ当たりしてしまうことが増えた。\n\n「なんで俺ばっかり...」\n\n後輩に理不尽な仕事を押し付けたり、きつく当たったり。\n\n気がつくと、嫌な先輩になってしまっていた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "後輩に謝る", "next": "apologize_to_junior" },
      { "text": "このまま続ける", "next": "continue_bullying" },
      { "text": "自分を見つめ直す", "next": "self_reflection" }
    ]
  },

  "continue_bullying": {
    "text": "後輩いびりが習慣になってしまった。\n\n「お前のせいで残業が増える」\n「使えないな」\n\n後輩がどんどん辞めていく。自分も嫌な人間になっていく。\n\n気がつくと、職場で孤立していた。\n\n「俺、何やってるんだろう...」\n\nブラック企業に毒されて、自分もブラックな人間になってしまった。\n\n【バッドエンド：ブラック企業に毒されて人格崩壊】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "escape_reality": {
    "text": "現実逃避して何もしないことにした。\n\n転職活動もしない、労働組合も作らない、労基にも相談しない。\n\n「まあ、なんとかなるでしょ」\n\nゲームやネットで時間を潰す日々。\n\n気がつくと5年が経過。同期はみんな転職していた。\n\n「え？俺だけまだここにいるの？」\n\n取り残された感が半端ない。\n\n【バッドエンド：現実逃避で取り残される】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },
  "apply_same_company": {
    "text": "同期と同じ会社に応募することにした。\n\n「一緒に働けたら心強いよな」\n「そうだね。お互い助け合えるし」\n\n面接では二人で受けることを正直に話した。\n\n面接官「お二人とも同じ会社から？珍しいですね」\n\n「職場環境が酷くて、一緒に転職を決意しました」\n\n面接官が興味深そうに話を聞いてくれる。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "二人とも内定をもらう", "next": "get_job_offer" },
      { "text": "どちらか一人だけ内定", "next": "one_person_offer" },
      { "text": "お互いライバルになってしまう", "next": "become_rivals" }
    ]
  },

  "different_industries": {
    "text": "同期と違う業界を狙うことにした。\n\n同期「俺はIT業界に行くよ」\n「俺は製造業にしようかな。全然違う分野で新しいスタートを切りたい」\n\n「お互い頑張ろうぜ」\n\n違う業界なので比較されることもなく、それぞれのペースで転職活動を進められる。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "製造業で内定をもらう", "next": "manufacturing_offer" },
      { "text": "サービス業に挑戦する", "next": "service_industry" },
      { "text": "公務員を目指す", "next": "civil_service" }
    ]
  },

  "consult_agent": {
    "text": "転職エージェントに相談することにした。\n\n「現在の職場環境を詳しく教えてください」\n\n残業代110円、パワハラ、長時間労働の実態を説明すると...\n\n「それは酷いですね。すぐに転職すべきです。あなたのような経験をお持ちの方なら、必ず良い会社が見つかります」\n\nプロのアドバイスに勇気づけられた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "エージェント推薦の会社に応募", "next": "agent_recommendation" },
      { "text": "自分でも会社を探す", "next": "self_search" },
      { "text": "複数のエージェントに登録", "next": "multiple_agents" }
    ]
  },

  "multiple_offers": {
    "text": "複数の会社から内定をもらった！\n\nA社：年収350万→450万、残業月20時間以内\nB社：年収350万→480万、完全週休二日制\nC社：年収350万→420万、リモートワーク可\n\n「嬉しい悩みだ...どこにしよう」\n\n今まで選択肢がなかった人生で、初めて自分で選べる状況になった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "給料の高いB社を選ぶ", "next": "choose_high_salary" },
      { "text": "働きやすさでA社を選ぶ", "next": "choose_work_life_balance" },
      { "text": "リモートワークのC社を選ぶ", "next": "choose_remote_work" }
    ]
  },

  "negotiate_conditions": {
    "text": "内定をもらったが、より良い条件を交渉してみることにした。\n\n「年収についてですが、現在の職場環境を考慮していただけませんか？」\n\n人事「具体的にはどのような？」\n\n「残業代が適正に払われず、労働環境も劣悪でした。御社では適正な評価をいただけると思うのですが...」\n\n交渉は緊張するが、やってみる価値はある。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "交渉成功で条件アップ", "next": "negotiation_success" },
      { "text": "現在の条件で妥協", "next": "accept_current_offer" },
      { "text": "交渉決裂", "next": "negotiation_failure" }
    ]
  },

  "refuse_retention": {
    "text": "会社からの引き留めを断った。\n\n部長「給料上げるから残ってくれ」\n人事「昇進の話もある」\n\n「申し訳ありませんが、決意は変わりません」\n\n「今更条件を良くすると言われても、信用できません。最初からちゃんとしていれば、こんなことにはならなかった」\n\n毅然とした態度で引き留めを拒否した。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "きっぱりと退職する", "next": "clean_resignation" },
      { "text": "有給を全て消化してから退職", "next": "use_all_vacation" },
      { "text": "後任への引き継ぎをしっかりする", "next": "proper_handover" }
    ]
  },

  "proper_handover": {
    "text": "後任への引き継ぎをしっかりすることにした。\n\n「この仕事は◯◯に注意してください」\n「この取引先は少し面倒ですが、丁寧に対応すれば大丈夫です」\n\n後任「ありがとうございます。すごく分かりやすいです」\n\n最後まで責任を持って仕事を終わらせる。立つ鳥跡を濁さず。\n\n「お疲れ様でした」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "新しい会社でスタートする", "next": "new_company_start" }
    ]
  },

  "one_person_offer": {
    "text": "結果発表。同期だけが内定をもらった。\n\n同期「ごめん...俺だけ」\n\n「いや、おめでとう。俺はまだ頑張るよ」\n\n内心は悔しいが、友人の成功を素直に喜ぶ。\n\n「お前も絶対見つかるから。一緒に頑張ろう」\n\n同期の励ましが心に沁みる。一人になっても諦めない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "一人で転職活動を続ける", "next": "continue_job_hunt_alone" },
      { "text": "別の会社にも応募する", "next": "apply_other_companies" },
      { "text": "転職エージェントに相談する", "next": "consult_agent" }
    ]
  },

  "become_rivals": {
    "text": "同じ会社を受けたことで、お互いライバルになってしまった。\n\n同期「負けないからな」\n\n「こっちこそ」\n\n友情にヒビが入ってしまった。競争が激しくなり、お互いの足を引っ張り合うような状況に。\n\n「これじゃダメだ...」\n\n友人を失ってまで転職する意味があるのだろうか。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "友情を優先して譲る", "next": "prioritize_friendship" },
      { "text": "競争を続ける", "next": "continue_competition" },
      { "text": "別の会社を探す", "next": "different_industries" }
    ]
  },

  "manufacturing_offer": {
    "text": "製造業の会社から内定をもらった！\n\n「ものづくりの現場で働けるのか...」\n\n今までのオフィスワークとは全く違う環境。でも、残業代はちゃんと出るし、有給も取りやすそう。\n\n「物を作る喜びを感じられそうだ」\n\n新しい業界での挑戦に胸が躍る。",
    "background": "/images/bg/factory.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "製造業で新しいスタートを切る", "next": "manufacturing_start" }
    ]
  },

  "agent_recommendation": {
    "text": "エージェント推薦の会社に応募した。\n\n「この会社は労働環境が良いことで有名です。残業代もきちんと出ますし、有給取得率も90%以上です」\n\n面接では前職の経験を高く評価してもらえた。\n\n「ブラック企業での経験があるからこそ、普通の労働環境のありがたさが分かりますね」\n\n即日内定をもらった！",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "エージェント推薦の会社に転職", "next": "agent_company_start" }
    ]
  },

  "choose_high_salary": {
    "text": "給料の高いB社を選んだ。\n\n「年収130万アップは大きい」\n\nB社での初日。オフィスは綺麗で、同僚も親切。\n\n「前の会社とは大違いだ」\n\n給料が上がったことで生活に余裕ができ、心にも余裕が生まれた。",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "新しい会社でスタートする", "next": "new_company_start" }
    ]
  },

  "choose_work_life_balance": {
    "text": "働きやすさを重視してA社を選んだ。\n\n「給料より環境が大事」\n\nA社では定時で帰れるし、有給も取りやすい。\n\n「これが普通の会社か...」\n\nワークライフバランスが取れて、プライベートも充実。人生の質が大幅に向上した。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "新しい会社でスタートする", "next": "new_company_start" }
    ]
  },

  "choose_remote_work": {
    "text": "リモートワークができるC社を選んだ。\n\n「通勤時間がなくなるのは大きい」\n\n在宅勤務で効率が上がり、ストレスも激減。\n\n「もう満員電車に乗らなくていいんだ」\n\n自分らしい働き方ができるようになった。",
    "background": "/images/bg/home_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "新しい会社でスタートする", "next": "new_company_start" }
    ]
  },

  "manufacturing_start": {
    "text": "製造業での新しいスタートを切った。\n\n「毎日同じ製品を作るけど、それが積み重なって大きなものになるんだ」\n\n職人気質の先輩たちに丁寧に教えてもらい、ものづくりの楽しさを知った。\n\n「前の会社では何を作ってたんだろう...意味のない資料ばかりだった」",
    "background": "/images/bg/factory.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "新しい会社でスタートする", "next": "new_company_start" }
    ]
  },

  "agent_company_start": {
    "text": "エージェント推薦の会社で働き始めた。\n\n「エージェントの言う通り、本当に良い会社だった」\n\n・定時退社が当たり前\n・有給取得率95%\n・残業代完全支給\n・上司が部下を大切にする\n\n「転職エージェントに相談して正解だった」",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "新しい会社でスタートする", "next": "new_company_start" }
    ]
  },
  "notify_company": {
    "text": "まずは会社に組合結成を通知することにした。\n\n「労働組合結成通知書を提出します」\n\n人事部長「労働組合？何のために？」\n\n「労働条件の改善について、会社と対等に話し合いたいからです」\n\n「そんなもの作らなくても、何か問題があれば相談してくれれば...」\n\n「今まで相談しても改善されませんでしたから」\n\n会社側は明らかに動揺している。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "残業代の支払いを要求する", "next": "demand_overtime_pay" },
      { "text": "労働環境全体の改善を要求する", "next": "demand_work_environment" },
      { "text": "まずは組合員を増やす", "next": "expand_union" }
    ]
  },

  "demand_work_environment": {
    "text": "労働環境全体の改善を要求することにした。\n\n「残業時間の削減、パワハラの禁止、適正な休暇取得、これらすべてを改善してください」\n\n人事部長「それは...一度に全部は難しい」\n\n「労働基準法を守ることは当然のことです。難しいなら労働基準監督署に相談します」\n\n会社側が慌て始める。組合の力を実感した瞬間だった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働基準監督署に申告する", "next": "report_overtime_violation" },
      { "text": "段階的な改善を提案する", "next": "use_recording" },
      { "text": "他の部署にも組合を広げる", "next": "expand_union" }
    ]
  },

  "expand_union": {
    "text": "他の部署にも組合を広げることにした。\n\n「営業部の人たちも残業がひどいらしい」\n「経理部でもパワハラがあるって聞いた」\n\n組合の存在が社内で話題になり、加入希望者が増えてきた。\n\n「みんな我慢してたんだな」\n\n1ヶ月で組合員が20人を超えた。会社側の対応も変わってきた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "全社的な改善を要求する", "next": "win_overtime_pay" },
      { "text": "労働条件の見直しを迫る", "next": "demand_overtime_pay" },
      { "text": "会社と本格的な団体交渉を行う", "next": "use_recording" }
    ]
  },

  "gather_more_people": {
    "text": "もっと人数を集めてから行動することにした。\n\n「一人ずつ声をかけてみよう」\n\n しかし、みんな及び腰だった。\n\n「バレたらクビになるんじゃない？」\n「波風立てたくない」\n\n1ヶ月かけても3人しか集まらなかった。\n\n「人数を待ってても仕方ない。3人でも始めよう」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "3人で組合を結成する", "next": "form_union_three" },
      { "text": "外部の労働組合に相談する", "next": "join_external_union" },
      { "text": "個人で労働基準監督署に相談する", "next": "labor_inspection_first" }
    ]
  },

  "join_external_union": {
    "text": "外部の労働組合に加入することにした。\n\n「個人でも加入できる労働組合があるんですね」\n\nユニオンの担当者「はい。会社に労働組合がなくても、私たちが代わりに交渉します」\n\n「心強いです」\n\n「残業代未払いとパワハラの件、すぐに会社と交渉しましょう」\n\nプロの労働組合の力を借りることにした。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "外部組合と連携して会社と交渉", "next": "use_recording" },
      { "text": "労働基準監督署にも同時に申告", "next": "report_overtime_violation" },
      { "text": "同僚にも外部組合加入を勧める", "next": "recruit_colleagues" }
    ]
  },
  "self_search": {
    "text": "エージェントの推薦以外に、自分でも会社を探すことにした。\n\n「やっぱり自分の目で確かめたい」\n\n転職サイトで気になる求人をいくつか見つけた。\n\n「この会社、口コミも良いし、労働環境も改善されてるみたい」\n\n自分で選んだ会社だからこそ、やりがいも感じられそうだ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "気になる会社に応募する", "next": "get_job_offer" },
      { "text": "複数の会社を比較検討する", "next": "multiple_offers" },
      { "text": "エージェント推薦と併用する", "next": "agent_recommendation" }
    ]
  },

  "multiple_agents": {
    "text": "複数の転職エージェントに登録することにした。\n\n「A社エージェント：IT系に強い」\n「B社エージェント：製造業に詳しい」\n「C社エージェント：ワークライフバランス重視」\n\n「それぞれ特色があるな」\n\n複数のエージェントから様々な求人を紹介してもらえそうだ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "一番良い条件の求人を選ぶ", "next": "multiple_offers" },
      { "text": "エージェントに相談して決める", "next": "consult_agent" },
      { "text": "自分でも追加で探してみる", "next": "self_search" }
    ]
  },

  "prioritize_friendship": {
    "text": "友情を優先して同期に譲ることにした。\n\n「お前に譲るよ。友達の方が大切だ」\n\n同期「ありがとう...でも申し訳ない」\n\n「気にするな。俺は別の会社を探すから」\n\n友情を大切にしたことで、心がスッキリした。\n\n「お互い頑張ろうな」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "別の会社を探す", "next": "different_industries" },
      { "text": "転職エージェントに相談する", "next": "consult_agent" },
      { "text": "しばらく現在の会社で様子を見る", "next": "" }
    ]
  },

  "continue_competition": {
    "text": "競争を続けることにした。\n\n「負けられない」\n\n同期との関係は険悪になったが、どうしても内定が欲しい。\n\n面接当日、同期と顔を合わせると気まずい空気が流れる。\n\n結果は...両方とも不採用だった。\n\n「競争してた意味なかったな...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "同期と関係を修復する", "next": "prioritize_friendship" },
      { "text": "一人で転職活動を続ける", "next": "serious_job_hunting" },
      { "text": "精神的に疲れてしまう", "next": "mental_breakdown" }
    ]
  },

  "service_industry": {
    "text": "サービス業に挑戦することにした。\n\n「接客業も悪くないかも」\n\n ホテルや小売業、飲食業など様々な選択肢がある。\n\n「人と接する仕事で、新しいスキルを身につけたい」\n\n面接では前職での忍耐力をアピールした。\n\n「ブラック企業で鍛えられました」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "サービス業で内定をもらう", "next": "get_job_offer" },
      { "text": "やっぱり製造業も検討する", "next": "manufacturing_offer" },
      { "text": "IT業界も視野に入れる", "next": "different_industries" }
    ]
  },

  "civil_service": {
    "text": "公務員を目指すことにした。\n\n「安定した収入と労働環境が魅力的だ」\n\n公務員試験の勉強を始める。法律や経済学、一般教養...\n\n「勉強は大変だけど、ブラック企業で働くよりマシ」\n\n半年後、見事に合格！\n\n「これで安心して働ける」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "公務員として新しいスタートを切る", "next": "new_company_start" }
    ]
  },

  "continue_job_hunt_alone": {
    "text": "一人で転職活動を続けることにした。\n\n「同期に頼らず、自分の力でやってみよう」\n\n最初は寂しかったが、自分のペースで進められるのは良い。\n\n「焦らず、じっくり良い会社を探そう」\n\n1ヶ月後、理想的な会社を見つけた。\n\n「一人でも頑張れるじゃん」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "理想的な会社に応募する", "next": "get_job_offer" },
      { "text": "もう少し他の会社も見てみる", "next": "multiple_offers" },
      { "text": "転職エージェントにも相談してみる", "next": "consult_agent" }
    ]
  },

  "apply_other_companies": {
    "text": "別の会社にも応募することにした。\n\n「一つ落ちただけで諦めるわけにはいかない」\n\n業界を変えて、より幅広く応募してみる。\n\n「製造業、IT、サービス業...選択肢はたくさんある」\n\n書類選考の通過率も上がってきた。\n\n「経験を積むって大事だな」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "複数の内定をもらう", "next": "multiple_offers" },
      { "text": "一つずつ丁寧に受ける", "next": "get_job_offer" },
      { "text": "エージェントに効率的な方法を聞く", "next": "consult_agent" }
    ]
  },

  "negotiation_success": {
    "text": "交渉が成功した！\n\n人事「確かに、前職での経験を考慮すると、もう少し条件を良くできます」\n\n年収が50万円アップ、有給取得率も保証してもらえた。\n\n「交渉してみて良かった」\n\n「これで安心して転職できる」\n\n自分で条件を勝ち取った満足感もある。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "条件アップした会社に転職", "next": "get_job_offer" }
    ]
  },

  "accept_current_offer": {
    "text": "現在の条件で妥協することにした。\n\n「交渉はしてみたけど、元々十分良い条件だし」\n\n「今の会社より断然良いから、これで満足しよう」\n\n人事「ご理解いただき、ありがとうございます。ぜひ一緒に働きましょう」\n\n「新しいスタートが楽しみだ」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "転職先でスタートを切る", "next": "get_job_offer" }
    ]
  },

  "negotiation_failure": {
    "text": "交渉が決裂してしまった。\n\n人事「申し訳ありませんが、これ以上の条件アップは難しいです」\n\n「そうですか...検討させてください」\n\n内定を辞退することになった。\n\n「欲張りすぎたかな...」\n\n振り出しに戻ってしまった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "他の会社を探し直す", "next": "serious_job_hunting" },
      { "text": "もう少し現実的な条件で探す", "next": "different_industries" },
      { "text": "一旦現在の会社に留まる", "next": "continue_daily_grind" }
    ]
  },

  "use_all_vacation": {
    "text": "有給を全て消化してから退職することにした。\n\n「せっかく溜まってる有給、全部使わせてもらいます」\n\n部長「全部って...20日もあるぞ」\n\n「法律で認められた権利ですから」\n\n有給消化中に新しい会社の準備も進められる。\n\n「最後まで自分の権利は主張しよう」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "有給消化後に新会社へ", "next": "new_company_start" }
    ]
  },
  "act_normal": {
    "text": "何事もなかったかのように振る舞うことにした。\n\n「おはようございます」\n\n同僚たちは昨日のことを覚えているが、普通に接してくれる。\n\n「意外と大丈夫かも」\n\nでも、心の中では昨日の出来事が気になっている。\n\n「このまま何もなかったことにできるかな」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "普通に仕事を続ける", "next": "" },
      { "text": "やっぱり気になって謝る", "next": "apologize_to_boss" },
      { "text": "転職を考え始める", "next": "serious_job_hunting" }
    ]
  },

  "anonymous_report": {
    "text": "匿名で会社の問題を告発することにした。\n\n「内部告発サイトに投稿してみよう」\n\n残業代未払い、パワハラ、労働環境の実態を詳しく書く。\n\n「これで世間に知ってもらえる」\n\n数日後、投稿が話題になり始めた。\n\n「会社、大丈夫かな...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "さらに詳しい証拠を公開", "next": "social_media_expose" },
      { "text": "労働基準監督署にも通報", "next": "report_overtime_violation" },
      { "text": "様子を見守る", "next": "wait_investigation_results" }
    ]
  },

  "change_topic": {
    "text": "話題を変えることにした。\n\n「そういえば、来月の売上目標どうなってるんですか？」\n\n部長「あ、そうそう。それなんだが...」\n\n うまく話題を逸らせた。部長も労働組合の話は忘れたようだ。\n\n「危なかった...」\n\nでも根本的な解決にはなっていない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "このまま様子を見る", "next": "" },
      { "text": "後で同期と相談する", "next": "create_union" },
      { "text": "個人で行動を起こす", "next": "labor_inspection" }
    ]
  },

  "confess_truth": {
    "text": "正直に話すことにした。\n\n「実は、労働組合について調べてたんです」\n\n部長「やっぱりな。何のために？」\n\n「残業代とか、労働環境とか...おかしいと思うことが多くて」\n\n「まずは話し合いで解決したいんです」\n\n部長、意外にも真剣に聞いてくれる。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "部長と労働環境について話し合う", "next": "use_recording" },
      { "text": "人事部も交えて正式に相談", "next": "explain_to_hr_first" },
      { "text": "やっぱり労働組合を作る", "next": "create_union" }
    ]
  },

  "ask_if_normal": {
    "text": "「これが普通ですよね？」と部長に聞いてみた。\n\n部長「...普通って何が？」\n\n「会社に泊まることです。終電なくなるまで働くのって」\n\n部長、言葉に詰まる。\n\n「俺も昔はよく会社に泊まったもんだ」\n\n「でも、それって普通なんですか？」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働環境の改善を提案", "next": "no_work_no_pay" },
      { "text": "他の会社の話を聞く", "next": "serious_job_hunting" },
      { "text": "とりあえず様子を見る", "next": "" }
    ]
  },

  "explain_taxi_cost": {
    "text": "「タクシー代がないので」と正直に説明した。\n\n部長「タクシー代？」\n\n「はい。終電なくなってタクシーで帰ると5,000円かかります。でも残業代は110円なので...」\n\n部長が計算し始める。\n\n「110円...5,000円...」\n\n「おかしいと思いませんか？」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "残業代の見直しを要求", "next": "no_work_no_pay" },
      { "text": "労働時間の短縮を提案", "next": "use_recording" },
      { "text": "転職を検討していると伝える", "next": "serious_job_hunting" }
    ]
  },
  
}