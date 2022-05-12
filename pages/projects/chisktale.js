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
  <Layout title="chisktale">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
          Chisktale <Badge>May 2016- Sept 2016</Badge>
        </Title>
        <Link href="https://github.com/tylertaewook/chisktale" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
      <P>
      Chisktale was an ambitious Undertale Fangame project with ~6 members. I was in charge of directing and developing the game mechanics, while others were responsible with music-composing, story-writing, and drawing sprites.
      </P>
      <P>
      Project was unfortunately cancelled mid-way due to a big transition in my life; moving to US.
      </P>
      

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://gamejolt.com/games/chisktale/174272">
            Gamejolt <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>Gamemaker Studio</span>
        </ListItem>
      </List>

      <AspectRatio maxW="820px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/kYvmf_1ZXqg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <AspectRatio maxW="820px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/qLHNCYguFzg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/projects/chisktale-02.png" alt="turret" />


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
