## 補助金情報収集システム

デジタル庁のJグランツAPIから補助金情報を自動取得し、Azure Blob Storageに保存するシステム。

**主な機能:**

- 補助金一覧と詳細情報の自動取得
- 重複チェック機能（既存データとの差分取得）
- PDFファイルなど重いデータを除外して軽量化
- Azure Functionsによる定期実行

**技術スタック:**

- Python
- Azure Functions
- Azure Blob Storage
- REST API

GitHub: https://github.com/Minimalist-00/get-subsidy-api
