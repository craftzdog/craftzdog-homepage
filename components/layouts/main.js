import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="German's Homepage" />
        <meta name="author" content="German Leontiev" />
        <meta name="author" content="german-leontiev" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="German Leontiev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@german-leontiev" />
        <meta name="twitter:creator" content="@german-leontiev" />
        <meta name="twitter:image" content="apple-touch-icon.png" />
        <meta property="og:site_name" content="German Leontiev" />
        <meta name="og:title" content="German Leontiev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="apple-touch-icon.png" />
        <title>German Leontiev - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
