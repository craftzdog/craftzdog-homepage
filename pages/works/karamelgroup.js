import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Karamelgroup <Badge>2023</Badge>
      </Title>
      <P>
        Kami adalah PT. Karamel Kreativindo Digital Internasional, agensi Pemasaran Digital
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.karamelgroup.com">
            https://www.karamelgroup.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Affiliated with</Meta>
          <span>urusizin.co, halalhero.id, urushalal.co</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>CSS, JS, Bootstrap5</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            Apa sih itu Digital Marketing?<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://news.ycombinator.com/item?id=10782289">
            <Badge mr={2}>Hacker News</Badge>
            The Four Painters: A Video Work Created with Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://gigazine.net/news/20151224-deep-learning-four-painters/">
            <Badge mr={2}>Gigazine</Badge>
            実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the
            four painters」
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}

      {/* <Box>
        <iframe
          src="https://player.vimeo.com/video/146373709"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box> */}

      <WorkImage
        src="/images/works/karamelgroup.jpg"
        alt="contoh"
      />
      <WorkImage src="/images/works/propnew5.png" alt="karamelgroup" />
      <WorkImage src="/images/works/karamelgroup2.jpg" alt="karamelgroup" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
