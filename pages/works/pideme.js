import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Lang from '../../lib/utils'

const Work = () => {
  const t = Lang('works')
  return (
    <Layout title="Pideme">
      <Container>
        <Title>
          Pídeme <Badge>2021- Nowadays</Badge>
        </Title>
        <P>{t.textPideme}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link isExternal href="https://www.pideme.es/">
              P&iacute;deme <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, Laravel</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/pideme_1.png" alt="Pideme" />
        <WorkImage src="/images/works/pideme_2.png" alt="Pideme" />
      </Container>
    </Layout>
  )
}

export default Work
