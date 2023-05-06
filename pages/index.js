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
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbMedium from '../public/images/links/medium.png'
import thumbDev from '../public/images/links/dev.png'
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
        Hello, guys! I&apos;m a Data Scientist based in São Paulo - Brazil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rodrigo Trindade
          </Heading>
          <p>Data Science Student (Guitarrist / Junk Food lover)</p>
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
              src="/images/profile.jpg"
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
          Hi there, I'm Rodrigo, a beginner Data Scientist with a passion for solving problems
          using data. I recently completed a Systems Developer Associate Degree and i am proficient in Python, R and SQL. I have self experience in data cleaning,
          exploratory data analysis, and data visualization, and I am currently learning more advanced
          topics such as machine learning in my Data Science & Analytics Especialization at Universidade de São Paulo.
          I am excited to use my skills to make a positive impact in the world.{' '}
          {/* <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers. */}
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
          <BioYear>1987</BioYear>
          Born in Belém do Pará, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Move to São Paulo, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          I worked as an Apple Advisor for 2 and a half years supporting VIP customers for the entire Apple ecosystem.
          </BioSection>
        <BioSection>
        <BioYear>2020</BioYear>
         I worked as a Support Analyst for 2 years supporting Java Applications and Infrastructure environments for some Companies Like Prodesp and IAMSP.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Associate&apos;s Program in the System Analysis and Development field at Faculdade Impacta de Tecnologia.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Complete Extension program in Fundamentals of Statistics, Introduction to R Software and Machine Learning at Universidade de São Paulo - USP.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Started Master of Business Administration in Data Science & Analytics at Universidade de São Paulo - USP.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          I worked as a Aplication Support Analyst supporting Python/Django Applications and Oracle Infrastructure environments for some Companies Like Petrobras and Sys Manager.
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Scholarship holder in the Data Science & Analytics Especialization at the Universidade de São Paulo - USP.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Love so Much
        </Heading>
        <Paragraph>
          Thrash Metal,{' '}
          <Link href="https://www.torturesquad.com.br/" target="_blank">
          Torture Squad
          </Link>
          , Playing Guitar,{' '}
          <Link href="https://www.joydivisionofficial.com/reimagined/" target="_blank">
            Joy Division
          </Link>
           , Machine Learning, to Cook and Beer...
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
        <SimpleGrid columns={4} rows={2} gap={1}>
          <ListItem>
            <Link href="https://github.com/elir0d" target="_blank">
              <Button
                width="110px"
                variant="solid"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
               github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/elir0d" target="_blank">
              <Button
                width="110px"
                variant="solid"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
               Twitter
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/rodrigo-trindade-b05b73203/" target="_blank">
              <Button
                width="110px"
                variant="solid"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
               Linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/elir0d" target="_blank">
              <Button
                width="110px"
                variant="solid"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
               Instagram
              </Button>
            </Link>
          </ListItem>
        </SimpleGrid>
        </List>
        </Section>

        <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Chronicles of a Proletarian"
            thumbnail={thumbMedium}
          >
            My Medium profile ( &gt; 0k subs)
          </GridItem>
          <GridItem
            href="https://dev.to/elir0d"
            title="DEV - Data Science"
            thumbnail={thumbDev}
          >
            My DEV profile ( &gt; 0k subs)
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on my learning journey. Weekly updates,
          courses, tutorials, and videos. All in one Place.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.deeplearning.ai/the-batch/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up to my Favority Newsletter Here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
