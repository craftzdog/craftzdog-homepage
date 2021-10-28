import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Lang from '../../lib/utils'

const Work = () => {
  const t = Lang('works')
  return (
    <Layout title="Kumux">
      <Container>
        <Title>
          Kumux <Badge>2021-</Badge>
        </Title>
        <P>{t.textKumux}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link isExternal href="https://www.kumux.io/">
              Kumux <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Javascript, Gatsby</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/kumux_1.png" alt="Kumux" />
        <WorkImage src="/images/works/kumux_2.png" alt="Kumux" />
      </Container>
    </Layout>
  )
}

export default Work
