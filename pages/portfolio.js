import { Container, Heading, SimpleGrid, LinkBox } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTgAnalyzer from '../public/images/works/tg.jpg'
import thumbRoadTraffic from '../public/images/works/road.jpg'
import thumbBgRem from '../public/images/works/bgrem.jpg'
import thumbEmotion from '../public/images/works/emotion.jpg'

const Works = () => (
  <Layout title="Pet projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Pet projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
        <LinkBox
          as={NextLink}
          href="https://github.com/german-leontiev/tg_chat_analyser"
          scroll={false}
          cursor="pointer"
        >
          <WorkGridItem title="Telegram chat analyzer" thumbnail={thumbTgAnalyzer}>
            An application for analyzing the portrait of telegram chat users based on their message history
          </WorkGridItem>
        </LinkBox>
        </Section>

        <Section>
        <LinkBox
          as={NextLink}
          href="https://github.com/german-leontiev/traffic_counting"
          scroll={false}
          cursor="pointer"
        >
          <WorkGridItem title="Traffic counter" thumbnail={thumbRoadTraffic}>
            This project was created to track traffic on the roads. With it, you can analyze and predict traffic jams, as well as build optimal routes.
          </WorkGridItem>
        </LinkBox>
        </Section>

        <Section>
        <LinkBox
          as={NextLink}
          href="https://github.com/german-leontiev/bg-rem"
          scroll={false}
          cursor="pointer"
        >
          <WorkGridItem title="Background removal web app" thumbnail={thumbBgRem}>
            Simple web app with minimalistic web interface.
          </WorkGridItem>
        </LinkBox>
        </Section>

        <Section>
        <LinkBox
          as={NextLink}
          href="https://github.com/german-leontiev/emotion_ai"
          scroll={false}
          cursor="pointer"
        >
          <WorkGridItem title="Emotions classification net" thumbnail={thumbEmotion}>
            I suggest using this solution in companies with Face ID at checkpoints to constantly be aware of the emotions of employees.
          </WorkGridItem>
        </LinkBox>
        </Section>

      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
