import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Scrapper JS <Badge>2021</Badge>
      </Title>
      <P>
        Small script created with Javascript and using selenium libraries to be
        able to take time in my gym when there is a free slot.
      </P>

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

      <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
    </Container>
  </Layout>
)

export default Work
