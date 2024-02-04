import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Ecommerce Interface <Badge>2022</Badge>
      </Title>
      <P>
      P'yose is a comprehensive UI/UX development service provider committed to delivering innovative and tailored solutions for a diverse range of industries, including technology, vegetables, and studying. Our mission is to enhance user experiences, streamline interfaces, and optimize digital solutions for your unique needs.
      </P>
      <P>
      Website Design: P'yose offers cutting-edge website design services, crafting visually appealing, responsive, and user-friendly websites that leave a lasting impression on your visitors. Whether you're an e-commerce.
      </P>
      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.figma.com/file/msrogHFB7lxpUC2quv58pb/Portfolio---Ecommerce?type=design&node-id=20-2&mode=design&t=FYyA2E9NBN2O0i8d-0">
            https://www.figma.com/file/..... <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Affiliated with</Meta>
          <span>Pyoseph Network / fitopenitup / reciperack</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Figma, Adobe XD, Sketch, Illustrator</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            Kan Eccomerce sudah banyak kenapa kamu buat interface ini lagi?<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>


      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}

      <WorkImage src="/images/works/ecommerce.png" alt="ecommerce1" />
        <WorkImage src="/images/works/ecommerce2.png" alt="ecommerce3" />
        <WorkImage src="/images/works/ecommerce4.png" alt="ecommerce4" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
