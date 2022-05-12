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
  <Layout title="turret">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
          T-33 Arduino Turret <Badge>June 2015- Sept 2015</Badge>
        </Title>
        <Link href="https://github.com/tylertaewook/arduino-turret" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
      <P>
      T-33 is an independent hobby project airsoft turret inspired by the movie Terminator. It is controlled by C# WinForms App and Arduino mainboard. Dating back to summer 2015, it is the first project that led me into the world of computer science and engineering, self-teaching C# and Arduino in the process.
      </P>
      <P>
      Features: Pan/Tilt motion of the gun,
      Electric Firing mechanism(semi-auto/full-auto),
      5W Laser Beam,
      26 High-Power LED lights,
      Bluetooth COM connection with WinForms App,
      720p Wireless Webcam Feed,
      </P>
      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>Arduino, C#</span>
        </ListItem>
      </List>

      <AspectRatio maxW="820px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/7pTMrzbmfWs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <AspectRatio maxW="820px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/NleIUokvxGE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/projects/turret-01.png" alt="turret" />
      <WorkImage src="/images/projects/turret-02.png" alt="turret-controller" />


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
