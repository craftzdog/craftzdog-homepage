import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>Sivu mitä yritit löytää ei löytnyt.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Takaisin kotiin</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
