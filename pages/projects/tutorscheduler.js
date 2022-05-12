import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Button,
  Stack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import { BsGithub } from 'react-icons/bs'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="tutorscheduler">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
            Kent Tutor Scheduler <Badge>2021</Badge>
        </Title>
        <Link href="https://github.com/tylertaewook/tutor-scheduler-django" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
      <P>
        CRUD Peer tutor scheduling web service for alma mater Kent School
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <P>
            Students can sign up, edit, or delete tutor sessions. Tutors can keep track of upcoming sessions. Teachers have access to admin panel and can refer students to sessions
          </P>
        </ListItem>

        <ListItem>
          <P>
            Custom Register/Login system with different user groups(students/tutors/admin); Students can EDIT/DELETE Sessions and receive reminder email; Profile pages with upcoming and past sessions depending on user groups; Admins(teachers) can refer students to specific tutor sessions
          </P>
        </ListItem>
        <ListItem>
          <P>
          Deployed into production and currently maintaining service for 500+ active users.
          </P>
        </ListItem>
      </UnorderedList>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://libguides.kent-school.edu/library">
            https://libguides.kent-school.edu/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>Django, PostgreSQL, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/tutor-01.png" alt="scraft" />
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

