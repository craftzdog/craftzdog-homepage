import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Lang from '../lib/utils'
import React from 'react'

const Home = () => {


  const t = Lang('home')
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          {t.title}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Angel Batlles
            </Heading>
            <p>{t.subName}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/angel.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.work}
          </Heading>
          <Paragraph>
            {t.workText}
            <NextLink href="/works/pideme">
              <Link> Pideme</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {t.bottomPortfolio}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1989</BioYear>
            {t.born}
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            {t.dai}
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            {t.grafix}
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            {t.kumux}
          </BioSection>
          <BioSection>
            <BioYear>2021 </BioYear>
            {t.freelance}
          </BioSection>
          <BioSection>
            <BioYear>2022 {t.present}</BioYear>
            {t.travelport}
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t.learning}
          </Heading>
          <Paragraph><Link isExternal href="#">
             English
            </Link>
          </Paragraph>
          <Paragraph>
            <Link isExternal href="https://www.codewars.com/users/abatlles/">
            Katas
            </Link>
          </Paragraph>

          <Paragraph>
            <Link isExternal href="https://share.cryptozombies.io/es/lesson/4/share/NoName?id=WyJjenwxNTE4NjMiLDEsMTRd">
               CryptoZombies (Solidity)
            </Link>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>{t.like}</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t.ssnn}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/elbatlles" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @elbatlles
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/elbatlles" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @elbatlles
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://instagram.com/abatlles" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @abatlles
                </Button>
              </Link>
            </ListItem>
          </List>

          {/*}   <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://pideme.es/"
            title="Pideme"
            thumbnail={thumbInkdrop}
          >
            Platform to order and pay for orders from the table and get them to
            the kitchen.
          </GridItem>
</SimpleGrid>*/}

          {/*  <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {t.bottonPost}
              </Button>
            </NextLink>
</Box> */}
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
