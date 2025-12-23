import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'projects',
  id,
  title,
  thumbnail,
  onClick
}) => (
  <Box w="100%" textAlign="center">
    <Box cursor="pointer" onClick={onClick}>
      <Box
        overflow="hidden"
        borderRadius="12px"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'lg'
        }}
      >
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          width={400}
          height={225}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <Text fontSize={14}>{children}</Text>
    </Box>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        object-fit: cover;
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
      }
    `}
  />
)
