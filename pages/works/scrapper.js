import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import lang from '../../lib/utils'

const Work = () => {
  const t = lang('works')
  return (
    <Layout title="Scrapper JS">
      <Container>
        <Title>
          Scrapper JS <Badge>2021</Badge>
        </Title>
        <P>{t.textScrapper}</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Javascript</span>
          </ListItem>

          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/elbatlles/scrapperjs">
              github.com/elbatlles/scrapperjs <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
