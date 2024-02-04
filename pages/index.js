import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoMedium } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbPianist1 from '../public/images/works/14juara1.jpg'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi, I&apos;m an UX Designer based in Jakarta!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yoseph Rafael Bonar Clinton R.
          </Heading>
          <p>UX Designer - Frontend Web Developer</p>
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
            <Image
              src="/images/yosep.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        -- Beginner in UI/UX Designer and Frontend WebDev who are working in this field for last 2 years. I’m ready to give you my best and atleast im trying. When not online, he loves
          hanging out with his cat.
          . i'd love to write sometimes on my blog &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Blogseph
          </Link>
          &quot; anyway god is great all the time
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2006</BioYear>
          Born in Jakarta (Джакарта), Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          6 Month Intern Web Dev at Karamelgroup
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          I'm still in school in grade 12
          (СМКН 14 Джакарта)
        </BioSection>
        <BioSection>
          <BioYear>2028</BioYear>
          i wish i can work for google soon :)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I like to do 
        </Heading>
        <Paragraph>
          Arranging Music, playing Piano,
            playing Guitar, playing bass, 
            basketball, volleyball, badminton sometimes, and coding.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JosephCETH30" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @JosephCETH30
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://pyoseph.medium.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoMedium />}
              >
                @Joseph Rafael B. (Indo)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/_yoseph28" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @_yoseph28
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem> */}
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/* <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem> */}
          <GridItem
            href="https://www.inkdrop.app/"
            title="Pianist - Padus"
            thumbnail={thumbPianist1}
          >
            Mengiringi Peserta juara 1 Paduan Suara se JP
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <p>
        Work inquiry, Job oportunities? Send Message.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:yoseph@skiff.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Click here to Email me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
