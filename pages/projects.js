import { Container, Heading, SimpleGrid, Divider, Stack, Link, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbScraft from '../public/images/projects/scraft-01.png'
import thumbOrbitron from '../public/images/projects/orbitron-01.png'
import thumbTutor from '../public/images/projects/tutor-01.png'
import thumbKeywordPrice from '../public/images/projects/keywordprice-01.png'
import thumbFashion from '../public/images/projects/fashionhiernet-01.png'
import thumbHistCNN from '../public/images/projects/histcnn-02.png'

const Projects = () => (
  <Layout title="Projects">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Heading as="h3" fontSize={30}>
          Projects
        </Heading>
        {/* <Link href="/files/resume.pdf" target="_blank">
          <Button colorScheme="teal" size='md' variant='solid'>
            See as pdf
          </Button>
        </Link> */}
      </Stack>

      <Section>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          long term projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="scraft" title="scraft" thumbnail={thumbScraft}>
            An essay-planning app with AI
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="orbitron"
            title="orbitron"
            thumbnail={thumbOrbitron}
          >
            Spherical wheeled vehicle & control algorithm
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          side projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="fashion-hiernet" thumbnail={thumbFashion} title="Fashion HierNet">
            Hierarchical Image Classification of Fashion commerce using EfficientNet
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="tutorscheduler" thumbnail={thumbTutor} title="Kent Tutor Scheduler">
            A peer tutor scheduling web service for Kent School
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="keywordprice"
            thumbnail={thumbKeywordPrice}
            title="Keyword/Price Analysis Tool"
          >
            keyword extraction tool/API to assist small businesses to detect counterfeit products on Korean E-commerce websites
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="histcnn"
            thumbnail={thumbHistCNN}
            title="Histogram Layer for Texture Classification"
          >
            hybrid model that incorporates a stackable, localized histogram layer on convolutional neural network (CNN) for texture analysis applications.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          old hobby projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <WorkGridItem id="turret" thumbnail={thumbFashion} title="T-33 Arduino Turret">
            Arduino airsoft turret controlled by C# Winforms application
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="chisktale"
            thumbnail={thumbFashion}
            title="freeDBTagger"
          >
            An Undertale fangame made with C#
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
