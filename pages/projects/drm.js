import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  //   AspectRatio,
} from '@chakra-ui/react'

import { ProjectImage, Title, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
const Work = () => (
  <Layout title="Deep Ritz Method - Jianting">
    <Container>
      <Title>
        Deep Ritz Method for PDE solving <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub Repo</Meta>
          <Link href="https://github.com/JiantingFeng/Deep-Ritz-PDE-Solver">
            https://github.com/JiantingFeng/Deep-Ritz-PDE-Solver{''}
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, PyTorch</span>
        </ListItem>
      </List>
      <P>
        Deep Ritz Method is a deep learning based method for solving partial
        differential equations, which is extremely useful for solving high
        dimensional equations (hard to handle by traditional methods)
      </P>

      <ProjectImage
        src="/images/projects/thumb_drm.webp"
        alt="deep ritz method"
      ></ProjectImage>
      <P>
        This project is mainly inspired by Deep Ritz Method proposed by E
        Weinan, et al. Plz check out README.md in github repo for detailed
        explanation.
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
