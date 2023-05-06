import { Box, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Text>
        &copy; {new Date().getFullYear()} This website is built based on the {' '}
        <Link href='https://www.craftz.dog/' target='_blank' color="teal">
          Takuya Matsuyama&apos;s website.  
        </Link> 
        &nbsp;All Rights Reserved.
      </Text>
    </Box>
  )
}

export default Footer
