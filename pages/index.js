import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Heading, Link, List, ListItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { useLanguage } from '../contexts/LanguageContext'
import { t, tWithLinks } from '../lib/i18n'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => {
  const { locale, loadTranslations } = useLanguage()
  const [content, setContent] = useState(null)

  useEffect(() => {
    const load = async () => {
      const homeTranslations = await loadTranslations('home')
      setContent(homeTranslations)
    }
    load()
  }, [locale, loadTranslations])

  if (!content) {
    return <Layout><Container>Loading...</Container></Layout>
  }

  return (
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
          {t(content, 'greeting')}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t(content, 'profile.name')}
            </Heading>
            <p>{t(content, 'profile.title')}</p>
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
                src="/images/koki_face.jpg"
                alt="Profile image"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t(content, 'sections.work.title')}
          </Heading>
          <Paragraph>
            {tWithLinks(t(content, 'sections.work.description'), {
              inkdrop: (
                <Link
                  key="inkdrop"
                  as={NextLink}
                  href="/works/inkdrop"
                  passHref
                  scroll={false}
                >
                  {t(content, 'sections.work.inkdrop')}
                </Link>
              ),
              devaslife: (
                <Link
                  key="devaslife"
                  as={NextLink}
                  href="https://www.youtube.com/devaslife"
                  passHref
                  target="_blank"
                >
                  {t(content, 'sections.work.devaslife')}
                </Link>
              )
            })}
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              {locale === 'ja' ? 'ポートフォリオ' : 'My portfolio'}
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t(content, 'sections.bio.title')}
          </Heading>
          {content.sections.bio.items.map((item, index) => (
            <BioSection key={index}>
              <BioYear>{item.year}</BioYear>
              {item.description}
            </BioSection>
          ))}
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t(content, 'sections.interests.title')}
          </Heading>
          <Paragraph>
            {tWithLinks(t(content, 'sections.interests.description'), {
              drawing: (
                <Link
                  key="drawing"
                  href="https://illust.odoruinu.net/"
                  target="_blank"
                >
                  {t(content, 'sections.interests.drawing')}
                </Link>
              ),
              photography: (
                <Link
                  key="photography"
                  href="https://500px.com/p/craftzdog"
                  target="_blank"
                >
                  {t(content, 'sections.interests.photography')}
                </Link>
              )
            })}
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t(content, 'sections.onTheWeb.title')}
          </Heading>
          <List>
            {content.sections.onTheWeb.social.map((social, index) => {
              const icons = {
                GitHub: IoLogoGithub,
                Twitter: IoLogoTwitter,
                Instagram: IoLogoInstagram
              }
              const Icon = icons[social.platform]
              return (
                <ListItem key={index}>
                  <Link href={social.url} target="_blank">
                    <Button
                      variant="ghost"
                      colorScheme="teal"
                      leftIcon={<Icon />}
                    >
                      {social.handle}
                    </Button>
                  </Link>
                </ListItem>
              )
            })}
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {content.sections.onTheWeb.featured.map((item, index) => (
              <GridItem
                key={index}
                href={item.url}
                title={item.title}
                thumbnail={index === 0 ? thumbYouTube : thumbInkdrop}
              >
                {item.description}
              </GridItem>
            ))}
          </SimpleGrid>

          <Heading as="h3" variant="section-title">
            {t(content, 'sections.newsletter.title')}
          </Heading>
          <p>{t(content, 'sections.newsletter.description')}</p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="https://www.devas.life/"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              {locale === 'ja'
                ? 'ニュースレターに登録'
                : 'Sign up my newsletter here'}
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
