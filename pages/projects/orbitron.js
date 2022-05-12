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
  <Layout title="orbitron">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
            Orbitron <Badge>2018-2020</Badge>
        </Title>
        <Link href="https://github.com/tylertaewook/project-orbitron" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
      <P>
      Built a vehicle with a spherical wheel that implements a 4 wheel independent steering/driving system with Arduino and C# Winform Application.
      </P>
      <P>
      Developed a unique control algorithm in Mathematica and wrote/presented a paper in front of school body; Accepted as one of three members in Kent Guild; Won 7 awards at CT Science Fair;
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stacks</Meta>
            Arduino, Mathematica, C#
        </ListItem>
        <ListItem>
          <Meta>Paper</Meta>
          <Link href="/files/orbitron-paper.pdf">
            Intuitive Control Algorithm Development of 4WIS/4WID Using a SpaceMouse <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Poster</Meta>
          <Link href="/files/orbitron-poster.pdf">
            2019 Conneticut Science Fair <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="http://tylertaewook.com/blog/project-showcase/2021/04/02/Orbitron.html">
          Orbitron: Reinventing the (spherical) wheels and its control algorithm <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Patent</Meta>
          <span>“Driving System and Method of Vehicle,” [KR 10-2268833]</span>
        </ListItem>
      </List>

      <AspectRatio maxW="820px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/WXjisSnfGTI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <Heading as="h4" fontSize={16} my={6}>
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
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Awards & Recognition</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Finalist</Badge>
          Lockheed Martin Physical Sciences Awards
        </ListItem>
        <ListItem>
          <Badge mr={2}>Senior High Finalist</Badge>
          Computer Science Awards
        </ListItem>
        <ListItem>
          <Badge mr={2}>Finalist</Badge>
          Collins Aerospace Engineering Awards
        </ListItem>
        <ListItem>
          <Badge mr={2}>Senior</Badge>
          IEEE, Connecticut Section
        </ListItem>
        <ListItem>
          <Badge mr={2}>Recipient</Badge>
          Robotics And Beyond
        </ListItem>
        <ListItem>
          <Badge mr={2}>Recipient</Badge>
          Barker Mohandas Awards for Transportation Research 
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/projects/orbitron-01.png" alt="Orbitron" />
      <WorkImage src="/images/projects/orbitron-03.png" alt="Algorithm" />
      <WorkImage src="/images/projects/orbitron-02.png" alt="Algorithm" />


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
