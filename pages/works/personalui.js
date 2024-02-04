import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        Personal Portfolio Interface<Badge>2023</Badge>
      </Title>
      <P>The mode magazine for understanding to personally enjoy Japan.</P>
      <P>
      Introducing the "Dark Portfolio Website Sketch" – a meticulously crafted digital sanctuary for individuals looking to showcase their creative endeavors. Immerse yourself in the allure of a sophisticated dark theme that not only captivates attention but also sets the stage for an immersive visual experience. Seamlessly blending aesthetics with functionality, this Sketch template offers a robust platform for designers and developers alike.
      </P>
      

     
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/community/file/1330784793752003640/dark-portfolio-website-sketch" target="_blank">
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
          <Link href="#">
           What is benefit being an UX Designer tho?
            (in nature) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/personalui2.png" alt="personalptf1" />
      <WorkImage src="/images/works/personalui3.png" alt="personalptf2" />
      
      <WorkImage src="/images/works/personalui4.png" alt="personalptf3" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
