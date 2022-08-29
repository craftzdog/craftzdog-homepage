import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbDRM from '../public/images/projects/thumb_drm.png'
const Projects = () => (
  <Layout title="Works">
    <Heading as="h1" mt={10} font-size={32}>
      Projects
    </Heading>
    <Container>
      <Heading as="h3" fontSize={20} my={4}>
        Math
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="drm"
            title="Deep Ritz Method for PDE solving"
            thumbnail={thumbDRM}
            url="https://github.com/JiantingFeng/Deep-Ritz-PDE-Solver"
          >
            A PyTorch based package for solving partial differential equation,
            which is efficient for high dimensional equations.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Divider />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
