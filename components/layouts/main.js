import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
      <link
          rel="icon"
          href="https://img.icons8.com/cute-clipart/64/000000/coffee-to-go.png"
          type="image/x-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jianting's homepage" />
        <meta name="author" content="Jianting Feng" />
        <meta name="author" content="andyfeng" />
        <meta name="twitter:title" content="Jianting Feng" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:site" content="@jianting_feng" />
        <meta name="twitter:creator" content="@jianting_feng" />
        {/* <meta name="twitter:image" content="https://www.craftz.dog/card.png" /> */}
        <meta property="og:site_name" content="Jianting Feng" />
        <meta name="og:title" content="Jianting Feng" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        <title>Jianting - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
