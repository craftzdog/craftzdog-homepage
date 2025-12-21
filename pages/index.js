import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoNewspaper } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Home = () => {
  return (
    <Layout>
      <Container>
        {/* 挨拶 */}
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          こんにちは、Koki Nakagawaのポートフォリオサイトへようこそ！
        </Box>

        {/* プロフィール */}
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Koki Nakagawa
            </Heading>
            <p>学生 / Developer</p>
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

        {/* 自己紹介 */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            自己紹介
          </Heading>
          <Paragraph>
            テクノロジーとデザインに情熱を持つ学生開発者です。
            様々なプロジェクトに取り組み、新しい技術を学び続けています。
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              作品を見る
            </Button>
          </Box>
        </Section>

        {/* Bio（経歴） */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            日本で生まれる
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            大学入学
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            研究室配属
          </BioSection>
        </Section>

        {/* できること */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            できること
          </Heading>
          <Paragraph>
            Web開発、モバイルアプリ開発、UI/UXデザイン、
            機械学習など幅広い分野に興味を持っています。
          </Paragraph>
        </Section>

        {/* SNSリンク */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            SNS
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/yourusername" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @yourusername
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/yourusername" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @yourusername
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/yourusername" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @yourusername
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/yourusername" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://note.com/yourusername" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoNewspaper />}
                >
                  note
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
