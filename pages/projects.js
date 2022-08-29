import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbDRM from '../public/images/projects/thumb_drm.webp'
const Projects = () => (
  <Layout title="Projects">
    <Heading as="h1" mt={10} font-size={32}>
      Projects
    </Heading>
    <Divider />
    <Container>
      <Heading as="h3" fontSize={20} my={4}>
        Indie
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="drm"
            title="Deep Ritz Method for PDE solving"
            thumbnail={thumbDRM}
            url="https://github.com/JiantingFeng/Deep-Ritz-PDE-Solver"
          >
            A PyTorch based package for solving partial differential equation,
            which is efficient for high dimensional equations.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
      <Divider />
      <Heading as="h3" fontSize={20} my={4}>
        Collaborations
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          {/* <ProjectGridItem
            id="drm"
            title="Deep Ritz Method for PDE solving"
            thumbnail={thumbDRM}
            url="https://github.com/JiantingFeng/Deep-Ritz-PDE-Solver"
          >
            A PyTorch based package for solving partial differential equation,
            which is efficient for high dimensional equations.
          </ProjectGridItem> */}
          TBD
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
