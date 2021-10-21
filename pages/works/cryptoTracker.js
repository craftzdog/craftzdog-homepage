import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="CryptoTracker">
    <Container>
      <Title>
        CryptoTracker <Badge>2021</Badge>
      </Title>
      <P>
        App where you can see a list of cryptocurrencies and their prices,
        created with React Native.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript,React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://github.com/elbatlles/cryptotracker/">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/modetokyo_eyecatch.png"
        alt="cryptoTracker"
      />
    </Container>
  </Layout>
)

export default Work
