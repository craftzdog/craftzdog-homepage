import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="fitopenitup">
    <Container>
      <Title>
        FitopenitUp <Badge>2022</Badge>
      </Title>
      <P>
      app or web platform that encourages users to participate in fitness challenges. Users can join challenges based on their fitness goals, such as weight loss, muscle gain, or overall wellness.
      </P>
      <P>
        <Link href="https://instagram.com/poppinsjoseph" target="_blank">
          Jogosegeph <ExternalLinkIcon mx="2px" />
        </Link>
        , the founder of the agency, Allow users to set personalized fitness goals, whether it's weight loss, muscle gain, or general well-being.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/file/Gj6rWCzkdJ84qvjWgkIiss/FitOpenitup-(Copy)?type=design&node-id=30%3A263&mode=design&t=7V5pbWevdOs2RaiK-1" target="_blank">
              https://figma.com/file/.... <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Figma / Sketch / Adobe Xd / Illustrator / Freepik / Dribbble
          </span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://www.youtube.com/watch?v=GznmPACXBlY">
           What is benefit being an UX Designer tho?
            (in nature) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/logofitopenitup.png" alt="fitopenitup" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}

      <WorkImage src="/images/works/fitopenitup.jpg" alt="fitopenitup" />
      <WorkImage src="/images/works/fitopenitup2.png" alt="fitopenitup" />
      <WorkImage src="/images/works/fitopenitup3.png" alt="fitopenitup" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
