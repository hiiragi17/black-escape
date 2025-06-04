export const storyData = {
  "start": {
    "text": "ここは片田舎のとある会社。どうしようもない上司と訳のわからない人しかいない、変人の巣窟。給料は安く、残業時間は多い。こんな会社辞めてやりたい。どうしますか？",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "出社する", "next": "overwork" },
      { "text": "逃げる", "next": "freedom" }
    ]
  },
  "overwork": {
    "text": "死ぬほど働かされてしまった。バッドエンド。",
    "background": "/images/bg/bad_end_office.jpg",
    "bgm": "/bgm/d6.mp3",
    "choices": []
  },
  "freedom": {
    "text": "あなたは逃げ切り、自由になった。Trueエンド。",
    "background": "/images/bg/beach.jpg",
    "bgm": "/bgm/n99.mp3",
    "choices": []
  }
} as const;

export type StoryData = typeof storyData;