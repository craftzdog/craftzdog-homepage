import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/wallpapers">
      Wallpapers
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WallpaperImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export const LegalLinks = () => (
  <Box
    display="flex"
    flexWrap="wrap"
    mt={6}
    mb={4}
    alignItems="center"
    justifyContent="center"
    fontSize={14}
    gap={4}
  >
    <Link as={NextLink} href="https://store.craftz.dog/terms" target="_blank">
      Terms of Use
    </Link>
    <Link
      as={NextLink}
      href="https://store.craftz.dog/privacy-policy"
      target="_blank"
    >
      Privacy Policy
    </Link>
    <Link
      as={NextLink}
      href="https://store.craftz.dog/specified-commercial-transaction-act"
      target="_blank"
    >
      Commerce disclosures
    </Link>
  </Box>
)
