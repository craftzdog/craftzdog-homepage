import { Container, Divider, Heading } from '@chakra-ui/react'
import CardList from '../components/card-list'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { getProjects } from '../lib/notion'

const Projects = ({ mainProjects, otherProjects, error }) => {
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

// サーバーサイドでNotionからデータを取得
export async function getServerSideProps({ req }) {
  try {
    const projects = await getProjects()

    // プロジェクトを2つのグループに分ける
    // 最初の4つを「研究室での活動」、残りを「その他の活動」とする
    const mainProjects = projects.slice(0, 4)
    const otherProjects = projects.slice(4)

    return {
      props: {
        cookies: req.headers.cookie ?? '',
        mainProjects,
        otherProjects,
        error: null
      }
    }
  } catch (error) {
    console.error('Projects page error:', error)

    // エラー時はモックデータを返す
    const mockMainProjects = [
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
    ]

    return {
      props: {
        cookies: req.headers.cookie ?? '',
        mainProjects: mockMainProjects,
        otherProjects: [],
        error: error.message || 'データの取得に失敗しました'
      }
    }
  }
}

export default Projects
