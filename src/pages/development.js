import { Container, Heading } from '@chakra-ui/react'
import CardList from '../components/card-list'
import Layout from '../components/layouts/article'
import { getDevelopmentProjects } from '../lib/notion'

const Development = ({ projects, error }) => {
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

// サーバーサイドでNotionからデータを取得
export async function getServerSideProps({ req }) {
  try {
    const projects = await getDevelopmentProjects()

    return {
      props: {
        cookies: req.headers.cookie ?? '',
        projects,
        error: null
      }
    }
  } catch (error) {
    console.error('Development page error:', error)

    // エラー時はモックデータを返す
    const mockProjects = [
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
    ]

    return {
      props: {
        cookies: req.headers.cookie ?? '',
        projects: mockProjects,
        error: error.message || 'データの取得に失敗しました'
      }
    }
  }
}

export default Development
