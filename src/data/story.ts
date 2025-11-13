export const storyData = {
  "start": {
    "text": "ここは片田舎のとある会社。どうしようもない上司と訳のわからない人しかいない、変人の巣窟。給料は安く、残業時間は多い。こんな会社辞めてやりたい。どうしますか？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "冷静に考えて行動する", "next": "decision" },
      { "text": "今すぐ逃げ出す！", "next": "impulse-escape" }
    ]
  },
  "decision": {
    "text": "一旦冷静になって考えてみた。このまま働き続けるのは無理だ。でも、どうやってこの状況から抜け出そう？ 転職活動を始めるか、それとも会社の問題を直接解決するか、もう少し様子を見るか...",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "転職活動を始める", "next": "job-hunting" },
      { "text": "上司に直談判する", "next": "confrontation" },
      { "text": "もう少し我慢してみる", "next": "endurance" }
    ]
  },
  "job-hunting": {
    "text": "転職サイトに登録し、履歴書を準備した。いくつか求人を見つけたが、焦って決めるべきか、それとも慎重に選ぶべきか。今の会社の残業はきついが、次の会社選びを間違えたら元も子もない...",
    "background": "/images/bg/night_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "慎重に企業を選んで応募する", "next": "freedom-good" },
      { "text": "とにかく早く辞めたい、すぐ決める", "next": "hasty-job" }
    ]
  },
  "confrontation": {
    "text": "意を決して上司のもとへ向かった。この労働環境は明らかにおかしい。どう伝えるべきか？ 感情的になるべきか、それとも外部の力を借りるべきか...",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "労働基準監督署に相談する", "next": "reform-good" },
      { "text": "感情的に訴える", "next": "fired-bad" }
    ]
  },
  "endurance": {
    "text": "もう少しだけ我慢してみることにした。しかし、毎日の残業は続き、体も心も限界に近づいている。このまま頑張り続けるか、それとも適度に手を抜いて生き延びるか...",
    "background": "/images/bg/night_office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "限界まで頑張り続ける", "next": "overwork-bad" },
      { "text": "適度に手を抜いて生き延びる", "next": "survival-normal" }
    ]
  },
  "impulse-escape": {
    "text": "もう無理だ！ 鞄を掴んで会社を飛び出した。外の空気が美味しい。でも...貯金はあまりない。このまま行くか、それとも一度立ち止まって計画を立て直すか...",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "一度立ち止まって計画を立て直す", "next": "jobless-normal" },
      { "text": "このまま逃げ続ける", "next": "regret-bad" }
    ]
  },
  "hasty-job": {
    "text": "焦って決めた転職先。面接もそこそこに内定をもらい、すぐに入社した。しかし、新しい会社も残業が多く、給料も期待したほどではなかった。でも、前の会社よりはマシ...かな？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": []
  },
  "freedom-good": {
    "text": "慎重に企業研究を重ね、面接でしっかりと質問し、納得のいく会社に転職できた！ 残業も少なく、給料も上がり、人間関係も良好だ。あの地獄のような日々から、ついに自由を手に入れた！",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },
  "reform-good": {
    "text": "労働基準監督署に相談し、詳細な記録と共に訴えた。調査が入り、会社は是正勧告を受けた。残業時間は大幅に削減され、未払いの残業代も支払われた。上司も異動になり、職場環境は劇的に改善された。戦って勝ち取った勝利だ！",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  },
  "survival-normal": {
    "text": "適度に手を抜き、定時で帰れる日は帰り、無理な仕事は断るようになった。上司からは文句を言われるが、倒れるよりはマシだ。給料は安いが、なんとか生活できている。これも一つの生き方かもしれない...",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": []
  },
  "jobless-normal": {
    "text": "一度立ち止まって、じっくりと今後のキャリアを考えることにした。貯金を切り崩しながらの生活は不安だが、あの地獄のような日々からは解放された。焦らず、自分に合った仕事を探そう。時間はまだある。",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": []
  },
  "overwork-bad": {
    "text": "限界まで頑張り続けた結果、ある日突然倒れてしまった。病院のベッドの上で、「あの時、もっと早く行動していれば...」と後悔する。体を壊してしまっては、何もかも遅い。",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },
  "regret-bad": {
    "text": "何の計画もなく会社を辞めてしまった。最初は開放感があったが、すぐに貯金は底をつき、次の仕事も見つからない。家賃も払えなくなり、実家に戻ることになった。あの時、もっと冷静に考えていれば...",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },
  "fired-bad": {
    "text": "感情的に上司に訴えた結果、逆に目をつけられてしまった。些細なミスを理由に解雇通告を受けた。不当解雇だと思うが、戦う気力も残っていない。無計画な行動は、最悪の結果を招いてしまった...",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  }
} as const;

export type StoryData = typeof storyData;