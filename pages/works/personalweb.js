import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Web personal">
    <Container>
      <Title>
        Web personal <Badge>2021- Nowadays</Badge>
      </Title>
      <P>Web para dar mis servicios como desarollador</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link isExternal href="https://www.pideme.es/">
            Web personal <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://github.com/elbatlles/webnueva/">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Typescript, Nextjs</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/web_1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/web_2.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
