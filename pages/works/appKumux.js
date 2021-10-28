import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Lang from '../../lib/utils'

const Work = () => {
  const t = Lang('works')
  return (
    <Layout title="APP Kumux">
      <Container>
        <Title>
          Kumux App <Badge>2020-2021</Badge>
        </Title>
        <P>{t.textAppKumux}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link isExternal href="https://app.kumux.io/login">
              App Kumux <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Typescript, ReactJS</span>
          </ListItem>
        </List>

        <Box>
          <iframe
            src="https://www.youtube.com/embed/R33ZpQ4uqZY?start=38"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
