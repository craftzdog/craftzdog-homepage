import { getProjects } from '../../lib/notion'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const projects = await getProjects()
    res.status(200).json({ projects })
  } catch (error) {
    console.error('Projects API error:', error)
    res.status(500).json({ error: error.message })
  }
}
