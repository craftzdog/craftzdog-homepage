import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Stack, Flex, Spacer, Avatar } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        height={200}
        width={330}
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ExpItem = ({ children, company, position, time, location, thumbnail }) => (
  <Box borderWidth='2px' borderRadius='lg' borderColor={"teal"} mb="2">
    <Stack boxShadow="lg" p="4" borderRadius="md" border={"thick"}>
      {/* <Stack direction={{ base: 'column', md: 'row' }}> */}
        {/* <Image
          src={thumbnail}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
          height={40}
          width={40}
        /> */}
      <Flex>
        <Avatar src={thumbnail} size="lg" />
        <Flex width="100%" ml={2} justifyContent="space-between">
            <Box>
              <Text fontWeight="semibold">{company}</Text>
              <Text fontSize="sm">{position}</Text>
            </Box>
            <Spacer />
            <Box textAlign="right">
              <Text fontWeight="semibold">{time}</Text>
              <Text fontSize="sm">{location}</Text>
            </Box>
        </Flex>
      </Flex>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={14}>{children}</Text>
      </Stack>
    </Stack>
  </Box>
  // <Box w="100%" textAlign="center">
  //   <LinkBox cursor="pointer">
      // <Image
      //   src={thumbnail}
      //   alt={title}
      //   className="grid-item-thumbnail"
      //   placeholder="blur"
      //   loading="lazy"
      //   height={200}
      //   width={330}
      // />
  //     <LinkOverlay href={href} target="_blank">
  //       <Text mt={2}>{title}</Text>
  //     </LinkOverlay>
  //     <Text fontSize={14}>{children}</Text>
  //   </LinkBox>
  // </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          height={200}
          width={330}
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
