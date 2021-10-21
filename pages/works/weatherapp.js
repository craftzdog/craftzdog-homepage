import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
    <Container>
      <Title>
        WeatherApp <Badge>2021</Badge>
      </Title>
      <P>
        Web created from a Udemy course where I learned more about jest, redux
        and useeffect.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Reactjs, Jest, Redux</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link isExternal href="https://weatherapp-theta.vercel.app/">
            Website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/pichu2_eyecatch.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
