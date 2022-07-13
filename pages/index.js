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
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
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
        Serdecznie zapraszamy!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Polsko - Angielska Akademia Pływania
          </Heading>
          <p>Nauka pływania / treningi / plany treningowe</p>
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
              src="/images/edward.png"
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
          Nauka pływania z pasją.
        </Heading>
        <Paragraph>
          Rozwijamy pasję oraz umiejętności wśród dzieci i dorosłych. Zajęcia są prowadzone przez kadrę składającą się z wyczynowych pływaków, którzy swoim zamiłowaniem do pływania zarażają wszystkich uczestników. Prowadzimy również lekcje w języku angielskim. W imieniu instruktorów - serdecznie zapraszamy!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/zapisy" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="messenger">
              Zapisy
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Daty
        </Heading>
        <BioSection>
          <BioYear>10.08.2021</BioYear>
            Powstanie Akademii.
        </BioSection>
        <BioSection>
          <BioYear>01.10.2021</BioYear>
            Pierwsze zajęcia na basenie CSR WUM.
        </BioSection>
        <BioSection>
          <BioYear>24.06.2022</BioYear>
            Zakończenie pierwszego roku szkolnego.
        </BioSection>
        <BioSection>
          <BioYear>01.09.2022</BioYear>
          Rozpoczęcie drugiego roku szkolnego.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Przydatne linki
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.facebook.com/akademiaplywacka" target="_blank">
              <Button
                variant="ghost"
                colorScheme="messenger"
                leftIcon={<IoLogoFacebook />}
              >
                @akademiaplywacka
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/akademia.plywania" target="_blank">
              <Button
                variant="ghost"
                colorScheme="messenger"
                leftIcon={<IoLogoInstagram />}
              >
                @akademia.plywania
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
