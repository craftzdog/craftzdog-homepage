import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const AboutMe = () => (
  <Layout title="About Me">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        About Me
      </Heading>
      {/* ここにAbout Meページのコンテンツを追加 */}
    </Container>
  </Layout>
)

export default AboutMe
export { getServerSideProps } from '../components/chakra'
