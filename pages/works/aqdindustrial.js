import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import lang from '../../lib/utils'

const Work = () => {
  const t = lang('works')
  return (
    <Layout title="AQD  Industrial">
      <Container>
        <Title>
          AQD Industrial <Badge>2019</Badge>
        </Title>
        <P>{t.textAQD}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link isExternal href="https://www.industrialproduct.es/">
              AQD Industrial <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, Prestashop</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/aqd_1.png" alt="Inkdrop" />
        <WorkImage src="/images/works/aqd_2.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
}

export default Work
