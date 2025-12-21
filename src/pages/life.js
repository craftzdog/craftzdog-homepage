import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Life = () => (
  <Layout title="Life">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Life
      </Heading>
      {/* ここにLifeページのコンテンツを追加 */}
    </Container>
  </Layout>
)

export default Life
export { getServerSideProps } from '../components/chakra'
