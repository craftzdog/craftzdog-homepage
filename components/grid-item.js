import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Button,
  FormControl,
  Input,
  Textarea,
  SimpleGrid,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { React } from "react";
import { useForm } from 'react-hook-form'
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
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ContactForm = () => {

  const {
    formState: { errors },
  } = useForm()


  return (

    <SimpleGrid columns={1} spacing={3}>
      <FormControl isRequired id="name" isInvalid={errors.name}>
        <Input
          id='name'
          type='text'
          name='text'
          placeholder='Name'
          _focusVisible="none"
          border="none"
        />
      </FormControl>
      <FormControl isRequired id="email">
        <Input
          id='email'
          type="email"
          name="email"
          placeholder="E-mail"
          _focusVisible="none"
          border="none"
        />
      </FormControl>
      <FormControl isRequired>
        <Textarea
          id='message'
          type='text'
          name="message"
          placeholder="Your Message"
          columm={1}
          rows={6}
          resize="none"
          _focusVisible="none"
          border="none"
          variant="outline"
        />
      </FormControl>
      <Button
        id='submit'
        type='submit'
        name='submit'
        fontWeight='bold'
        _focusVisible="none"
        _focus="none"
        _hover="none"
        bg="null"
        variant="teal"
        colorScheme='none'
      >
        Send Message
      </Button>
    </SimpleGrid>
  );
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
