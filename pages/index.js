import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Stack,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  IconButton,
  Text
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs'
import thumbScraft from '../public/images/projects/scraft-01.png'
import thumbOrbitron from '../public/images/projects/orbitron-01.png'
import Image from 'next/image'
import VoxelDogLoader from '../components/voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container.md">
      <LazyVoxelDog />
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi, I&apos;m a first-year studying CS at Columbia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tyler Kim
          </Heading>
          <p>( Product Developer / Web Developer / ML Researcher )</p>
          <Stack mt={4} spacing={4} direction='row' align='center'>
            <Link href="/files/resume.pdf" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" size='md' variant='solid'>
                Resume / CV
              </Button>
            </Link>
            <Link href="https://github.com/tylertaewook" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='github'
                fontSize='20px'
                icon={<BsGithub />}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/tylertaewook/" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='linkedin'
                fontSize='20px'
                icon={<BsLinkedin />}
              />
            </Link>
            <Link href="https://term.tylertaewook.com/" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='medium'
                fontSize='20px'
                icon={<BsMedium />}
              />
            </Link>
          </Stack>
          <Text
            color={'whiteAlpha.900'}
            fontFamily='monospace'
            fontWeight="semibold"
            fontSize={15}
            py={0}
            mt={3}
            pl={3}
            background={'black'}
            >
            ~$ ssh <Link href="https://term.tylertaewook.com">term.tylertaewook.com</Link>
          </Text>
          <Text
            color={'whiteAlpha.900'}
            fontFamily='monospace'
            fontWeight="semibold"
            fontSize={15}
            py={0}
            mb={3}
            pl={3}
            background={'black'}
            >
            ~$ ssh <Link color={"green.300"} href="https://blog.tylertaewook.com">blog.tylertaewook.com</Link><div id="cursor"></div>
          </Text>
        </Box>
        
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="130px"
            h="130px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/tylerkim.png"
              alt="Profile image"
              borderRadius="full"
              width="130%"
              height="130%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Nice to meet you!
        </Heading>
        <Paragraph>
          My name is Tyler, a first-year undergrad at Columbia SEAS pursuing towards a B.S. in Computer Science.
          My general interest revolves around intertwining Machine Learning and Web Development in which I spark my passion working on ML Web apps such as {' '}
          <NextLink href="/projects/scraft" passHref scroll={false}>
            <Link>scraft.ai</Link>
          </NextLink>.
          I&apos;m curently exploring fields like text-mining, arduino-robotics, computer-vision, and reinforcement-learning until I settle onto a single one that I would like to dive deeper.{' '}
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I&apos;m interested in...
        </Heading>
        <BioSection>
          <BioYear>Web Development</BioYear>
          react, django, flask, typescript
        </BioSection>
        <BioSection>
          <BioYear>Machine Learning</BioYear>
          text-mining, computer-vision, reinforcement-learning
        </BioSection>
        <BioSection>
          <BioYear>Robotics</BioYear>
          arduino, robot-vision, control-algorithm
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I&apos;m most proud of...
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/projects/scraft"
            title="scraft.ai"
            thumbnail={thumbScraft}
          >
            Web-based essay planner with text-mining features
          </GridItem>
          <GridItem
            href="/projects/orbitron"
            title="Orbitron"
            thumbnail={thumbOrbitron}
          >
            Spherical wheeled vehicle & control algorithm
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              All Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
