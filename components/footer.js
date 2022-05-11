import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Tyler Kim. All Rights Reserved.
    </Box>
    <Box align="center" opacity={0.4} fontSize="sm">
      Forked from <a href="https://www.craftz.dog/">craftz.dog</a>
    </Box>
    </>
  )
}

export default Footer
