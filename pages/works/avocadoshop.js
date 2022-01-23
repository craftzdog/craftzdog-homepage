import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Lang from '../../lib/utils'

const Work = () => {
  const t = Lang('works')
  return (
    <Layout title="Avocado Shop">
      <Container>
        <Title>
          Avocado Shop <Badge>2021</Badge>
        </Title>
        <P>{t.textAvocado}</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Nextjs</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://nextjs-tienda-two.vercel.app/">
              Avocado Shop <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/avocado.png" alt="Avocado" />
      </Container>
    </Layout>
  )
}

export default Work
