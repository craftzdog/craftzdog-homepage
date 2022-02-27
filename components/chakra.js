import {
  ChakraProvider,
  cookieStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ cookies, children }) {
  const colorModeManager = cookieStorageManager(
    typeof cookies === "string"
      ? cookies
      : typeof document !== "undefined"
        ? document.cookie
        : ""
  );

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
