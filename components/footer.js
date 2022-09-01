import { Box, Link, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const link_color = useColorModeValue('blue', 'red.200')
  return (
    <Box
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(50px)' }}
      position="fixed"
      bottom={0}
      pt={2}
      as="footer"
      align="center"
      opacity={0.4}
      fontSize="sm"
    >
      &copy; {new Date().getFullYear()} Jianting Feng. All Rights Reserved.
      Build with {''}
      <Link textColor={link_color} href="https://nextjs.org">
        Next.js
      </Link>{' '}
      and{' '}
      <Link textColor={link_color} href="https://chakra-ui.com">
        ChakraUI
      </Link>
      , inspired by{' '}
      <Link textColor={link_color} href="https://www.craftz.dog">
        Takuya Matsuyama
      </Link>
      .
    </Box>
  )
}

export default Footer
