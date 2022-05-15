import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Button,
  Stack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import { BsGithub } from 'react-icons/bs'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="keywordprice">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
          Keyword/Price Analysis Tool <Badge>Jul 2021- Nov 2021</Badge>
        </Title>
        <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
          Private Repo
        </Button>
      </Stack>
      <P>
      Built a keyword extraction tool/API to assist small businesses to detect counterfeit products on Korean E-commerce websites
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <P>
          Extracts keywords from e-commerce items in different categories and provides keywords/price distribution information with user’s feedback input;
          </P>
        </ListItem>

        <ListItem>
          <P>
          Built a web-crawler customized for G*CCI website in selenium; extracts and organizes all G*cci products’ data in a pre-defined format which is later inputted into keyword API
          </P>
        </ListItem>
        <ListItem>
          <P>
          Embedded to Faikerz’s main model as a filter to screen ~40% items from the training dataset which increased overall detection accuracy by 30% and computation efficiency by 40%
          </P>
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>Python, Flask, Selenium, MongoDB</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/keywordprice-01.png" alt="API Routes" />
      <WorkImage src="/images/projects/keywordprice-02.png" alt="API Routes" />


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
