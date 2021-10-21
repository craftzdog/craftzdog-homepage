import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="STYLY">
    <Container>
      <Title>
        Avocado Shop <Badge>2021</Badge>
      </Title>
      <P>Web that I created for a Platzi course to learn Nextjs.</P>

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

      <WorkImage src="/images/works/styly_eyecatch.png" alt="STYLY" />
    </Container>
  </Layout>
)

export default Work
