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
      { "text": "同期に愚痴る", "next": "complain_to_colleague" }
    ]
  },

  "sarcastic_reply": {
    "text": "思わず口から出てしまった。\n\n「部長こそお疲れ様です」\n\n皮肉を込めて言ったつもりだったが、部長の顔が一瞬固まった。\n\n「...なんだそれは？」\n\n低い声で聞き返される。周囲の空気が凍りつく。同僚たちの視線が一斉にこちらを向く。\n\nやばい、言い過ぎた。完全に地雷を踏んでしまった。部長の機嫌を損ねたら、後が怖い。\n\n心臓がバクバクと音を立てている。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "そのまま逃げる", "next": "run_away_quickly" },
      { "text": "「冗談です」と取り繕う", "next": "awkward_smile" },
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
    "text": "コンビニで買った残業パンを食べながら、黙々と仕事を続ける。\n\n窓の外はもう真っ暗だ。オフィスの蛍光灯だけが白々しく光っている。\n\n時計を見ると22時を回っている。定時から既に5時間も経過している。\n\n「今日も遅くなるな...」\n\n周りを見渡すと、まだ働いている同僚が数人いる。みんな疲れ切った顔をしている。\n\nこれが普通なのか？いや、絶対におかしい。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "タクシーで帰る（自腹）", "next": "taxi_home" },
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

  "talk_to_boss_comment_break": {
    "text": "渋々部長の元へ行く。どうせいつもの無茶振りだ。\n\n部長の席に近づくと、煙草の臭いが漂ってくる。また煙草休憩から戻ってきたばかりなのか。\n\n「おお、来たか。ちょうどいいところだ」\n\n部長の「ちょうどいい」は、こちらにとって「最悪のタイミング」を意味する。\n\n溜息を飲み込んで、部長の指示を待つ。どうせろくな話じゃない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "資料作成の仕事を受ける", "next": "receive_document_task" },
      { "text": "暑気払いの準備を手伝う", "next": "receive_document_task" },
      { "text": "書類提出について話を聞く", "next": "receive_document_task" }
    ]
  },

  "talk_to_boss_ignore": {
    "text": "渋々部長の元へ行く。どうせいつもの無茶振りだ。\n\n自分はいつも遅刻してくるくせに、社員の遅刻は許さない。それでいて出社したと思ったらすぐ煙草休憩。\n\n「お、ちょうどよかった」\n\n部長がニヤリと笑う。この笑顔を見るたびに嫌な予感しかしない。\n\n案の定、部長の手元には大量の書類が積まれている。",
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
    "text": "同期に相談することにした。\n\n「ちょっと、手伝ってくれないか？この量は一人じゃ無理だ」\n\n同期は自分の仕事の手を止めて、こちらの資料を見た。\n\n「...またかよ、部長の無茶振り。わかった、一緒にやろう」\n\n同期も疲れているはずなのに、快く引き受けてくれた。\n\n「ありがとう。本当に助かる」\n\n一人じゃないと思うだけで、少し気が楽になった。",
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
      { "text": "慎重にメンバーを集める", "next": "union_member_recruitment" },
      { "text": "やっぱり転職の方が安全かも", "next": "job_search_burnout" },
      { "text": "労基署に相談してみる", "next": "labor_inspection" }
    ]
  },

  "union_member_recruitment": {
    "text": "労働組合を作るには、信頼できるメンバーが必要だ。\n\n誰を誘うべきか...。給湯室で同期と後輩に声をかけてみた。\n\n同期「俺も残業代の件でマジで困ってる。やろうぜ」\n後輩「僕も！部長のパワハラに我慢の限界です」\n\n2人とも即座に賛同してくれた。でも、これ以上人数を増やすべきか？\n\n大人数なら力になるが、情報が漏れて会社に潰されるリスクも高まる。\n\n「慎重に進めないと...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "信頼できる3人だけで始める", "next": "union_preparation_meeting" },
      { "text": "すぐに大人数を集めて力を見せる", "next": "union_info_leak" },
      { "text": "一人で始めるのが一番安全", "next": "work_alone_suffer" }
    ]
  },

  "union_preparation_meeting": {
    "text": "3人で密かに準備会議を開いた。喫茶店の奥の席で、声を潜めて話す。\n\n同期「でも法律のことよく分からないよな」\n後輩「間違えたら会社に訴えられるんじゃ...」\n\n「確かに...労働組合法とか、ちゃんと勉強しないとマズイかも」\n\nネットで調べると、不当労働行為、団体交渉権、労働協約...難しい用語がたくさん出てくる。\n\n「これ、生半可な知識じゃヤバいぞ」\n\n慎重に進めるべきか、勢いで行動するべきか。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働法の勉強会を開く", "next": "union_registration_process" },
      { "text": "勉強は後回し、すぐに行動", "next": "union_legal_mistake" },
      { "text": "会社に事前相談して認めてもらう", "next": "union_crushed_early" }
    ]
  },

  "union_registration_process": {
    "text": "労働法を勉強し、組合規約を作成した。\n\n「労働組合として正式に登録すべきかな？」\n\n同期「登録しないとダメなの？」\n\n「登録しないと団体交渉権が認められない可能性がある。でも登録すると会社にバレるリスクも...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "正式に労働組合として登録する", "next": "form_union_three" },
      { "text": "非公式なグループのまま進める", "next": "informal_group_failure" },
      { "text": "登録は後回しにして先に行動", "next": "company_union_busting" }
    ]
  },

  "form_union_three": {
    "text": "正式に労働組合を結成した！\n\n労働基準監督署に組合結成を届け出た。これで法的に保護された労働組合だ。\n\n「組合名は『○○会社労働組合』で登録したぞ」\n「よし、これで団体交渉権がある。会社は拒否できない」\n\n組合規約を作成し、役員を選出。委員長は俺がやることになった。\n\n「いよいよだな。ここからが本当の戦いだ」\n\n数日後...人事部の様子がおかしい。何かが起きている。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "様子を見る", "next": "company_union_busting" },
      { "text": "すぐに団体交渉を申し入れる", "next": "company_union_busting" },
      { "text": "労基署に相談してから動く", "next": "labor_inspection" }
    ]
  },

  "company_union_busting": {
    "text": "人事部長が組合員を個別に呼び出し始めた。\n\n後輩が真っ青な顔で戻ってきた。\n\n後輩「『組合なんかやめて、真面目に仕事しろ』って...脅されました」\n\n「それ完全に不当労働行為じゃん！」\n\nどう対応する？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": [
      { "text": "不当労働行為として詳細に記録する", "next": "union_member_wavering" },
      { "text": "怒って人事部長に詰め寄る", "next": "violent_confrontation" },
      { "text": "怖くなって組合を解散する", "next": "union_dissolution" }
    ]
  },

  "union_member_wavering": {
    "text": "不当労働行為を記録していたところ、さらに事態が悪化した。\n\n同期「実は...人事部長から課長職への昇進を提示された。ただし組合を抜ける条件で」\n\n後輩「僕もです...ボーナス増額の話をされました」\n\n会社の分断工作だ。どうする？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": [
      { "text": "冷静に組合の意義を説明する", "next": "gather_union_evidence" },
      { "text": "『昇進を受けていいよ』と勧める", "next": "union_split" },
      { "text": "感情的に『裏切り者！』と非難", "next": "union_internal_conflict" }
    ]
  },

  "gather_union_evidence": {
    "text": "「みんな、冷静に考えよう。会社は俺たちを分断しようとしてる」\n\n「今ここで負けたら、この会社は何も変わらない」\n\n同期「...そうだな。一緒にやろう」\n後輩「僕も最後まで付き合います」\n\n「よし、不当労働行為の証拠を組織的に集めよう」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "組合員全員で組織的に証拠収集", "next": "union_legal_support" },
      { "text": "自分一人で証拠を集める", "next": "evidence_discovered" },
      { "text": "証拠なしですぐ交渉開始", "next": "union_legal_mistake" }
    ]
  },

  "union_legal_support": {
    "text": "証拠を集めたが、法的な知識が不足している。\n\n同期「労働組合専門の弁護士がいるって聞いたけど」\n\n「費用がかかるけど...ここは専門家の力を借りるべきかも」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働組合専門の弁護士に依頼", "next": "demand_overtime_pay" },
      { "text": "自力で法律を解釈して進める", "next": "union_legal_mistake" },
      { "text": "費用をケチって一般の弁護士", "next": "weak_union_settlement" }
    ]
  },

  "demand_overtime_pay": {
    "text": "ついに団体交渉の日が来た。\n\n労働組合側は弁護士と組合員3名。会社側は人事部長、取締役、そして会社側の弁護士。\n\n緊張が走る会議室。証拠資料を机に並べ、深呼吸する。\n\n「それでは、労働基準法に基づき、残業代の全額支払いを要求します」\n\n人事部長「残業代110円は既に支払っている。これ以上は会社として無理だ」\n\n「110円では法定最低賃金にすら届いていません」\n\nここが正念場だ。どう切り出す？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "弁護士同席で冷静に法的根拠を説明", "next": "first_negotiation_tactics" },
      { "text": "感情的に怒りをぶつける", "next": "lawyer_negotiation_breakdown" },
      { "text": "低い金額から交渉開始する", "next": "weak_union_settlement" }
    ]
  },

  "first_negotiation_tactics": {
    "text": "弁護士「労働基準法第37条に基づき、時間外労働は25%以上の割増賃金が必要です」\n\n「我々の計算では、過去2年分の未払い残業代は1人あたり約300万円です」\n\n会社側弁護士「そんな金額は払えない。会社が潰れます」\n\n人事部長が組合員の一人に目配せをした...。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "会社の分断工作を警戒する", "next": "company_divide_strategy" },
      { "text": "交渉を続行する", "next": "company_divide_strategy" }
    ]
  },

  "company_divide_strategy": {
    "text": "休憩時間、人事部長が後輩を別室に呼び出した。\n\n30分後、後輩が戻ってきた。\n\n後輩「実は...個別に100万円で和解してくれって言われました」\n\n「それ、組合を分断する作戦だぞ！」\n\nどう対応する？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": [
      { "text": "団結を守り、個別交渉を拒否", "next": "cut_executive_pay" },
      { "text": "『個別交渉してもいいよ』と言う", "next": "union_split" },
      { "text": "強硬姿勢で即座に交渉打ち切り", "next": "lawyer_negotiation_breakdown" }
    ]
  },

  "cut_executive_pay": {
    "text": "「赤字経営なら、まず役員報酬を削減すべきでは？」\n\n人事部長の顔が真っ赤になる。\n\n「生意気な口を叩くな！お前らなんか...」\n\n弁護士が止めに入るが、人事部長は続ける。\n\n「クビにしてやる！」\n\n録音してて良かった...。この発言、いつ出すべきか？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "交渉が膠着した時まで待つ", "next": "recording_evidence_timing" },
      { "text": "今すぐ録音を提示して優位に立つ", "next": "evidence_backfire" },
      { "text": "録音を隠したまま交渉継続", "next": "union_legal_mistake" }
    ]
  },

  "recording_evidence_timing": {
    "text": "交渉は膠着状態に。会社は150万円の一部支払いを提案。\n\n「それでは不十分です」\n\n会社側弁護士「これ以上は無理だ。裁判になってもいいのか？」\n\n「分かりました...では、これを聞いてください」\n\n録音を流す。人事部長の「クビにしてやる！」という音声が響く。\n\n会社側、完全に青ざめた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "この機会に全額支払いを要求", "next": "negotiation_final_stage" }
    ]
  },

  "negotiation_final_stage": {
    "text": "録音証拠の威力は絶大だった。\n\n会社側弁護士「...分かりました。250万円で和解しませんか？」\n\n弁護士「いえ、全額300万円の支払いを求めます」\n\n会社側「それは...」\n\nここが正念場だ。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "全額300万円まで粘る", "next": "win_overtime_pay" },
      { "text": "妥協して250万円で合意", "next": "weak_union_settlement" },
      { "text": "さらに慰謝料も請求する", "next": "lawyer_negotiation_breakdown" }
    ]
  },

  "win_overtime_pay": {
    "text": "ついに残業代全額300万円の支払いを勝ち取った！\n\n「月給が5万円も上がった...」\n「組合作って本当に良かった」\n\n同期「他の部署の人たちも羨ましがってるよ。組合に入りたいって10人以上から連絡来てる」\n\n「これは...組合を全社に広げるチャンスかも」\n\nでも、慎重に進めないと管理職の反発が...。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "慎重に他部署に声をかける", "next": "union_expansion_planning" },
      { "text": "勢いで全社に呼びかける", "next": "premature_expansion" },
      { "text": "3人のままで満足する", "next": "small_union_success" }
    ]
  },

  "union_expansion_planning": {
    "text": "他部署に慎重にアプローチした。\n\n営業部「俺も残業代欲しい。組合入れてくれ」\n企画部「パワハラも問題になってる。一緒に戦いたい」\n\n1ヶ月で組合員は20人に増えた。\n\nしかし、管理職たちが緊急会議を開いているという情報が...。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "管理職の動きを警戒する", "next": "management_resistance" }
    ]
  },

  "management_resistance": {
    "text": "管理職たちが組合拡大に激しく抵抗し始めた。\n\n課長「組合なんか作って、会社を潰す気か！」\n部長「お前らのせいで俺の評価が下がったんだぞ！」\n\n他部署の組合員が脅されている...。どう対応する？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": [
      { "text": "労基署と連携して不当労働行為で対抗", "next": "company_reform_negotiation" },
      { "text": "管理職と直接対決する", "next": "union_internal_conflict" },
      { "text": "引き下がって3人体制に戻る", "next": "small_union_success" }
    ]
  },

  "company_reform_negotiation": {
    "text": "労基署と連携し、不当労働行為として正式に申告。\n\n労基署の調査が入り、管理職のパワハラも明るみに出た。\n\n会社「...分かりました。全社的な労働環境改善に取り組みます」\n\n組合と会社の間で、包括的な改革案が協議された。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "段階的な改革案を提示する", "next": "company_wide_union" },
      { "text": "一気に全ての要求を押し通す", "next": "premature_expansion" },
      { "text": "現状維持で妥協する", "next": "small_union_success" }
    ]
  },

  "company_wide_union": {
    "text": "1年間の戦いが、ついに実を結んだ。\n\n労働組合は全社に拡大し、従業員の8割が加入。会社との交渉を重ね、包括的な労働環境改革が実現した。\n\n残業代は法定通り支払われ、月給が平均5万円アップ。タバコ休憩は15分以内に制限され、飲み会の強制参加は完全に禁止。セクハラ・パワハラの相談窓口が設置され、有給取得率は90%以上に改善した。\n\n「あの時、一人で耐えずに声を上げて良かった」\n\n後輩が笑顔で定時退社する姿を見て、心から思う。\n\n組合委員長として、仲間と共に会社を変えることができた。これが、本当の勝利だ。\n\n【グッドエンド：労働組合で会社改革成功】",
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
    "text": "弁護士に相談することにした。\n\nでも、どの弁護士がいいんだろう？\n\nネットで検索すると、たくさん出てくる。「初回相談無料」「ブラック企業対応」「勝率95%」...。\n\n値段もピンキリだ。安い弁護士、高い弁護士、専門家、非専門家...。\n\n慎重に選ばないと。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働問題専門の弁護士を探す", "next": "research_lawyers" },
      { "text": "安い弁護士を選ぶ", "next": "incompetent_lawyer" },
      { "text": "知人の紹介で適当に決める", "next": "lawyer_initial_consultation_bad" }
    ]
  },

  "research_lawyers": {
    "text": "労働問題専門の弁護士事務所を慎重にリサーチした。\n\nネットで口コミサイト、実績、料金体系を片っ端からチェック。労働審判の経験、残業代請求の成功率、相談者の評価...。\n\n「この『みらい法律事務所』、ブラック企業案件の実績が200件以上もある」\n\n費用は着手金30万円と高めだが、専門性があるほうが確実だ。\n\n「失敗したくない。ここに賭けよう」\n\n初回無料相談を予約した。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "初回相談に行く", "next": "lawyer_initial_consultation" }
    ]
  },

  "lawyer_initial_consultation": {
    "text": "弁護士事務所を訪れた。落ち着いた雰囲気のオフィス。弁護士は40代くらいの女性だ。\n\n弁護士「残業代110円？これは極めて悪質な労働基準法違反ですね」\n\n「証拠はどのくらい必要でしょうか？」\n\n弁護士「給与明細、勤務記録、パワハラの録音、メールでの指示...多ければ多いほど交渉が有利になります」\n\n持参した給与明細を見せると、弁護士の表情が厳しくなった。\n\n「これは...酷いですね。全力でサポートします」\n\n心強い。どのくらい詳しく説明しようか？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "詳細に状況を説明し証拠も見せる", "next": "evidence_collection_phase" },
      { "text": "曖昧な説明だけにする", "next": "lawyer_refuses_case" },
      { "text": "感情的に訴える", "next": "lawyer_initial_consultation_bad" }
    ]
  },

  "evidence_collection_phase": {
    "text": "弁護士「まずは徹底的に証拠を集めましょう。これが勝負の鍵です」\n\n「どのくらい時間をかけるべきですか？」\n\n弁護士「1ヶ月かけて完璧に集めるか、2週間で基本的な証拠だけ集めるか...選択肢はあります」\n\n「ただし、証拠が充実しているほど、会社側も強気に出られません。交渉が圧倒的に有利になります」\n\n給与明細、タイムカード、パワハラの録音、深夜残業のメール記録...。\n\n「どこまで準備するべきか...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "1ヶ月かけて徹底的に証拠収集", "next": "lawyer_strategy_meeting" },
      { "text": "2週間で基本的な証拠のみ", "next": "lawyer_strategy_meeting_rushed" },
      { "text": "すぐに交渉開始してほしい", "next": "quick_low_settlement" }
    ]
  },

  "lawyer_strategy_meeting": {
    "text": "1ヶ月後、十分な証拠を集めて再び弁護士事務所へ。\n\n弁護士「素晴らしい。これだけあれば、かなり有利に交渉できます」\n\n「戦略はどうしますか？」\n\n弁護士「強気で全額請求するか、現実的な金額で早期和解するか...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "弁護士の戦略に完全に従う", "next": "lawyer_individual_negotiation" },
      { "text": "自分の意見を強く主張する", "next": "client_lawyer_conflict" },
      { "text": "消極的で任せきりにする", "next": "lawyer_strategy_meeting_rushed" }
    ]
  },

  "lawyer_strategy_meeting_rushed": {
    "text": "2週間で集めた証拠を弁護士に見せた。\n\n弁護士「...まあ、これでも交渉はできます。ただ、もう少し証拠があれば...」\n\n「でも、これで進めますか？」\n\n弁護士「はい、できる範囲でやりましょう」\n\n少し不安だが、進めるしかない。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "この条件で交渉開始", "next": "lawyer_individual_negotiation" }
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
    "text": "弁護士「会社に内容証明郵便で、未払い残業代600万円の請求書を送りました」\n\n数日後、会社から連絡がきた。\n\n会社「証拠不十分です。こんな金額は払えません」\n\nどう対応する？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "追加証拠を冷静に提示", "next": "company_initial_response" },
      { "text": "感情的に反論する", "next": "lawyer_negotiation_breakdown" },
      { "text": "引き下がって妥協する", "next": "quick_low_settlement" }
    ]
  },

  "company_initial_response": {
    "text": "弁護士が追加の証拠を会社に送付した。\n\n給与明細、タイムカード、パワハラの録音...\n\n会社側弁護士「...これは確かに問題ですね。ただ、600万円は過大です」\n\n弁護士「では、いくらなら妥当だとお考えですか？」\n\n会社「200万円で和解しませんか？」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "交渉を続ける", "next": "negotiation_pressure_tactics" }
    ]
  },

  "negotiation_pressure_tactics": {
    "text": "交渉が進む中、会社側が圧力をかけてきた。\n\n人事部長「これ以上騒ぐなら、退職勧告もあり得るぞ」\n\n弁護士「それは脅迫です。記録しておきます」\n\nどう対応する？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": [
      { "text": "脅迫として記録し交渉継続", "next": "settlement_amount_negotiation" },
      { "text": "怖くなって妥協する", "next": "intimidation_success" },
      { "text": "激怒して交渉打ち切り", "next": "lawyer_negotiation_breakdown" }
    ]
  },

  "settlement_amount_negotiation": {
    "text": "脅迫を記録したことで、会社側の態度が軟化した。\n\n会社「...では、300万円ではどうでしょうか？」\n\n弁護士「我々は500万円を提案します」\n\n会社「それは...」\n\nどこまで粘る？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "弁護士と相談して450万円で合意", "next": "company_counteroffer" },
      { "text": "すぐに300万円で受け入れる", "next": "quick_low_settlement" },
      { "text": "絶対に600万円を譲らない", "next": "lawyer_negotiation_breakdown" }
    ]
  },

  "company_counteroffer": {
    "text": "弁護士「450万円で合意しましょう。これ以上は時間がかかるだけです」\n\n会社「...分かりました。400万円+労働環境改善の約束ではどうですか？」\n\n弁護士「十分な条件です。受け入れましょう」\n\n和解契約書が作成された。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "弁護士と一緒に契約書を精査", "next": "settlement_agreement_review" },
      { "text": "ざっと読んで即座に署名", "next": "unfair_contract_terms" },
      { "text": "契約に不満で拒否する", "next": "lawyer_negotiation_breakdown" }
    ]
  },

  "settlement_agreement_review": {
    "text": "弁護士と一緒に和解契約書を細かくチェックした。\n\n弁護士「不利な条項はありません。これで署名して大丈夫です」\n\n「本当に...終わるんですね」\n\n契約書に署名。数日後、400万円が振り込まれた。",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": [
      { "text": "和解金を受け取り新しい人生へ", "next": "receive_settlement_money" }
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

  "lawyer_litigation_threat": {
    "text": "裁判を辞さない姿勢を見せて交渉することにした。\n\n弁護士「これは明らかな労基法違反です。裁判になれば、会社は敗訴します」\n\n会社側弁護士「...了解しました。協議させてください」\n\n数日後、会社からは500万円での和解提案があった。\n\n「やった...」",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "和解を受け入れる", "next": "receive_settlement_money" },
      { "text": "さらに交渉を続ける", "next": "lawyer_demand_full_amount" }
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
    "text": "複数人での申告で力を強めることにした。\n\n同期の他に、後輩も申告に参加することにした。\n\n3人での申告により、労働基準監督署も全社調査に乗り出した。\n\n「複数人だと説得力が違う」\n\nさらに行動を起こすべきか？",
    "background": "/images/bg/labor_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "この機会に労働組合を正式に結成", "next": "form_union_three" },
      { "text": "弁護士を立てて団体交渉", "next": "lawyer_group_negotiation" },
      { "text": "調査結果だけで満足する", "next": "moderate_improvement_ending" }
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
    "text": "段階的改善を受け入れることにした。\n\n第1段階：残業代の適正支払い開始\n第2段階（3ヶ月後）：パワハラ対策の強化\n第3段階（6ヶ月後）：有給取得率80%以上を実現\n\n実際に改善が進み始めた。段階的ですが、確実な前進だ。\n\nこの勢いでさらなる改革を進めるべきか？",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": [
      { "text": "労働組合を結成して全社改革を目指す", "next": "union_member_recruitment" },
      { "text": "この改善で満足する", "next": "moderate_improvement_ending" },
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
    "text": "半年間の交渉が、ついに決着した。\n\n弁護士からの連絡。「和解が成立しました。未払い残業代、慰謝料、合わせて450万円です」\n\n信じられない。銀行口座に振り込まれた和解金を見て、涙が溢れた。\n\n証拠を集め、弁護士と共に戦い続けた日々。会社からの圧力にも屈せず、粘り強く交渉を続けた成果だ。\n\n「専門家の力を借りて、本当に良かった」\n\nこの資金で、新しい会社での新しい人生をスタートできる。もう二度と、ブラック企業で消耗することはない。\n\n弁護士に深く頭を下げた。「ありがとうございました」\n\n【グッドエンド：弁護士による和解成功】",
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
    "text": "労働基準監督署の調査が進んだ。\n\n2週間後、是正勧告が会社に届いた。\n\n「残業代の支払い、パワハラの改善、有給取得の推進」\n\n会社側も改善にようやく動き始めた。\n\nただし、これだけでは不十分かもしれない。さらに行動するべきか？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働組合を結成して本格的に改革する", "next": "union_member_recruitment" },
      { "text": "弁護士に依頼して個人で戦う", "next": "consult_lawyer_first" },
      { "text": "この程度の改善で満足する", "next": "moderate_improvement_ending" }
    ]
  },

  "monitor_company_improvement": {
    "text": "会社の改善状況を監視することにした。\n\n・残業代の支払い: 完全に支払われるように改善\n・パワハラの相談窓口: 設置完了\n・有給取得率: 80%以上に改善\n\nようやく普通の労働環境になり始めた。\n\nしかし、これで本当に十分だろうか？",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": [
      { "text": "さらに組合を全社に拡大して根本改革", "next": "union_member_recruitment" },
      { "text": "この改善で満足して働き続ける", "next": "moderate_improvement_ending" },
      { "text": "改善された経験を活かして転職", "next": "job_search_burnout" }
    ]
  },

  "continue_improved_company": {
    "text": "改善された会社で働き続けることにした。\n\n・月給が5万円アップ（適正な残業代支払い）\n・定時退社が当たり前に\n・有給取得率90%以上\n・ハラスメント防止体制の確立\n・働きやすい職場環境\n\n部長「お前のおかげで、この会社は良くなったな」\n\n「当たり前のことをしただけです」",
    "background": "/images/bg/new_office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": [
      { "text": "この改善に満足する", "next": "moderate_improvement_ending" }
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

  "job_search_burnout": {
    "text": "転職活動を3ヶ月続けた。面接、筆記試験、経歴書の修正...\n\n「疲れた...」\n\nモチベーションが完全に消えてしまった。\n\n「どんな仕事でもいい。今の会社で我慢するしかない」\n\n転職活動を放棄。結局、何も変わらないまま、毎日の残業地獄に戻った。\n\n現状に対する怒りも薄れ、諦めだけが残った。\n\n【バッドエンド：転職活動に疲弊して諦める】",
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

  "union_info_leak": {
    "text": "大人数に声をかけたところ、その中に会社のスパイがいた。\n\n翌日、人事部長に呼び出される。\n\n人事部長「労働組合を作ろうとしてるそうだな？」\n\n「それは...」\n\n「会社の和を乱す行為は許さない。配置転換だ」\n\n組合結成前に、メンバーは全員バラバラの部署に飛ばされてしまった。\n\n【バッドエンド：情報漏洩で組合が潰される】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "union_legal_mistake": {
    "text": "法律の知識がないまま交渉を進めた結果、重大なミスを犯してしまった。\n\n会社側弁護士「あなた方の要求は法的根拠がありません」\n\n「え？でもネットには...」\n\n「それは誤った情報です。むしろ業務妨害で訴えることもできますよ」\n\n法的知識不足で、組合活動は失敗に終わった。\n\n【バッドエンド：法的知識不足で組合活動失敗】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "union_crushed_early": {
    "text": "「労働組合を作りたいんですが...」と会社に相談したところ。\n\n人事部長「労働組合？そんなもの必要ない。うちには社員会があるだろう」\n\n「でも、団体交渉権が...」\n\n「会社の方針に従えないなら、辞めてもらって構わない」\n\n会社に先手を打たれ、組合結成は頓挫。メンバーは脅されて全員が退職を選んだ。\n\n【バッドエンド：会社に先手を打たれて組合潰される】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "informal_group_failure": {
    "text": "正式な登録をせず、非公式なグループとして活動を続けた。\n\n団体交渉を申し入れたが...\n\n会社側弁護士「あなた方は労働組合として登録していません。団体交渉権はありません」\n\n「え？でも3人以上いれば...」\n\n「登録のない任意団体に団体交渉権は認められません」\n\n法的な保護を受けられず、活動は失敗に終わった。\n\n【バッドエンド：非公式グループで団体交渉権なし】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "violent_confrontation": {
    "text": "人事部長の部屋に怒鳴り込んだ。\n\n「組合員を脅すのはやめろ！」\n\n人事部長「何を言ってるんだ？」\n\n怒りで冷静さを失い、人事部長を突き飛ばしてしまった。\n\n翌日、警察から連絡。暴行容疑で被害届が出された。\n\n組合活動どころか、刑事事件に発展してしまった。\n\n【バッドエンド：暴力沙汰で解雇・刑事事件化】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "union_dissolution": {
    "text": "会社の圧力が想像以上に激しく、怖くなってしまった。\n\n後輩「もう無理です...家族もあるし、クビになったら困ります」\n同期「俺も...正直、怖い」\n\n「...分かった。組合、解散しよう」\n\n数日後、3人とも会社の「自主退職プログラム」に応募することに。\n\n会社の圧力に屈した。\n\n【バッドエンド：会社の圧力に屈して組合解散】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "union_split": {
    "text": "「昇進のチャンスなら、受けてもいいよ」\n\n同期「え？本当に？」\n\n「うん、無理に組合に縛る必要はないし」\n\n数日後、同期は組合を脱退し、課長に昇進した。\n\n後輩「僕も...ボーナスの話、断れないです」\n\n組合は分裂し、力を失った。残ったのは俺一人だけ。\n\n【バッドエンド：組合分裂で孤立無援】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "union_internal_conflict": {
    "text": "「裏切り者！お前ら組合の意義を分かってるのか！」\n\n同期「ちょっと待てよ！俺だって悩んでるんだ！」\n後輩「そんな言い方ないじゃないですか！」\n\n感情的な対立がエスカレートし、組合内で大きな亀裂が生じた。\n\nメンバー同士の信頼関係が崩壊し、組合活動は機能不全に。\n\n結局、内部対立で組合は崩壊した。\n\n【バッドエンド：内部対立で組合崩壊】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "weak_union_settlement": {
    "text": "「250万円で合意します...」\n\n弁護士「え？もう少し粘れば全額取れますよ」\n\n「いえ、もうこれでいいです。疲れました」\n\n妥協した和解で、組合の威信は失墜。\n\n他の社員たちからも「結局その程度か」と失望される。\n\n組合は名ばかりの存在となり、会社の労働環境は何も変わらなかった。\n\n【バッドエンド：不利な和解で組合の威信失墜】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "evidence_backfire": {
    "text": "「録音があります！聞いてください！」と交渉の冒頭で切り札を出してしまった。\n\n会社側弁護士「...なるほど。無断録音ですね」\n\n「え？」\n\n「労働組合法の正当な組合活動の範囲を超えた、違法な盗聴行為と見なすこともできます」\n\n逆に会社側に法的攻撃の材料を与えてしまった。\n\n証拠のタイミングを誤り、交渉は決裂した。\n\n【バッドエンド：証拠提示のタイミングミスで逆効果】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "premature_expansion": {
    "text": "勢いに乗って、全社に一気に組合拡大を呼びかけた。\n\n「みんな！労働組合に入ろう！」\n\n管理職たちが一斉に反発。会社は組合潰しの専門コンサルタントを雇い、組織的な対抗策を開始。\n\n準備不足のまま拡大した組合は、会社の反撃に対応できず崩壊。\n\n拙速な拡大が命取りとなった。\n\n【バッドエンド：拙速な拡大で管理職の反撃】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "small_union_success": {
    "text": "3人だけの小さな組合のままで満足することにした。\n\n「俺たちは残業代をもらえたし、これでいいか」\n\n他の部署の労働環境は何も変わらないまま。\n\n後輩が過労で倒れたという噂も聞こえてくるが、もう関わらないことにした。\n\n「結局、自分たちだけ助かればいいのか...」\n\n心のどこかで罪悪感を感じながら、毎日を過ごしている。\n\n【バッドエンド：小さな成功に満足して全社改革を放棄】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "moderate_improvement_ending": {
    "text": "ある程度の改善が見られたので、これで満足することにした。\n\n・残業代は一部支払われるようになった（ただし法定基準には届かず）\n・パワハラは多少マシになった（完全には無くならず）\n・有給は年に数回取れるようになった（取りづらい空気は残る）\n\n半年後、また新しい問題が出てきた。\n根本的な改革をしなかったため、会社の体質は変わらないまま。\n\n「もっと徹底的に戦えば良かったのかな...」\n\n中途半端な改善で妥協してしまった自分に、後悔が残る。\n\n【バッドエンド：中途半端な改善で妥協】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "incompetent_lawyer": {
    "text": "安い弁護士に依頼した。\n\n弁護士「まあ、やってみますよ」\n\n交渉が始まったが、弁護士の知識が明らかに不足している。\n\n会社側弁護士「労働基準法第何条ですか？」\n弁護士「え、と...」\n\n会社にいいようにあしらわれ、結局10万円の和解金で終了。\n\n安物買いの銭失いだった。\n\n【バッドエンド：無能な弁護士で大損失】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "lawyer_refuses_case": {
    "text": "弁護士に曖昧な説明だけをした。\n\n弁護士「...具体的な証拠はありますか？」\n\n「いえ、まだ集めてないんですが...」\n\n弁護士「申し訳ありませんが、証拠がない案件は受任できません」\n\n「え？」\n\n「勝訴の見込みが低いですし、費用倒れになる可能性が高いです」\n\n弁護士に断られてしまった。\n\n【バッドエンド：準備不足で弁護士に受任拒否される】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "lawyer_initial_consultation_bad": {
    "text": "知人の紹介で適当に決めた弁護士に相談した。\n\n弁護士「ふむ、労働問題ですか。専門外なんですけどね」\n\n「え？でも紹介されて...」\n\n「まあ、やれるだけやってみますよ」\n\n専門外の弁護士では、会社側に太刀打ちできず、交渉は失敗。\n\n弁護士費用だけ取られて終わった。\n\n【バッドエンド：専門外の弁護士で失敗】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "client_lawyer_conflict": {
    "text": "弁護士の戦略に納得できず、自分の意見を強く主張した。\n\n「私は絶対に全額請求したいんです！」\n\n弁護士「しかし、現実的には...」\n\n「弁護士なら勝たせてください！それが仕事でしょ！」\n\n弁護士「...申し訳ありませんが、この案件から降ります」\n\n弁護士との関係が破綻し、契約解除。\n\n新しい弁護士を探す羽目に。\n\n【バッドエンド：弁護士と対立して契約解除】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "intimidation_success": {
    "text": "会社の脅迫に怖くなってしまった。\n\n人事部長「退職勧告だぞ？家族は大丈夫か？」\n\n「...分かりました。和解します」\n\n弁護士「ちょっと待ってください！」\n\n「もういいんです...」\n\n結局、50万円の低額和解で終了。\n\n会社の脅迫に屈してしまった。\n\n【バッドエンド：会社の脅迫に屈して低額和解】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "quick_low_settlement": {
    "text": "「早く終わらせたいので、この金額で合意します」\n\n弁護士「え？もっと粘れば倍以上取れますよ」\n\n「いえ、もう疲れました...」\n\n結局、100万円の低額和解で終了。\n\n弁護士「もったいない...」\n\n本来なら400万円は取れたはずなのに、安易に妥協してしまった。\n\n【バッドエンド：安易な妥協で大幅に損をする】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

  "unfair_contract_terms": {
    "text": "和解契約書をざっと読んで署名した。\n\n弁護士「ちょっと待って、まだ確認が...」\n\n「もう大丈夫です。早く終わらせたいので」\n\n数日後、和解金が振り込まれたが...\n\n弁護士「契約書に『今後一切の請求権を放棄する』という条項が...これ、追加の慰謝料請求ができませんよ」\n\n「え...」\n\n不利な条項を見落とし、後悔が残る和解となった。\n\n【バッドエンド：契約書の不利な条項を見落とす】",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },

}