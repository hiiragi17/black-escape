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
    "text": "ここは片田舎のとある会社。8時出社で20時就業がデフォルト。定時は17時。どうしようもない上司と訳のわからない人しかいない、変人の巣窟。給料は安く、残業時間は多い。なのに売上は伸びていないらしい。\n\n同期が囁く。「今週土曜日も出勤だけど、そんな売上ないのに、何のために出社してるんだろうなあ」\n\n本当にそうだ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "そろそろ転職かなあ", "next": "consider_job_change" },
      { "text": "転職活動面倒だしなあ", "next": "procrastinate" },
      { "text": "労働組合とかないのかなあ", "next": "union_route" }
    ]
  },

  "consider_job_change": {
    "text": "このところずっと脳内にちらついていた。でもまだ3年経っていないのに転職なんてできるのだろうか。新卒で入ってまだ2年ちょっと。市場価値なんてそんなになさそうだ。けれどこのままこの会社にいても……。つい溜息を吐く。そんな時部長に声を掛けられる。「おい！」ようやく煙草休憩から帰ってきたようだ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "曖昧に笑って誤魔化す", "next": "awkward_smile" },
      { "text": "「部長こそお疲れ様です」と皮肉を込めて言う", "next": "sarcastic_reply" },
      { "text": "よし殴ろう", "next": "punch_boss" }
    ]
  },

  "awkward_smile": {
    "text": "「部長お疲れ様です」と適当に笑って誤魔化す。何か言い返したところでろくな目に合わないことはわかっている。「じゃあお前ちゃんとやれよ？」そう言い残して部長はまた部屋を出ていく。何度目の煙草休憩だよ。お前がやれよ。喉まで出かかった言葉を押さえ付けて、もう一度溜息をついた。今日も定時退社は無理そうだ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "今日こそ定時で帰る", "next": "leave_on_time" },
      { "text": "残業パンを食べながら耐える", "next": "eat_overtime_bread" },
      { "text": "同期に愚痴る", "next": "complain_to_colleague" },
      { "text": "しばらくして部長に呼ばれる", "next": "talk_to_boss_first_encounter" }
    ]
  },

  "sarcastic_reply": {
    "text": "「部長こそお疲れ様です」と皮肉を込めて言う。部長の顔が一瞬固まった。「なんだそれは？」空気が凍りつく。やばい、言い過ぎた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "そのまま逃げる", "next": "run_away_quickly" },
      { "text": "「冗談です」と取り繕う", "next": "awkward_smile" },
      { "text": "「何でもありません」と下を向く", "next": "awkward_smile" },
      { "text": "部長の元へ呼ばれる", "next": "talk_to_boss_ignore" }
    ]
  },

  "leave_on_time": {
    "text": "「今日こそ定時で帰る」そう心に決めた。もう我慢の限界だ。17時になった瞬間、パソコンを閉じて退社の準備を始める。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "堂々と帰る", "next": "leave_confidently" },
      { "text": "部長の顔色を伺う", "next": "awkward_smile" },
      { "text": "「ちょっと用事が」と言い訳する", "next": "leave_confidently" }
    ]
  },

  "leave_confidently": {
    "text": "「お先に失礼します」と言って堂々と帰る。部長が何か言いかけたが、無視した。外に出ると、久しぶりに明るい時間の空気を吸うことができた。「これが普通なんだよな...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働基準監督署に相談する", "next": "labor_inspection" },
      { "text": "そのまま転職活動を始める", "next": "job_search_burnout" },
      { "text": "今日の解放感を噛み締める", "next": "eat_overtime_bread" }
    ]
  },

  "eat_overtime_bread": {
    "text": "コンビニで買った残業パンを食べながら仕事を続ける。窓の外はもう真っ暗だ。時計を見ると22時を回っている。「今日も遅くなるな...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "タクシーで帰る（自腹）", "next": "taxi_home" },
      { "text": "終電で帰る", "next": "taxi_home" },
      { "text": "同期に愚痴をこぼす", "next": "complain_to_colleague" },
      { "text": "部長に呼ばれる", "next": "talk_to_boss_comment_break" }
    ]
  },

  "taxi_home": {
    "text": "終電を逃したのでタクシーで帰ることにした。もちろん自腹だ。「今月もまた赤字か...」車窓から見える街の灯りがぼやけて見える。疲れているんだな。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "転職活動を本格化する", "next": "job_search_burnout" },
      { "text": "労働組合について調べる", "next": "research_union" },
      { "text": "このまま我慢し続ける", "next": "procrastinate" }
    ]
  },

  "complain_to_colleague": {
    "text": "同期に愚痴をこぼした。「部長、本当にひどいよな」「わかる。もう限界だよ」二人で転職について話し合うことにした。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "一緒に転職活動をする", "next": "joint_job_hunting" },
      { "text": "労働組合について調べる", "next": "research_union" },
      { "text": "まずは自分だけで行動する", "next": "job_search_burnout" }
    ]
  },

  "joint_job_hunting": {
    "text": "同期と一緒に転職活動を始めることにした。「お互い情報共有しよう」「そうだな」励まし合いながら活動を続ける。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "本格的に転職活動を開始する", "next": "job_search_burnout" },
      { "text": "転職エージェントに相談する", "next": "job_search_burnout" },
      { "text": "まず労働環境改善を試みる", "next": "research_union" }
    ]
  },

  "talk_to_boss_first_encounter": {
    "text": "渋々部長の元へ行く。どうせいつもの無茶振りだ。自分はいつも遅れてくるくせに、社員の遅刻は許さなくて。それでいて出社したと思ったらすぐ煙草休憩だ。この人は仕事をしていないのに、部長職でいばり散らかしている。こんなんだからこの会社は良くならないんだよ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "資料作成の仕事を受ける", "next": "receive_document_task" },
      { "text": "暑気払いの準備を手伝う", "next": "procrastinate" },
      { "text": "書類提出について話を聞く", "next": "procrastinate" }
    ]
  },

  "talk_to_boss_comment_break": {
    "text": "渋々部長の元へ行く。どうせいつもの無茶振りだ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "資料作成の仕事を受ける", "next": "receive_document_task" },
      { "text": "暑気払いの準備を手伝う", "next": "receive_document_task" },
      { "text": "書類提出について話を聞く", "next": "receive_document_task" }
    ]
  },

  "talk_to_boss_ignore": {
    "text": "渋々部長の元へ行く。どうせいつもの無茶振りだ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "資料作成の仕事を受ける", "next": "receive_document_task" },
      { "text": "プレゼン資料の作成を受ける", "next": "receive_document_task" },
      { "text": "週末出社の指示を受ける", "next": "receive_document_task" }
    ]
  },

  "receive_document_task": {
    "text": "「……えっ」渡されたのは大量の資料。もう既に14時。定時まで後3時間だ。一人で作業したらどれくらい時間がかかってしまうか。そもそも他に暇そうな奴がいるのに、なんで既に仕事をしている人に依頼するんだ。おかしいだろ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "わかりました……", "next": "accept_task_reluctantly" },
      { "text": "なぜ今日中なんですか？", "next": "procrastinate" },
      { "text": "無理です", "next": "procrastinate" }
    ]
  },

  "accept_task_reluctantly": {
    "text": "とはいえ自分に拒否権などあるわけがない。仕事を引き受けるしかなかった。その場を去ろうとすると、部長が後ろから声を掛けてくる。「お前今年で何歳だっけ」「……25歳っす」「あ〜そうなのか。お前もそんな若くないんだなw」はっ？40後半のおじさんに言われたくないんだが。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "よし殴ろう", "next": "punch_boss" },
      { "text": "適当に笑って誤魔化す", "next": "laugh_off_and_work" },
      { "text": "無視して仕事に戻る", "next": "laugh_off_and_work" }
    ]
  },

  "laugh_off_and_work": {
    "text": "「ははは……そうですね」と適当に笑って誤魔化す。何か言い返したところでろくな目に合わないことはわかっている。「じゃあお前ちゃんとやれよ？」そう言い残して部長はまた部屋を出ていく。何度目の煙草休憩だよ。お前がやれよ。喉まで出かかった言葉を押さえ付けて、書類を自分の机に運んだ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "一人で終わりそうもない。後輩の手も借りよう。", "next": "ask_junior_for_help" },
      { "text": "一人で終わりそうもない。同期の手も借りよう。", "next": "ask_colleague_for_help" },
      { "text": "一人で終わりそうもない。けど一人でやるしかない。", "next": "work_alone_suffer" }
    ]
  },

  "ask_junior_for_help": {
    "text": "今年入ったばかりの新人で、気立てが良い。けれど少し要領が悪いこともあって、部長の使いっ走りにさせられていることが多い。しかし今日の部長は彼には仕事を与えていないようで、先ほどから彼は雑用ばかりしていた。少しくらい手を借りても大丈夫だろう。\n\n「ちょっと手を借りてもいいか？」「勿論っすよ。俺に出来ることなら」なんで部長の目の敵にされてるんだろうなあ。本当なら他の暇そうな人に声を掛けても良かった。でもあいつらは定時になった瞬間に帰るのだ。そしてそれに対して部長は何も言わない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "一緒に作業して仕上げる", "next": "work_with_junior" },
      { "text": "やっぱり一人でやることにする", "next": "work_alone_suffer" },
      { "text": "他の先輩にも声をかける", "next": "ask_colleague_for_help" }
    ]
  },

  "ask_colleague_for_help": {
    "text": "同期に相談する。「一緒にやるか」「そうしよう」と、同期も手伝ってくれることになった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "一緒に作業して仕上げる", "next": "work_with_junior" },
      { "text": "後輩も巻き込んで3人で仕上げる", "next": "work_with_junior" },
      { "text": "やっぱり迷惑かけたくない", "next": "work_alone_suffer" }
    ]
  },

  "work_alone_suffer": {
    "text": "一人で黙々と作業した。肩も凝り始めた。0時を過ぎても終わらない。1時を過ぎてもまだある。もう限界だ。こんなことをやっていて、何の意味があるのだろう。この会社にいても、何も変わらない。人生がどんどん無駄になっていく気がする。\n\n「もう無理だ。こんな会社、辞めよう」\n\n翌日、転職活動を本格的に始めることにしたが、すでにメンタルが限界だった。面接でも上手く話すことができず、次々と不採用になった。心が折れた。\n\n【バッドエンド：過労で限界に達する】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "work_with_junior": {
    "text": "結局0時前までかかって、部長に資料を提出する。「おお、やるじゃないか」部長が褒めるが全く嬉しくない。やっと終わった。これで帰れる。終電に間に合うかな……。そう考えていた時、驚くような言葉が部長から飛び出た。「よし。明日休みだし飲み行くか」……はっ？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "断固として断る", "next": "procrastinate" },
      { "text": "仕方なく付き合う", "next": "attend_drinking_with_boss" },
      { "text": "30分だけなら", "next": "thirty_minutes_condition" }
    ]
  },

  "attend_drinking_with_boss": {
    "text": "ここで断ったら面倒なことになる。俺は後輩と共に渋々飲み会へ付き合った。昔の武勇伝をご機嫌に語られた後、なぜか入る説教タイム。「もっとお前頑張れよな〜今日だってもっと早くできただろ」「俺の若い頃なんてもっと……」なんで俺は、夜遅くまで一生懸命働いた後、部長に説教をされないといけないのだろう。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "反論する", "next": "procrastinate" },
      { "text": "黙って聞く", "next": "listen_silently_to_lecture" },
      { "text": "席を立つ", "next": "procrastinate" }
    ]
  },

  "thirty_minutes_condition": {
    "text": "「30分〜？意味わからんこと言うなよな。じゃあもういい。おい、お前付き合え」「は、はい……」震える声で連行される後輩。俺が残業に付き合わせたばっかりに。でもここから俺が行きますとは言えなかった。だって俺はもう家に帰りたかったから。そして週明け、後輩はメンタルの不調により退職してしまっていた。俺が後輩を見捨てたんだ……。\n\n【バッドエンド：部下を潰す】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "listen_silently_to_lecture": {
    "text": "結局黙って聞き、空が明るくなる少し前に解散になった。部長は繁華街に消えていき、とっくに電車がないため、後輩と一緒に歩いて帰ることにした。\n\n「先輩、今日もお疲れ様でした」\n\n「お疲れ様。君も遅くまで付き合わせてごめんな」\n\n本当は心の中はボロボロだけど、後輩の前では先輩らしくいないと。\n\n「この会社、けっこう大変ですよね...」\n\n「まあ、どこの会社も大変だよ。君は真面目だから大丈夫」\n\n本当は俺も限界なんだけど、後輩を不安にさせたくない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "お互い頑張ろうな", "next": "parting_and_cry_then_jobhunt" },
      { "text": "こんな会社もう嫌だ", "next": "procrastinate" }
    ]
  },

  "parting_and_cry_then_jobhunt": {
    "text": "「お互い頑張ろうな」\n\n後輩が角を曲がって見えなくなった。\n\nその瞬間俺は泣き崩れた。\n\n限界だった。この会社にいては、自分も後輩も潰れてしまう。\n\n何日か経った後、決断した。もう、この会社には居られない。\n\n転職活動を本格的に始めた。書類作成、面接の準備、企業研究……。後輩のためにも、自分のためにも、やり抜くしかない。\n\n数ヶ月後、面接の結果が返ってきた。\n\n「当社で働いていただきたいのですが......」\n\nついに、新しい職場への内定を手にした。今度こそ、働きやすい環境で、人間らしく働けるはずだ。\n\n退職届を出すときの部長の顔は、自分の記憶から消してしまった。\n\n新しい会社での初出勤。朝日が眩しく感じた。\n\n「やっと......自由になれた」\n\n深く息を吸った。新しい人生の始まりだ。\n\n【グッドエンド：転職成功で新たな人生へ】",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },

  "research_union": {
    "text": "ネットで労働組合の作り方を調べた。\n\n「労働組合は3人以上で作れるのか」\n「団体交渉権があるから、会社と対等に話し合えるんだ」\n\n同期「でも、会社にバレたらクビになるんじゃない？」\n\n「組合活動で解雇は違法だから大丈夫...のはず」\n\n不安だが、現状を変えるには行動するしかない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "3人で組合を結成する", "next": "form_union_three" },
      { "text": "やっぱり転職の方が安全かも", "next": "job_search_burnout" },
      { "text": "労基署に相談してみる", "next": "labor_inspection" }
    ]
  },

  "form_union_three": {
    "text": "同期と後輩の3人で労働組合を結成することにした。\n\n「組合名はどうする？」\n「『○○会社労働組合』でいいんじゃない？」\n\n組合規約を作成し、役員を決める。委員長は俺がやることになった。\n\n「いよいよ会社と交渉するのか...」\n\n緊張と期待が入り混じる。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "残業代の支払いを要求する", "next": "demand_overtime_pay" },
      { "text": "まず他の社員にも声をかける", "next": "demand_overtime_pay" },
      { "text": "労基署に相談してから動く", "next": "labor_inspection" }
    ]
  },

  "demand_overtime_pay": {
    "text": "団体交渉で残業代の支払いを要求することにした。\n\n人事部長「残業代110円？そんなの払ってるじゃないか」\n\n「110円って何の冗談ですか？法定の残業代を支払ってください」\n\n人事部長、タバコ休憩で1時間以上席を外してから戻ってきて...\n\n「うちは赤字経営だから無理だ」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "「じゃあ役員報酬を削れ」と言う", "next": "cut_executive_pay" },
      { "text": "弁護士を同席させる", "next": "consult_lawyer_first" },
      { "text": "労基署への申告を示唆する", "next": "cut_executive_pay" }
    ]
  },

  "cut_executive_pay": {
    "text": "「赤字なら役員報酬を削ったらどうですか？重役の高級車代を残業代に回してください」\n\n人事部長の顔が真っ赤になる。\n\n「生意気な口を叩くな！」\n\n「これはパワハラですね。録音してますから」\n\nスマホを取り出すと、人事部長が慌てる。\n\n「ちょ、ちょっと待て...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "録音を武器に交渉を有利に進める", "next": "use_recording" },
      { "text": "労基署に申告すると宣言する", "next": "use_recording" },
      { "text": "穏便に話し合いを続ける", "next": "use_recording" }
    ]
  },

  "use_recording": {
    "text": "録音を武器に交渉を有利に進めた。\n\n「この録音が労働基準監督署に提出されたらどうなるか、お分かりですよね？」\n\n人事部長、完全に青ざめる。\n\n「わ、分かった...残業代については検討する」\n\n「検討じゃなくて、いつから支払うんですか？」\n\n組合の力を実感した瞬間だった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "残業代の支払いを勝ち取る", "next": "win_overtime_pay" },
      { "text": "弁護士を入れて正式な交渉に移る", "next": "consult_lawyer_first" },
      { "text": "即座に労基署に申告する", "next": "labor_inspection" }
    ]
  },

  "win_overtime_pay": {
    "text": "ついに残業代の支払いを勝ち取った！\n\n「月給が5万円も上がった...」\n「組合作って本当に良かった」\n\n同期「他の人たちも羨ましがってるよ。組合に入りたいって」\n\n会社側も労働環境の改善に取り組み始めた。飲み会の強制参加も禁止になった。\n\n「俺たちが会社を変えたんだ」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働組合を全社に拡大する", "next": "company_wide_union" },
      { "text": "組合活動に専念する", "next": "company_wide_union" },
      { "text": "他の問題にも取り組む", "next": "company_wide_union" }
    ]
  },

  "company_wide_union": {
    "text": "労働組合は全社に拡大し、従業員の8割が加入した。\n\n・残業代は法定通り支払われるようになった\n・タバコ休憩は15分以内に制限\n・飲み会の強制参加は禁止\n・セクハラ・パワハラの相談窓口を設置\n・有給取得率は90%以上に\n\n「この会社、普通の会社になったな」\n\n組合委員長として、働きやすい職場作りに貢献できた。\n\n【グッドエンド：労働組合で会社改革成功】",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },

  "labor_inspection": {
    "text": "労働基準監督署に相談することにした。\n\n「残業代110円というのは、どういう計算ですか？」\n\n署員「これはおかしいですね。法定の残業代をちゃんと計算してます？」\n\n「計算機で割るだけなので...」\n\n「それは違法です。最低でも25%割増が必要です」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "組合を結成して団体交渉する", "next": "form_union_three" },
      { "text": "弁護士に相談するルートを選ぶ", "next": "consult_lawyer_first" },
      { "text": "会社への匿名申告を検討する", "next": "plan_anonymous_report" }
    ]
  },

  "consult_lawyer_first": {
    "text": "弁護士に相談することにした。\n\nブラック企業対応を得意とする弁護士事務所を見つけ、初回相談に申し込む。\n\n弁護士「残業代110円ですか？これは典型的な労基法違反ですね」\n\n「どうすればいいんでしょうか？」\n\n弁護士「いくつかの選択肢があります。個別に代理交渉することもできますし、労基署への申告をサポートすることもできます」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "弁護士に団体交渉を依頼", "next": "lawyer_group_negotiation" },
      { "text": "弁護士に代理人交渉を依頼", "next": "lawyer_individual_negotiation" },
      { "text": "労基署申告に弁護士をつける", "next": "lawyer_with_labor_report" }
    ]
  },

  "plan_anonymous_report": {
    "text": "匿名申告について考えることにした。\n\n署員「申告者の特定は不要です。ただし、できれば証拠があると調査が進みやすくなります」\n\n「どんな証拠が必要ですか？」\n\n署員「給与明細、勤務時間の記録、パワハラの録音など、違反を証明するものなら何でもいいです」\n\n「準備して来月申告します」",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "証拠を集める（慎重に進める）", "next": "gather_evidence_carefully" },
      { "text": "給与明細だけで申告する（急ぐ）", "next": "report_with_minimal_evidence" },
      { "text": "同期にも証拠集めを手伝ってもらう", "next": "gather_evidence_with_colleague" }
    ]
  },

  "lawyer_group_negotiation": {
    "text": "弁護士に団体交渉を依頼することにした。\n\n弁護士「同期の方にも協力してもらえますか？」\n「はい、二人で一緒に交渉してもらいたいです」\n\n弁護士「では労働組合を結成して、団体交渉権を得るという形式で行いましょう」\n\n数週間後、弁護士が会社と団体交渉を開始。会社側の代理人も弁護士を雇った。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "強気で全面的な改善を要求", "next": "lawyer_demanding_negotiation" },
      { "text": "段階的改善案を提示", "next": "lawyer_gradual_plan" },
      { "text": "会社の最初の提案を聞く", "next": "lawyer_listen_first" }
    ]
  },

  "lawyer_individual_negotiation": {
    "text": "弁護士に代理人交渉を依頼することにした。\n\n弁護士「会社に内容証明郵便で、未払い残業代の請求書を送ります」\n\n数日後、会社から連絡がきた。\n\n人事部「このような請求は聞いていません。話し合いで解決しましょう」\n\n弁護士を通じて交渉が始まる。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "全額請求を貫く", "next": "lawyer_demand_full_amount" },
      { "text": "示談で和解する", "next": "lawyer_settlement" },
      { "text": "裁判を辞さない姿勢を見せ交渉", "next": "lawyer_litigation_threat" }
    ]
  },

  "lawyer_with_labor_report": {
    "text": "労基署申告に弁護士をつけることにした。\n\n弁護士「申告内容に基づいて、さらに詳しい証拠を集めましょう」\n\n弁護士と一緒に細かく記録を整理し、労働基準監督署に申告書を提出。\n\n弁護士「会社が是正勧告に応じない場合は、さらに強い措置を取ります」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "是正勧告の結果を待つ", "next": "wait_lawyer_investigation" },
      { "text": "同時に社内での証拠集めを続ける", "next": "gather_evidence_while_waiting" }
    ]
  },

  "gather_evidence_carefully": {
    "text": "慎重に証拠を集めることにした。\n\n・給与明細をコピー\n・勤務時間の記録をつける\n・パワハラ発言を録音\n・メールでの不当な指示を保存\n\n1ヶ月かけて、しっかりした証拠を集めた。\n\n「これなら申告しても大丈夫だろう」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "申告書を提出する", "next": "submit_evidence_report" },
      { "text": "さらに追加で証拠を集める", "next": "gather_more_evidence" },
      { "text": "証拠集めがバレてしまう", "next": "evidence_discovered" }
    ]
  },

  "report_with_minimal_evidence": {
    "text": "給与明細だけで申告することにした。\n\n「早く動いた方が得策だ」\n\n労働基準監督署に申告を提出。\n\n署員「証拠は給与明細だけですか？」\n「はい。他の証拠は...」\n\n「少し弱いですが、調査は開始します」\n\n会社への調査は始まったが、強制力は弱いかもしれない。",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "追加の証拠をすぐに送る", "next": "rush_evidence_submission" },
      { "text": "調査の進行を見守る", "next": "wait_investigation_results" }
    ]
  },

  "gather_evidence_with_colleague": {
    "text": "同期に証拠集めを手伝ってもらうことにした。\n\n同期「俺たちでやるんだ」\n「そう。一人より二人の方が証拠も集めやすいし」\n\n給与明細、勤務記録、録音、メール...\n\n二人で手分けして、2週間で十分な証拠を集めた。\n\n「これで大丈夫」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "申告書を提出する", "next": "submit_evidence_report" },
      { "text": "複数人で申告の力を強める", "next": "multi_person_report" },
      { "text": "複数人での証拠集めがバレてしまう", "next": "evidence_discovered" }
    ]
  },

  "lawyer_demanding_negotiation": {
    "text": "強気で全面的な改善を要求することにした。\n\n弁護士「未払い残業代の全額支払い、パワハラ責任者の懲戒、労働環境の全面改善を要求します」\n\n会社側弁護士「そんな無茶な...」\n\n弁護士「労基法違反は明白です。応じなければ裁判も辞しません」\n\n会社側が青ざめる。数日後、会社から妥協案が来た。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "会社の妥協案を受け入れる", "next": "lawyer_accept_compromise" },
      { "text": "さらに厳しい条件を要求する", "next": "lawyer_push_further" }
    ]
  },

  "lawyer_gradual_plan": {
    "text": "段階的改善案を提示することにした。\n\n弁護士「まずは来月から残業代の正規支払いから始めましょう。その後、パワハラ対策と有給取得の改善に進めます」\n\n会社側「それなら協力できそうだ」\n\n歩み寄りができた。段階的ですが、確実な改善が見込める。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "段階的改善を受け入れる", "next": "lawyer_gradual_success" },
      { "text": "各段階の期限を明記させる", "next": "lawyer_set_deadlines" }
    ]
  },

  "lawyer_listen_first": {
    "text": "会社の最初の提案を聞くことにした。\n\n会社側弁護士「残業代については、計算方法の見直しで対応したいと思います」\n\n弁護士「どの程度の改善ですか？」\n\n会社側弁護士「月額2万円の補償で」\n\n弁護士「それは不十分です。法定賃金での全額支払いが必要です」\n\n交渉が本格化する。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "弁護士の指示で交渉を進める", "next": "follow_lawyer_advice" },
      { "text": "自分の主張を強く出す", "next": "assert_own_demands" }
    ]
  },

  "lawyer_demand_full_amount": {
    "text": "全額請求を貫くことにした。\n\n弁護士「未払い残業代の全額約800万円の支払いを要求します」\n\n会社「そんなに払える訳ない」\n\n弁護士「では裁判ですね」\n\n会社が折れるまで交渉を続けた結果、最終的に600万円での和解に至った。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "和解金を受け取る", "next": "receive_settlement_money" }
    ]
  },

  "lawyer_settlement": {
    "text": "示談で和解することにした。\n\n弁護士「相応の補償で和解しましょう」\n\n交渉の結果、400万円の補償と、今後の労働条件の改善で合意。\n\n「これでいいか...」\n\n裁判より早く決着がついた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "和解金を受け取る", "next": "receive_settlement_money" },
      { "text": "もう少し交渉を続ける", "next": "lawyer_demand_full_amount" },
      { "text": "これで決着とする", "next": "receive_settlement_money" }
    ]
  },

  "lawyer_litigation_threat": {
    "text": "裁判を辞さない姿勢を見せて交渉することにした。\n\n弁護士「これは明らかな労基法違反です。裁判になれば、会社は敗訴します」\n\n会社側弁護士「...了解しました。協議させてください」\n\n数日後、会社からは500万円での和解提案があった。\n\n「やった...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "和解を受け入れる", "next": "receive_settlement_money" },
      { "text": "さらに交渉を続ける", "next": "lawyer_demand_full_amount" }
    ]
  },

  "wait_lawyer_investigation": {
    "text": "労働基準監督署の調査を待つことにした。\n\n弁護士「調査は1ヶ月ほどかかるでしょう」\n\n1ヶ月後、会社に是正勧告が出た。\n\n弁護士「さあ、これで交渉が有利になりました」\n\n是正勧告に従わない会社に対しては、さらに強い措置が取られる可能性もある。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "是正勧告に基づいて改善を要求", "next": "continue_improved_company" },
      { "text": "さらに追加の慰謝料を請求", "next": "lawyer_additional_claim" }
    ]
  },

  "gather_evidence_while_waiting": {
    "text": "申告後も証拠集めを続けることにした。\n\n弁護士「いい判断ですね。さらに詳しい証拠があれば、調査がより強固になります」\n\nメールの記録、同僚との会話、パワハラの具体例...\n\n追加の証拠を2週間かけて集めた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "追加証拠を申告書に添付", "next": "submit_additional_evidence" },
      { "text": "調査結果を待つ", "next": "wait_lawyer_investigation" }
    ]
  },

  "submit_evidence_report": {
    "text": "十分な証拠を集めて申告書を提出した。\n\n署員「このような詳しい記録はいいですね。調査が進みやすくなります」\n\n2週間後、会社に是正勧告が届いた。\n\n会社側も無視できない状況になった。",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "会社の改善状況を見守る", "next": "continue_improved_company" },
      { "text": "弁護士を雇って追加請求する", "next": "lawyer_additional_claim" },
      { "text": "この機会に転職活動を始める", "next": "job_search_burnout" }
    ]
  },

  "gather_more_evidence": {
    "text": "さらに追加で証拠を集めることにした。\n\n弁護士に相談しながら、より詳しい記録を集める。\n\n・具体的な業務内容と時間\n・パワハラの詳細な記録\n・他の従業員の被害証言\n\nさらに1ヶ月かけて、圧倒的な証拠量を集めた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "完全な証拠とともに申告", "next": "submit_evidence_report" },
      { "text": "弁護士に相談して提出する", "next": "consult_lawyer_first" },
      { "text": "同僚と共に複数人で申告", "next": "multi_person_report" }
    ]
  },

  "rush_evidence_submission": {
    "text": "追加の証拠をすぐに労働基準監督署に送ることにした。\n\n署員「ああ、これで強制力が出てきますね」\n\n追加の録音やメール記録で、会社の違法性が明確になった。\n\n署員「これは指導だけでは済みませんね。最低でも是正勧告を出します」",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "是正勧告を見守る", "next": "continue_improved_company" },
      { "text": "弁護士に依頼して慰謝料請求", "next": "consult_lawyer_first" },
      { "text": "労働組合を結成する", "next": "form_union_three" }
    ]
  },

  "multi_person_report": {
    "text": "複数人での申告で力を強めることにした。\n\n同期の他に、後輩も申告に参加することにした。\n\n3人での申告により、労働基準監督署も全社調査に乗り出した。\n\n「複数人だと説得力が違う」",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "全社調査の結果を待つ", "next": "company_wide_union" },
      { "text": "この機会に労働組合を結成", "next": "form_union_three" },
      { "text": "弁護士を立てて団体交渉", "next": "lawyer_group_negotiation" }
    ]
  },

  "lawyer_accept_compromise": {
    "text": "会社の妥協案を受け入れることにした。\n\n弁護士「未払い残業代300万円、パワハラ被害の慰謝料100万円、今後の労働環境改善でいかがでしょうか」\n\n会社側「それで」\n\n最終的に400万円での和解が成立した。完全な勝利ではないが、現実的な解決だ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "和解金を受け取る", "next": "receive_settlement_money" },
      { "text": "和解金で転職活動を始める", "next": "job_search_burnout" },
      { "text": "改善された会社で働き続ける", "next": "continue_improved_company" }
    ]
  },

  "lawyer_push_further": {
    "text": "さらに厳しい条件を要求することにした。\n\n弁護士「450万円での和解が最低ラインです」\n\n会社側弁護士「それは...無理です」\n\n交渉が膠着状態に。弁護士は「裁判に持ち込むか、現在の提案で妥協するか」と言った。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "最終提案を受け入れる", "next": "lawyer_accept_compromise" },
      { "text": "裁判を決行する", "next": "lawyer_litigation_threat" }
    ]
  },

  "lawyer_gradual_success": {
    "text": "段階的改善を受け入れることにした。\n\n第1段階：残業代の適正支払い開始\n第2段階（3ヶ月後）：パワハラ対策の強化\n第3段階（6ヶ月後）：有給取得率80%以上を実現\n\n実際に改善が進み始めた。段階的ですが、確実な前進だ。",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": [
      { "text": "会社の改善を見守る", "next": "continue_improved_company" },
      { "text": "労働組合を全社に拡大する", "next": "company_wide_union" },
      { "text": "改善の進捗を監視し続ける", "next": "monitor_company_improvement" }
    ]
  },

  "lawyer_set_deadlines": {
    "text": "各段階の期限を明記させることにした。\n\n弁護士「来月末までに残業代支払い、3ヶ月以内にパワハラ対策、6ヶ月以内に有給改善。期限を過ぎたら罰則と」\n\n会社側「わかりました」\n\nしっかりした契約書を作成。期限を逃すことはできない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "改善の進捗を確認する", "next": "lawyer_gradual_success" },
      { "text": "毎月の監視体制を整える", "next": "monitor_company_improvement" },
      { "text": "期限を待つ間に転職も検討", "next": "job_search_burnout" }
    ]
  },

  "follow_lawyer_advice": {
    "text": "弁護士の指示で交渉を進めることにした。\n\n弁護士「法定賃金での全額支払い、これが最低条件です」\n\n交渉が何度も行われたが、最終的に500万円での和解が成立した。\n\n弁護士の専門的なアドバイスが功を奏した。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "和解金を受け取る", "next": "receive_settlement_money" },
      { "text": "改善された会社に残る", "next": "continue_improved_company" }
    ]
  },

  "assert_own_demands": {
    "text": "自分の主張を強く出すことにした。\n\n「月2万円は馬鹿にしてる。法定通りに払え」\n\n会社側が怒った。\n\n弁護士「自分で交渉するのは避けた方が...」\n\n会社の対応が悪くなった。最終的に200万円での低い和解に留まった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "低額の和解を受け入れる", "next": "lawyer_low_settlement" },
      { "text": "交渉を打ち切る", "next": "lawyer_negotiation_breakdown" }
    ]
  },

  "receive_settlement_money": {
    "text": "和解金を受け取った。\n\n銀行口座に振り込まれた和解金。数百万円の金額に、思わず目を疑った。\n\n「これだけあれば...新しい人生を始められる」\n\n和解金を使って、新しい会社での新しいスタートを切ることにした。\n\n【グッドエンド：弁護士による和解成功】",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },

  "lawyer_additional_claim": {
    "text": "是正勧告に基づいて、追加の慰謝料を請求することにした。\n\n弁護士「報復人事、セクハラ、パワハラ...それぞれに慰謝料請求ができます」\n\n追加で200万円の請求を会社に送付。\n\n会社「その他の要求は...」\n\n最終的に追加100万円での和解。合計で大きな金額を獲得した。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "和解金を受け取る", "next": "receive_settlement_money" },
      { "text": "さらなる請求を検討する", "next": "lawyer_demand_full_amount" }
    ]
  },

  "submit_additional_evidence": {
    "text": "追加証拠を申告書に添付して提出した。\n\n署員「ここまで詳しい証拠があれば、調査が大きく前に進みます」\n\n会社への調査が本格化。1ヶ月後、強い是正勧告が出た。\n\n「やった...」",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "是正勧告への対応を見守る", "next": "continue_improved_company" },
      { "text": "弁護士を雇って和解交渉", "next": "consult_lawyer_first" },
      { "text": "労働組合を結成して交渉", "next": "form_union_three" }
    ]
  },

  "lawyer_low_settlement": {
    "text": "低額の和解を受け入れることにした。\n\n200万円...満足ではないが、これ以上交渉できない状況だ。\n\n弁護士「申し訳ありません。もう少し交渉の進め方が...」\n\n結局、自分の強い発言が交渉を悪くしてしまった。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "低額の和解金を受け取る", "next": "lawyer_low_settlement_accept" },
      { "text": "最後にもう一度交渉を試みる", "next": "lawyer_demand_full_amount" },
      { "text": "諦めてこれで終わりにする", "next": "lawyer_low_settlement_accept" }
    ]
  },

  "lawyer_negotiation_breakdown": {
    "text": "交渉を打ち切ることにした。\n\n「法定通りに払わないなら裁判だ」\n\nしかし交渉をぶち壊してしまった。会社は弁護士を通さず、直接人事部に呼び出してきた。\n\n人事部「君、我が社に不満があるなら辞めてもらっていいよ」\n\n\"逆提案\"をされてしまった。\n\n【バッドエンド：交渉破裂で退職勧告】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "lawyer_low_settlement_accept": {
    "text": "200万円の和解金を受け取った。\n\n「少ないけど、これ以上は無理か...」\n\n弁護士「本来ならもっと取れていたんですが...」\n\n和解金で転職活動をサポートしてもらい、新しい会社を探すことにした。",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": [
      { "text": "和解金で新しい人生をスタート", "next": "receive_settlement_money" },
      { "text": "転職活動を本格的に始める", "next": "job_search_burnout" },
      { "text": "改善された会社に残る", "next": "continue_improved_company" }
    ]
  },

  "wait_investigation_results": {
    "text": "労働基準監督署の調査が進んだ。\n\n2週間後、是正勧告が会社に届いた。\n\n「残業代の支払い、パワハラの改善、有給取得の推進」\n\n会社側も改善にようやく動き始めた。\n\n「組合の力、本当にすごいな」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "さらに改善を監視する", "next": "monitor_company_improvement" },
      { "text": "労働組合を全社に拡大", "next": "company_wide_union" },
      { "text": "改善された会社で働き続ける", "next": "continue_improved_company" }
    ]
  },

  "monitor_company_improvement": {
    "text": "会社の改善状況を監視することにした。\n\n・残業代の支払い: 完全に支払われるように改善\n・パワハラの相談窓口: 設置完了\n・有給取得率: 80%以上に改善\n\nようやく普通の労働環境になり始めた。\n\n「長い戦いだったけど、やっと勝った」",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": [
      { "text": "改善された会社で働き続ける", "next": "company_wide_union" },
      { "text": "組合活動を全社に拡大", "next": "company_wide_union" },
      { "text": "新しい環境を求めて転職", "next": "job_search_burnout" }
    ]
  },

  "continue_improved_company": {
    "text": "改善された会社で働き続けることにした。\n\n・月給が5万円アップ（適正な残業代支払い）\n・定時退社が当たり前に\n・有給取得率90%以上\n・ハラスメント防止体制の確立\n・働きやすい職場環境\n\n部長「お前のおかげで、この会社は良くなったな」\n\n「当たり前のことをしただけです」",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": [
      { "text": "改善された会社で新しいキャリアを築く", "next": "company_wide_union" },
      { "text": "労働組合活動に専念する", "next": "company_wide_union" }
    ]
  },

  "procrastinate": {
    "text": "転職活動は面倒だから、後回しにすることにした。\n\n「また今度でいいや」\n\n結局、毎日が単調な日々の繰り返し。部長からのセクハラ、パワハラは続く。\n\n気がつくと3年が経っていた。\n\n「あのとき転職しておけば...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "毎日残業を続ける", "next": "accept_overtime_daily" },
      { "text": "今からでも転職活動を始める", "next": "job_search_burnout" },
      { "text": "労働組合を作ろうと決意", "next": "research_union" }
    ]
  },

  "accept_overtime_daily": {
    "text": "毎日の残業を受け入れることにした。\n\n「残業は当たり前。これがサラリーマンの人生か」\n\n毎晩23時まで仕事。コンビニのパン、カップ麺が夕食。\n\n体は疲弊し始める。\n\n「肩も凝るし、頭痛も毎日...」\n\n健康診断では要検査判定が出た。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "限界を感じる", "next": "health_breakdown" },
      { "text": "今すぐ転職活動を始める", "next": "job_search_burnout" },
      { "text": "労働基準監督署に相談", "next": "labor_inspection" }
    ]
  },

  "health_breakdown": {
    "text": "ついに体調を崩してしまった。過労で倒れて病院に運ばれる。\n\n医師「完全に過労ですね。しばらく休養が必要です」\n\n会社「休職？困るなあ。代わりはいないんだよ」\n\n体調不良で働けないのに、会社からの圧力は止まらない。\n\n結局、体調が回復する前に退職せざるを得なくなった。\n\n【バッドエンド：過労で体調崩して強制退職】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "union_route": {
    "text": "労働組合について考えてみることにした。\n\n「労働組合があれば、こんなことには...」\n\n同期「本当にそうだな。でも、作るのって難しくない？」\n\n「調べてみようぜ」\n\n労働組合について勉強を始めた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働組合について調べる", "next": "research_union" },
      { "text": "転職した方が早いかも", "next": "job_search_burnout" },
      { "text": "まず労基署に相談", "next": "labor_inspection" }
    ]
  },

  "run_away_quickly": {
    "text": "小走りで部長の前から逃げた。\n\n「待てよ！」\n\n仕事を放り出してそのまま帰宅。\n\n翌日、人事部から呼び出された。\n\n「あの対応は何だ？」\n\n「...すみません」\n\n降格と給与カットが決定した。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "精神的に追い詰められる", "next": "mental_breakdown" },
      { "text": "不当処分として弁護士に相談", "next": "consult_lawyer_first" },
      { "text": "この機に転職を決意", "next": "job_search_burnout" }
    ]
  },

  "mental_breakdown": {
    "text": "連日の嫌がらせで精神的に参ってしまった。\n\n「もう無理...」\n\n会社に行くのが怖くなり、うつ病を発症。\n\n医師「労働環境が原因のうつ病ですね」\n\n労災申請をしたが、会社は「個人的な問題」として認めない。\n\n長期間の治療が必要になり、結局退職することに。\n\n【バッドエンド：報復で精神を病んで退職】",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "interview_failure": {
    "text": "面接の結果が返ってきた。\n\nメール：「誠に申し訳ございませんが、今回は見送らせていただくことになりました」\n\n「え？落ちた？」\n\n他の企業にも応募しているが、どの企業からも不採用通知が届く。\n\n「実務経験がない。スキルが不足している。どの企業も同じコメント...」\n\n転職活動を続けるしかないが、モチベーションが下がり始めた。\n\n【バッドエンド：面接不合格で転職失敗】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "job_search_burnout": {
    "text": "転職活動を3ヶ月続けた。面接、筆記試験、経歴書の修正...\n\n「疲れた...」\n\nモチベーションが完全に消えてしまった。\n\n「どんな仕事でもいい。今の会社で我慢するしかない」\n\n転職活動を放棄。結局、何も変わらないまま、毎日の残業地獄に戻った。\n\n現状に対する怒りも薄れ、諦めだけが残った。\n\n【バッドエンド：転職活動に疲弊して諦める】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "offer_retracted": {
    "text": "内定をもらった企業から連絡がきた。\n\n「申し訳ございませんが...事業計画の変更により、内定を取り消させていただくことになりました」\n\n「え？なぜ...」\n\n一度手に入れた希望が、一瞬にして消え去った。\n\n現在の会社に戻ったが、退職の話をしていたため、居づらい雰囲気に。\n\n転職活動を再開するしかないが、心が折れている。\n\n【バッドエンド：内定取消で希望喪失】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "evidence_discovered": {
    "text": "証拠集めをしていたことが、ついに会社にバレた。\n\n人事部「給与明細のコピー、勤務記録、録音...何のつもりだ？」\n\n「...それは...」\n\n人事部長「君は我が社の秘密を外部に漏らそうとしている。もう来なくていい」\n\n退職勧告を突きつけられた。証拠を集めようとしたことが、逆に自分の首を締めた。\n\n【バッドエンド：証拠集めがバレて退職勧告】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "punch_boss": {
    "text": "「あ〜そうなのか。お前もそんな若くないんだなw」\n\nその一言で、堪忍袋の緒が切れた。\n\n衝動に駆られて、部長の顔面に拳を叩きつける。\n\n部長「ぐあ！」\n\nそれは一瞬の満足感だったが、すぐに現実が打ちつけた。\n\n翌日、警察から連絡があった。暴行罪で訴えると。\n\n弁護士費用、示談金、そして職場での立場......全てが失われた。\n\n【バッドエンド：衝動的暴行で人生破綻】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

}