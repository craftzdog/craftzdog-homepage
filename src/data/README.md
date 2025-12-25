# ローカルデータ管理ガイド

このプロジェクトでは、NotionAPIの代わりにローカルのJSONとMarkdownファイルでプロジェクトデータを管理しています。

## ディレクトリ構造

```
src/data/
├── projects.json              # プロジェクト一覧データ
├── development.json           # 開発活動一覧データ
└── content/
    ├── projects/              # プロジェクトの詳細コンテンツ（Markdown）
    │   ├── project-1.md
    │   └── project-2.md
    └── development/           # 開発活動の詳細コンテンツ（Markdown）
        ├── dev-1.md
        └── dev-2.md
```

## データの追加・編集方法

### 1. 新しいプロジェクトを追加する

#### Step 1: JSONファイルにメタデータを追加

`src/data/projects.json` または `src/data/development.json` に新しいエントリを追加します：

```json
{
  "id": "project-3",
  "title": "新しいプロジェクト",
  "thumbnail": "/images/project-3.png",
  "description": "プロジェクトの簡単な説明",
  "contentFile": "projects/project-3.md",
  "tags": [
    { "name": "タグ1", "color": "blue" },
    { "name": "タグ2", "color": "green" }
  ]
}
```

**フィールド説明:**

- `id`: プロジェクトの一意な識別子（英数字とハイフン）
- `title`: プロジェクトのタイトル
- `thumbnail`: サムネイル画像のパス（`/images/`配下に配置）
- `description`: カードに表示される簡単な説明
- `contentFile`: 詳細コンテンツのMarkdownファイルパス
- `tags`: タグの配列（オプション）
  - `name`: タグ名
  - `color`: タグの色（blue, green, purple, cyan, orange, red, pink, teal など）

#### Step 2: Markdownファイルを作成

`src/data/content/projects/project-3.md` を作成し、詳細コンテンツを記述します：

```markdown
# プロジェクトタイトル

## 概要

プロジェクトの概要を記述します。

## 目的

- 目的1
- 目的2
- 目的3

## 詳細

詳細な説明をここに記述します。

### サブセクション

さらに詳しい内容。

## まとめ

プロジェクトのまとめ。
```

**Markdownで使用できる要素:**

- 見出し（`#`, `##`, `###`）
- リスト（箇条書き、番号付き）
- 段落
- リンク（`[テキスト](URL)`）
- 画像（`![代替テキスト](画像パス)`）
- コードブロック
- 引用

### 2. 既存のプロジェクトを編集する

#### メタデータの編集

`src/data/projects.json` または `src/data/development.json` の該当エントリを編集します。

#### 詳細コンテンツの編集

対応するMarkdownファイル（例: `src/data/content/projects/project-1.md`）を編集します。

### 3. プロジェクトを削除する

1. JSONファイルから該当エントリを削除
2. 対応するMarkdownファイルを削除（オプション）

## 画像の管理

サムネイル画像は `public/images/` ディレクトリに配置します：

```
public/
└── images/
    ├── no-image.png          # デフォルト画像
    ├── project-1.png
    ├── project-2.png
    └── ...
```

JSONファイルでは `/images/project-1.png` のように参照します。

## タグの色一覧

Chakra UIのカラースキームを使用できます：

- `blue` - 青
- `green` - 緑
- `purple` - 紫
- `cyan` - シアン
- `orange` - オレンジ
- `red` - 赤
- `pink` - ピンク
- `teal` - ティール
- `gray` - グレー

## 注意事項

- JSONファイルは正しいJSON形式で記述してください（カンマの位置、引用符など）
- `id`は各プロジェクト内で一意である必要があります
- `contentFile`のパスは `src/data/content/` からの相対パスで指定します
- Markdownファイルは UTF-8 エンコーディングで保存してください

## トラブルシューティング

### ページが表示されない

- JSONファイルの構文エラーをチェック
- ブラウザのコンソールでエラーメッセージを確認

### モーダルにコンテンツが表示されない

- `contentFile`のパスが正しいか確認
- Markdownファイルが存在するか確認
- ファイルのエンコーディングがUTF-8か確認

### 画像が表示されない

- 画像ファイルが `public/images/` に存在するか確認
- JSONファイルのパスが `/images/` で始まっているか確認
