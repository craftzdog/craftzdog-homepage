import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Text,
  Flex,
  UnorderedList,
  Badge,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mt={3}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        🔔 This website is still under construction! 🔔
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jianting Feng - 馮建霆
          </Heading>

          <Heading fontSize="1em" mt={2}>
            A Data Science and Machine Learning Enthusiast
          </Heading>
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
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.webp"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Paragraph>
          <Text>
            Hello, I&apos;m Jianting Feng, a machine learning enthusiast based
            in Xi&apos;an, China! Currently, I&apos;m looking for a RA/MPhil/PhD
            position. My major research interest lies in the theory of machine
            learning and its applications.
          </Text>
          <Text>
            If you have any suggestion, please feel free to contact me{' '}
            <Link href="mailto:gianting01@gmail.com">my email</Link>🤗!
          </Text>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/Jianting_Feng_CV.pdf" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My resume
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <UnorderedList>
          <ListItem>
            <BioYear>2022-08</BioYear>
            <Text>
              🥳 Delighted to receive{' '}
              <Link
                color="blue.500"
                href="/Certificate _Best Performance Award_Feng Jianting.pdf"
              >
                <Badge colorScheme="blue" fontSize="0.8em">
                  Best Performance Award
                </Badge>
              </Link>{' '}
              from Department of Statistics, Chinese University of Hong Kong
              (Top 2 in the Workshop)!
            </Text>
          </ListItem>
          <ListItem>
            <BioYear>2022-07</BioYear>
            <Text>👀 Actively looking for a MPhil/PhD position.</Text>
          </ListItem>
          <ListItem>
            <BioYear>2022-06</BioYear>
            <Text>🎓 Got my Bachelor&apos;s degree!</Text>
          </ListItem>
        </UnorderedList>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Expirences
        </Heading>
        <BioSection>
          <BioYear>2018-2022</BioYear>
          <Flex
            marginLeft="4em"
            fontSize="md"
            flexDirection="column"
            textAlign="left"
          >
            <Text>B.Sc in Information and Computing Science </Text>
            <Text>Beijing Institute of Technology, China</Text>
          </Flex>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <UnorderedList>
          <ListItem>
            <Text>
              {' '}
              <Badge>☕️ Coffee</Badge> A caffeine addicted, addicted to SOE and
              pour over!
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {' '}
              <Badge>🦮 Dogs </Badge> I own a cute {''}
              <Link
                color="blue.500"
                href="https://photos.app.goo.gl/jkEoHVExCmW4Ljhs5"
              >
                Beagle dog
              </Link>
              !
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Badge>🏎 Formula 1</Badge> A big fan of{' '}
              <Link
                color="red.500"
                href="https://www.ferrari.com/en-SG/formula1"
              >
                Scuderia Ferrari F1 Team
              </Link>
              ! (Maybe I cannot reply quickly when a grand prix is ongoing ^ ^)
            </Text>
          </ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact me
        </Heading>
        <List>
          <ListItem>
            <Link href="mailto:gianting01@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<AiOutlineMail />}
              >
                gianting01 [AT] gmail [DOT] com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/jiantingfeng" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<IoLogoGithub />}
              >
                @JiantingFeng
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/jianting_feng" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoTwitter />}
              >
                @jianting_feng (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/fjianting" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @fjianting
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
