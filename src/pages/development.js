import { Center, Container, Heading, Spinner } from '@chakra-ui/react'
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

        // エラー時はモックデータを表示
        setProjects([
          {
            id: 'dev1',
            title: '開発プロジェクト1',
            thumbnail: '/images/no-image.png',
            description: '開発プロジェクト1の説明文がここに入ります'
          },
          {
            id: 'dev2',
            title: '開発プロジェクト2',
            thumbnail: '/images/no-image.png',
            description: '開発プロジェクト2の説明文がここに入ります'
          }
        ])
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
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            開発活動
          </Heading>
          <Center py={10}>
            <Spinner size="xl" />
          </Center>
        </Container>
      </Layout>
    )
  }

  // エラーがある場合は表示
  if (error) {
    return (
      <Layout title="Development">
        <Container>
          <Heading as="h3" fontSize={20} mb={4} color="red.500">
            データの取得に失敗しました
          </Heading>
          <p>{error}</p>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout title="Development">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          開発活動
        </Heading>
        <CardList items={projects} delay={0.3} />
      </Container>
    </Layout>
  )
}

export default Development
export { getServerSideProps } from '../components/chakra'
