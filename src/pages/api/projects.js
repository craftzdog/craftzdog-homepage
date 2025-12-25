import { getPageWithContent, getProjects } from '../../lib/local-data'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { pageId } = req.query

    // pageIdが指定されている場合は、そのページの詳細を取得
    if (pageId) {
      const pageData = getPageWithContent(pageId, 'projects.json')
      if (!pageData) {
        return res.status(404).json({ error: 'Project not found' })
      }
      return res.status(200).json(pageData)
    }

    // pageIdが指定されていない場合は、プロジェクト一覧を取得
    const projects = getProjects()

    res.status(200).json({ projects })
  } catch (error) {
    console.error('Projects API error:', error)
    res.status(500).json({ error: error.message })
  }
}
