import { useEffect, useState } from 'react'
import CardList from '../components/card-list'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Projects = () => {
  const [mainProjects, setMainProjects] = useState([])
  const [otherProjects, setOtherProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'データの取得に失敗しました')
        }

        // プロジェクトを2つのグループに分ける
        const main = data.projects.slice(0, 4)
        const other = data.projects.slice(4)

        setMainProjects(main)
        setOtherProjects(other)
      } catch (err) {
        console.error('Projects fetch error:', err)
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
      <Layout title="Projects">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl mb-4">研究室での活動</h3>
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
      <Layout title="Projects">
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
    <Layout title="Projects">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-xl mb-4">研究室での活動</h3>

        <CardList items={mainProjects} delay={0} apiEndpoint="/api/projects" />

        <Section delay={0.2}>
          <hr className="my-6 border-gray-300 dark:border-gray-600" />

          <h3 className="text-xl mb-4">その他の活動</h3>
        </Section>

        <CardList
          items={otherProjects}
          delay={0.3}
          apiEndpoint="/api/projects"
        />
      </div>
    </Layout>
  )
}

export default Projects
