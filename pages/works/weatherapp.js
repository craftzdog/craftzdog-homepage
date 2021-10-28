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

      <WorkImage src="/images/works/weather_1.png" alt="WeatherApp" />
      <WorkImage src="/images/works/weather_2.png" alt="WeatherApp" />
    </Container>
  </Layout>
)

export default Work
