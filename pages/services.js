import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbAIWebDev from '../public/images/contents/ai-web-development.jpg'
import thumbMlTrain from '../public/images/contents/ml-model-training.jpg'
import thumbAIConsult from '../public/images/contents/ai-consult.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Services
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <GridItem
            title="AI web apps development"
            thumbnail={thumbAIWebDev}
            href="mailto:german_leontiev@mail.ru&subject=AI web apps development"
          />
          <GridItem
            title="ML-model training"
            thumbnail={thumbMlTrain}
            href="mailto:german_leontiev@mail.ru&subject=ML-model training"
          />
          <GridItem
            title="Consulting"
            thumbnail={thumbAIConsult}
            href="mailto:german_leontiev@mail.ru&subject=AI Consulting"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
