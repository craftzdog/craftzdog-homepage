import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'

import { CheckIcon } from '@chakra-ui/icons'

import { ProjectImage, Title, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
const Work = () => (
  <Layout title="LightGBM - Jianting">
    <Container>
      <Title>
        Light GBM <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub Repo</Meta>
          <Link href="https://github.com/microsoft/LightGBM">
            https://github.com/microsoft/LightGBM
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Stack</Meta>
          <span>Python, PyTorch</span>
        </ListItem> */}
      </List>

      <ProjectImage
        src="/images/projects/LightGBM_logo_black_text.svg"
        alt="LightGBM"
      ></ProjectImage>
      <P>
        LightGBM is one of the most popular gradient boosting framework that
        uses tree based learning algorithms (14.1k stars in GitHub). It is
        designed to be distributed and efficient with the following advantages:
      </P>
      <List mx={5}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Faster training speed and higher efficiency.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Lower memory usage. Better accuracy.{' '}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Support of parallel, distributed, and GPU learning.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Capable of handling large-scale data.
        </ListItem>
      </List>
      <P>
        Lucky, I have opportunities to contribute to such a great Machine
        Learning project.
      </P>
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
