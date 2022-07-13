import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import zosia from '../public/images/works/zosia.jpg'
import edward from '../public/images/works/edward.jpg'
import jeremi from '../public/images/works/jeremi.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Instruktorzy
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="zosia" title="Zosia Malczewska" thumbnail={zosia}>
            Zosia ma 11 lat doświadczenia jako wyczynowa pływaczka. Wiedzę, którą zdobyła przez te wszystkie lata, chciałaby przekazać osobom, które chcą coś zmienić w swoim życiu - przełamać lęk przed wodą, nauczyć się nowego stylu pływackiego, wzmocnić mięśnie lub poprawić kondycję. Przywiązuje ogromną wagę do wiary w siebie i na każdej lekcji zwraca uwagę na aspekt psychologiczny sportu amatorskiego, jak i profesjonalnego. Chce żeby uczestnicy widzieli w niej przewodnika, któremu mogą zaufać.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="edward" title="Edward Baltaza" thumbnail={edward}>
            Szybko pływam.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="jeremi" title="Jeremi Suliga" thumbnail={jeremi}>
            Ja też szybko pływam.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
