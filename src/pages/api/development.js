import { getDevelopmentProjects } from '../../lib/notion'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const projects = await getDevelopmentProjects()
    res.status(200).json({ projects })
  } catch (error) {
    console.error('Development API error:', error)
    res.status(500).json({ error: error.message })
  }
}
