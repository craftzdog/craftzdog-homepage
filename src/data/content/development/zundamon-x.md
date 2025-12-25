## プレゼン資料

技育CAMPキャラバン@福岡 での発表資料

[福岡ハッカソン\_発表スライド（コンパクト））](https://www.canva.com/design/DAFmMDlxKaY/R9pbqFA6zAZ6M1xkFoWZ7Q/view?utm_content=DAFmMDlxKaY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)

技育CAMPアドバンス での発表資料

[技育CAMPアドバンス\_発表スライド](https://www.canva.com/design/DAFtFivkY1c/IHbW3OY9jkSFDOk-5ie-5A/view?utm_content=DAFtFivkY1c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)

## アプリ概要

![概要1](/images/development/zundamon-x/4.jpg)

![概要2](/images/development/zundamon-x/5.jpg)

![概要3](/images/development/zundamon-x/9.jpg)

![概要4](/images/development/zundamon-x/10.jpg)

## アピールポイント

技術的な挑戦

- 初めてのChrome拡張開発
  - Reactと要領が全然違うせいで、書き方を1から学んだ
- JavaScript → TypeScriptでのコーディング
- YouTubeのAPIを使用
- 音声生成に間に合わせるために、フロントでの処理を工夫

## 大変だったこと/取り組んだこと

- chrome拡張という制約にずっと苦しめられた。
  - **普段のReactの書き方とは大きく違う**
  - ポップアップとそれ以外の扱いの違い
- 動画の再生に対して、音声の生成が間に合わないという事態で何度もアルゴリズムを練り直して最適化をした
- YouTubeの字幕取得、再生時刻の取得など…様々なアプローチが必要であった
- YouTube公式から、AIの自動吹き替えが2024年に実装されるというのを見たため、「可愛さ」を売りにブラッシュアップを行った
- 初のTypescript、様々なAPIの使用、状態管理にRecoilを使用したなどの挑戦

## 実際の画面

![実際の画面](/images/development/zundamon-x/Untitled.png)

## 今後のアップデート予定

### 改良

- 並列化に対応
- リファクタリング
- 高負荷に耐えられるようなバックの設計

### ずんだもん

- ずんだもん 語尾「なのだ」
  - chatGPTを通す
- ずんだもん 表情
  - 文脈から表情を変える
- パラメータを好きにいじれるようにしたい
  - ピッチ、速度、イントネーション、声のタイプ
- Y軸スケールをいじって、縦に動いてもらう

- VoiceVoxの他のキャラクターにしゃべってもらう
- 原神のキャラクターなどに喋ってもらう
- 精度の良い翻訳をする
  - 何らかの翻訳APIを通す

- edge や firefox (safari) にも対応させる
- ブラウザ外に出せるようにするなど

- 広告に対応

### UI/UX

- content
  - レシポンシブに対応（ブラウザ小さくなったらずんだもんだけ、非表示とか）
  - ユーザーが動かしたりサイズ変更できるようにする（jsやライブラリが必要か）
- 字幕の表示
- 翻訳後の言語を選択可能にする
  - 多言語 → 多言語に対応させる
- 音声を選択可能にする
