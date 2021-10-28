import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import lang from '../../lib/utils'

const Work = () => {
  const t = lang('works')
  return (
    <Layout title="Web Profesional">
      <Container>
        <Title>
          Web personal <Badge>2021- Nowadays</Badge>
        </Title>
        <P>{t.textPersonal}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link isExternal href="https://angelbatlles.me/">
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

        <WorkImage src="/images/works/web_1.png" alt="Web Personal" />
        <WorkImage src="/images/works/web_2.png" alt="Web personal" />
      </Container>
    </Layout>
  )
}

export default Work
