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
import { useRouter } from 'next/router'
import * as en from '../locales/en'
import * as es from '../locales/es'
const Works = () => {
  const router = useRouter()
  const { locale } = router
  const tAux = locale === 'en' ? en : es
  const t = tAux.work

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t.work}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="pideme" title="Pídeme" thumbnail={thumbInkdrop}>
              {t.pidemeText}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="media" title="Media" thumbnail={thumbWalknote}>
              {t.mediaText}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            {t.collaborations}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="solidary"
              thumbnail={thumbModeTokyo}
              title={t.landing}
            >
              {t.landingText}
            </WorkGridItem>
          </Section>
          <Section delay={0.3}></Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            {t.landingText}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="avocadoshop"
              thumbnail={thumbPichu2}
              title="Avocado shop"
            >
              {t.textAvocado}
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="weatherapp"
              thumbnail={thumbFreeDBTagger}
              title="Weatherapp"
            >
              {t.textWeatherApp}
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="cryptoTracker"
              thumbnail={thumbAmembo}
              title="CryptoTracker"
            >
              {t.textCryptoTracker}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="scrapper"
              thumbnail={thumbModeTokyo}
              title="Scrapper JS"
            >
              {t.textScrapper}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
