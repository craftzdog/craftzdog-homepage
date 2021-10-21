import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="solidary">
    <Container>
      <Title>
        Landing for help children<Badge>2021</Badge>
      </Title>
      <P>
        Website to help organise an event to raise money for hospitalised
        children
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, css, Tailwind</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://unainktatto.vercel.app/">
            Website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <Box></Box>
    </Container>
  </Layout>
)

export default Work
