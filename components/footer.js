import { Box, Link, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bg={useColorModeValue('#ffffff40', '#20202380')} css={{ backdropFilter: 'blur(10px)' }} position='fixed' bottom={0} pt={2} as="footer" align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Jianting Feng. All Rights Reserved.
      Build with {""}
      <Link
        textColor={useColorModeValue("blue", "teal")}
        href="https://nextjs.org"
      >
        Next.js
      </Link>{" "}
      and{" "}
      <Link
        textColor={useColorModeValue("blue", "teal")}
        href="https://chakra-ui.com"
      >
        ChakraUI
      </Link>
      , inspired by{' '}
      <Link
        textColor={useColorModeValue("blue", "teal")}
        href="https://www.craftz.dog"
      >
        Takuya Matsuyama
      </Link>
      .
    </Box>
  )
}

export default Footer
