import { getDevelopmentProjects } from '../../lib/notion'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Notionからプロジェクトを取得
    const notionProjects = await getDevelopmentProjects()

    // 各プロジェクトにモックのタグとコンテンツを追加
    const projectsWithMockContent = notionProjects.map((project, index) => ({
      ...project,
      tags: [
        { name: 'React', color: 'cyan' },
        { name: 'Next.js', color: 'blue' },
        { name: 'TypeScript', color: 'blue' }
      ],
      content: `# ${project.title}

## プロジェクト概要

このプロジェクトは、モダンな技術スタックを使用して開発されました。

## 主な機能

- 機能1: ユーザー認証システム
- 機能2: データ管理機能
- 機能3: レスポンシブデザイン

## 使用技術

- React
- Next.js
- TypeScript
- Chakra UI

## 成果

このプロジェクトを通じて、以下のスキルを習得しました。

- モダンなフロントエンド開発
- コンポーネント設計
- 状態管理`
    }))

    res.status(200).json({ projects: projectsWithMockContent })
  } catch (error) {
    console.error('Development API error:', error)
    res.status(500).json({ error: error.message })
  }
}
