import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbDRM from '../public/images/projects/thumb_drm.webp'
import thumbLightGBM from '../public/images/projects/LightGBM_logo_black_text.webp'
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
        Collaborations (as a contributor)
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="lightgbm"
            title="LightGBM"
            thumbnail={thumbLightGBM}
            url="https://github.com/microsoft/LightGBM"
          >
            LightGBM is a fast, distributed, high performance gradient boosting
            (GBT, GBDT, GBRT, GBM or MART) framework based on decision tree
            algorithms, used for ranking, classification and many other machine
            learning tasks.
          </ProjectGridItem>
          {/* <ProjectGridItem
            id="drm"
            title="Deep Ritz Method for PDE solving"
            thumbnail={thumbDRM}
            url="https://github.com/JiantingFeng/Deep-Ritz-PDE-Solver"
          >
            A PyTorch based package for solving partial differential equation,
            which is efficient for high dimensional equations.
          </ProjectGridItem> */}
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
