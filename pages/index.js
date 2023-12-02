import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoYoutube, IoSend, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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
        Hello world! I&apos;m a machine learning engineer based in Saint-Petersburg!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box 
          flexGrow={1} 
          mb={6}
          p={3}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          borderRadius="lg"
        >
          <Heading as="h2" variant="page-title">
           German Leontiev 
          </Heading>
          <p>Data Magician ( AI / DA / DS / DL / ML / CV / NLP )</p>
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
              src="/images/german.jpg"
              alt="Profile image"
              borderRadius="full"
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
        German is a Saint-Petersburg-based Machine Learning Engineer committed to delivering AI solutions that drive business success. He manages projects end-to-end, from crafting the ML architecture to seamless deployment and integration into production workflows.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/cv.pdf"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            target="_blank"
          >
            My CV 
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Saint-Petersburg (Санкт-Петербург), Russia.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Finished his bachelour's degree in St.Petersburg Polytechnic University
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked as a freelancer affiliate agent 
        </BioSection>
        
        <BioSection>
          <BioYear>2021</BioYear>
          Launched his own international online-shop 
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Creating AI-powered web-services 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Self-improvement, psychology, music, games and machile learning.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/german-leontiev/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @german-leontiev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/german_leontiev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoSend/>}
              >
                @german_leoontiev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/@german-leontiev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoYoutube/>}
              >
                @german-leontiev
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
