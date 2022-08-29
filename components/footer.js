import { Box, Link, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
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
      , inspired by
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
