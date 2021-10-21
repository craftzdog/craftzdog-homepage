import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'

import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'

import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="pideme" title="Pídeme" thumbnail={thumbInkdrop}>
            Platform to order and pay for orders from the table and get them to
            the kitchen.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="media" title="Media" thumbnail={thumbWalknote}>
            Telemedicine platform with AI-based diagnostics
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="solidary"
            thumbnail={thumbModeTokyo}
            title="Landing for help children in Hospital"
          >
            Landing to help raise money for children in hospital
          </WorkGridItem>
        </Section>
        <Section delay={0.3}></Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Learning projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="avocadoshop"
            thumbnail={thumbPichu2}
            title="Avocado shop"
          >
            Shop to learn nextjs
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="weatherapp"
            thumbnail={thumbFreeDBTagger}
            title="Weatherapp"
          >
            Application to know the weather using redux
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="cryptoTracker"
            thumbnail={thumbAmembo}
            title="CryptoTracker"
          >
            App to list the price of cryptocurrencies in react Native
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="scrapper"
            thumbnail={thumbModeTokyo}
            title="Scrapper JS"
          >
            Code to access my CrossFit classes when the class is full
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
