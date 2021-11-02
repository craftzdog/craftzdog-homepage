import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'

import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import defaultImage from '../public/images/demo-image-default.jpg'

import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

import Lang from '../lib/utils'
const Works = () => {
  const t = Lang('work')
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t.work}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="pideme" title="Pídeme" thumbnail={defaultImage}>
              {t.textPideme}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="media" title="Media" thumbnail={defaultImage}>
              {t.textMedia}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="personalweb"
              title="Web personal"
              thumbnail={defaultImage}
            >
              {t.textPersonal}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            {t.kumux}
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="kumux"
              thumbnail={defaultImage}
              title={'Web de Kumux'}
            >
              {t.kumuxText}
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="appKumux"
              thumbnail={defaultImage}
              title={'AppWeb para Kumux'}
            >
              {t.textAppkumux}
            </WorkGridItem>
          </Section>
          <Section delay={0.3}></Section>
        </SimpleGrid>
        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            {t.grafix}
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="aqdindustrial"
              thumbnail={defaultImage}
              title={'Ecommerce de productos de seguridad industrial'}
            >
              {t.textAQD}
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="littlebox"
              thumbnail={defaultImage}
              title={'Ecommerce de productos para campings'}
            >
              {t.textLittlebox}
            </WorkGridItem>
          </Section>
          <Section delay={0.3}></Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            {t.titleLearning}
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="avocadoshop"
              thumbnail={defaultImage}
              title="Avocado shop"
            >
              {t.textAvocado}
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="weatherapp"
              thumbnail={defaultImage}
              title="Weatherapp"
            >
              {t.textWeatherApp}
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="cryptoTracker"
              thumbnail={defaultImage}
              title="CryptoTracker"
            >
              {t.textCryptoTracker}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="scrapper"
              thumbnail={defaultImage}
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
