import { Center, Container, Divider, Heading, Spinner } from '@chakra-ui/react'
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

        // エラー時はモックデータを表示
        setMainProjects([
          {
            id: 'project1',
            title: 'プロジェクト1',
            thumbnail: '/images/project1.png',
            description: 'プロジェクト1の説明文がここに入ります'
          },
          {
            id: 'project2',
            title: 'プロジェクト2',
            thumbnail: '/images/project2.png',
            description: 'プロジェクト2の説明文がここに入ります'
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
      <Layout title="Projects">
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            研究室での活動
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
      <Layout title="Projects">
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
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          研究室での活動
        </Heading>

        <CardList items={mainProjects} delay={0} />

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            その他の活動
          </Heading>
        </Section>

        <CardList items={otherProjects} delay={0.3} />
      </Container>
    </Layout>
  )
}

export default Projects
export { getServerSideProps } from '../components/chakra'
