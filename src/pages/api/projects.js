import { getProjects } from '../../lib/notion'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Notionからプロジェクトを取得
    const notionProjects = await getProjects()

    // 各プロジェクトにモックのタグとコンテンツを追加
    const projectsWithMockContent = notionProjects.map((project, index) => ({
      ...project,
      tags: [
        { name: 'Python', color: 'yellow' },
        { name: 'Machine Learning', color: 'purple' },
        { name: 'Research', color: 'green' }
      ],
      content: `# ${project.title}

## 研究概要

この研究プロジェクトでは、最新の機械学習技術を活用しました。

## 研究手法

- 手法1: データ収集と前処理
- 手法2: モデルの設計と実装
- 手法3: 実験と評価

## 使用技術

- Python
- TensorFlow / PyTorch
- Jupyter Notebook
- NumPy / Pandas

## 成果

この研究を通じて、以下の成果を得ました。

- 学会発表
- 論文執筆
- 技術的知見の獲得`
    }))

    res.status(200).json({ projects: projectsWithMockContent })
  } catch (error) {
    console.error('Projects API error:', error)
    res.status(500).json({ error: error.message })
  }
}
