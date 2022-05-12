import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Button,
  Stack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import { BsGithub } from 'react-icons/bs'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="histcnn">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
          Histogram Layer for Texture Classification <Badge>Jun 2019 - Aug 2019</Badge>
        </Title>
        <Link href="https://github.com/tylertaewook/sstp-hist-cnn" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
      <P>
      Paper written and presented as part of the 61st Annual UF SSTP; Assisted ML texture analysis research in Professor Alina Zare’s Machine Learning and Sensing Lab by implementing deep network models in PyTorch and conducted various experiments with different parameters
      </P>
      <P>
      We propose a hybrid model that incorporates a stackable, localized histogram layer on convolutional neural network (CNN) for texture analysis applications.
      </P>
      <P>
      Instead of using standard histogram operation, we used RBF (Radial Basis Function) to perform a localized binning operation without binning constraints.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Paper</Meta>
          <Link href="/files/sstp-paper.pdf">
            Histogram Layer for Texture Classification <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Poster</Meta>
          <Link href="/files/sstp-poster.pdf">
            2019 SSTP Final Presentation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Fun Memories :)</Meta>
          <Link href="https://www.youtube.com/watch?v=FZvnE30DoSI&ab_channel=TylerKim">
            SSTP Video Montage <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/histcnn-02.png" alt="Poster" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media Features</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://faculty.eng.ufl.edu/machine-learning/2019/07/gatorsense-hosts-uf-student-science-training-program-students/">
            <Badge mr={2}>Gatorsense</Badge>
            GATORSENSE HOSTS UF STUDENT SCIENCE TRAINING PROGRAM STUDENTS{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://faculty.eng.ufl.edu/machine-learning/2019/12/kim-accepted-to-columbia-university-seas/">
            <Badge mr={2}>Gatorsense</Badge>
            KIM ACCEPTED TO COLUMBIA UNIVERSITY!{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Awards & Recognition</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>SSTP 2019</Badge>
          Best Paper Award
        </ListItem>
      </UnorderedList>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
