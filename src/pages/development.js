import { Container, Heading } from '@chakra-ui/react'
import CardList from '../components/card-list'
import Layout from '../components/layouts/article'

// 開発プロジェクトのデータ
const developmentProjects = [
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

const Development = () => (
  <Layout title="Development">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        開発活動
      </Heading>

      <CardList items={developmentProjects} delay={0} />
    </Container>
  </Layout>
)

export default Development
export { getServerSideProps } from '../components/chakra'
