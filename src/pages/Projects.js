import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="project1" 
            title="プロジェクト1" 
            thumbnail="/images/project1.png"
          >
            プロジェクト1の説明文がここに入ります
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="project2"
            title="プロジェクト2"
            thumbnail="/images/project2.png"
          >
            プロジェクト2の説明文がここに入ります
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="project3"
            title="プロジェクト3"
            thumbnail="/images/project3.png"
          >
            プロジェクト3の説明文がここに入ります
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
            id="project4" 
            thumbnail="/images/project4.png" 
            title="プロジェクト4"
          >
            プロジェクト4の説明文がここに入ります
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          その他
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem 
            id="project5" 
            thumbnail="/images/project5.png" 
            title="プロジェクト5"
          >
            プロジェクト5の説明文がここに入ります
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="project6"
            thumbnail="/images/project6.png"
            title="プロジェクト6"
          >
            プロジェクト6の説明文がここに入ります
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
