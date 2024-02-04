import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import hhid from '../public/images/works/halalheroid.jpg'
import urushalalco from '../public/images/works/urushalalco.jpg'
import urusizinco from '../public/images/works/urusizinco.jpg'
import karamelgroup from '../public/images/works/karamelgroup.jpg'
import fitopenitup from '../public/images/works/fitopenitup.jpg'
import ecommerce from '../public/images/works/ecommerce.png'
import personalui from '../public/images/works/personalui.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works / Project (Website)
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="hhid" title="halalhero.id" thumbnail={hhid}>
          Website Penyelia Halal menyediakan Informasi yang akurat sesuai dengan subject pelayanan yang diberikan
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="hhid"
            title="urushalal.co"
            thumbnail={urushalalco}
          >
            Website Penyelia Halal menyediakan Informasi yang akurat sesuai dengan subject pelayanan yang diberikan
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="karamelgroup"
            title="Karamelgroup"
            thumbnail={karamelgroup}
          >
            Kami adalah PT. Karamel Kreativindo Digital Internasional, agensi Pemasaran Digital
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="urusizinco"
            title="urusizin.co"
            thumbnail={urusizinco}
          >
            Kami adalah solusi one-stop untuk membantu Anda mengatasi setiap tantangan dalam memperoleh izin usaha
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Figma - (UI/UX Design)
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="fitopenitup" thumbnail={fitopenitup} title="FitOpenitUp">
          Encourages users to participate in fitness challenges. Users can join challenges based on their fitness goals
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="personalui"
            thumbnail={personalui}
            title="personal portfolio ui"
          >
            Introducing the "Dark Portfolio Website Sketch" 
          </WorkGridItem>
        </Section>
      <Section delay={0.3}>
          <WorkGridItem
            id="ecommerce"
            thumbnail={ecommerce}
            title="E-commerce Interface"
          >
            including but not limited to technology, vegetables, and studying. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Music Cover
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
