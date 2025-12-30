import { useEffect, useState } from 'react'
import CardList from '../components/card-list'
import Layout from '../components/layouts/article'

const Development = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/development')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'データの取得に失敗しました')
        }

        setProjects(data.projects)
      } catch (err) {
        console.error('Development fetch error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // ローディング中の表示
  if (loading) {
    return (
      <Layout title="Development">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl mb-4">制作物</h3>
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-500"></div>
          </div>
        </div>
      </Layout>
    )
  }

  // エラーがある場合は表示
  if (error) {
    return (
      <Layout title="Development">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl mb-4 text-red-500">
            データの取得に失敗しました
          </h3>
          <p>{error}</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Development">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-xl mb-4">開発活動</h3>
        <CardList items={projects} delay={0.3} apiEndpoint="/api/development" />
      </div>
    </Layout>
  )
}

export default Development
