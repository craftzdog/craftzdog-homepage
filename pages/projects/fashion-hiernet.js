import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  AspectRatio,
  Button,
  Stack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import { BsGithub } from 'react-icons/bs'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="fashion-hiernet">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
          Fashion HierNet <Badge>Work In Progress 🚧</Badge>
        </Title>
        <Link href="https://github.com/tylertaewook/fashion-hiernet" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
      <P>
        Hierarchical Image Classification of Fashion commerce using EfficientNet
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <P>
            Hand-crafted a dataset for a CH*NEL fashion brand using selenium
          </P>
        </ListItem>
        <ListItem>
          <P>
            Implemented Deep Hierarchical Network from the original paper
          </P>
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>PyTorch, Pandas, Selenium</span>
        </ListItem>
        <ListItem>
          <Meta>Original Paper</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            Paper Link Here <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/fashionhiernet-01.png" alt="classes" />


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
