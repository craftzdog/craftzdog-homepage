import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Button,
  Stack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import { BsGithub } from 'react-icons/bs'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="scraft">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
            scraft <Badge>Work In Progress 🚧</Badge>
        </Title>
        <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
          Private Repo
        </Button>
      </Stack>
      <P>
      Web-based essay planner with text-mining features
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://scraft.ai/">
            https://scraft.ai/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Frontend</Meta>
          <span>NextJS, React, Tailwindcss</span>
        </ListItem>
        <ListItem>
          <Meta>Backend</Meta>
          <span>Django Rest, GPT-3, Huggingface, PostgreSQL, Docker</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            Something I wrote about scraft <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/projects/scraft-01.png" alt="scraft" />
      {/* <WorkImage src="/images/projects/orbitron-03.png" alt="Algorithm" />
      <WorkImage src="/images/projects/orbitron-02.png" alt="Algorithm" /> */}

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://kentnews.org/2525/features/a-guild-presentation-by-tyler-kim-20/">
            <Badge mr={2}>Kent News</Badge>
            A Guild Presentation by Tyler Kim ‘20{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://kentnews.org/2382/features/an-outstanding-performance-at-the-71st-annual-connecticut-science-and-engineering-fair/">
            <Badge mr={2}>Kent News</Badge>
            An Outstanding Performance at the 71st Annual Connecticut Science and Engineering Fair{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'