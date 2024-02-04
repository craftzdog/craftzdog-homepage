import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        HalalHero <Badge>2023-</Badge>
      </Title>
      <P>
      Website Penyelia Halal menyediakan Informasi yang akurat sesuai dengan subject pelayanan yang diberikan
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.halalhero.id">
            https://www.halalhero.id <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Affiliated with</Meta>
          <span>PTSP Halal/Halal Indonesia/Keluharan Jakarta Timur/Walikota Jakarta Timur</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>CSS, JS, Bootstrap5</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            Mengapa Harus memilih Halalhero / Urushalal Sebagai penyelia halal untuk Sertifikat Halal di 2024?<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/halalheroid.jpg" alt="hhid" />
      <WorkImage src="/images/works/halalheroid2.jpg" alt="hhid2" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://player.vimeo.com/video/909703105?"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
