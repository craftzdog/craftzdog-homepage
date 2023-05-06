import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Input: {
    baseStyle: props => ({
      field: {
        minHeight: "40px",
        color: "#525252",
        boxShadow: mode("inset 5px 5px 10px #908b83, inset -5px -5px 10px #ffffff", "inset 5px 5px 10px #131315, inset -5px -5px 10px #2d2d31")(props)
      },
    })
  },
  Textarea:{
    baseStyle: props => ({
      color: "#525252",
      boxShadow: mode("inset 5px 5px 10px #908b83, inset -5px -5px 10px #ffffff", "inset 5px 5px 10px #131315, inset -5px -5px 10px #2d2d31")(props)
    })
  },
  Button: {
    baseStyle: props => ({
      bg: mode('#f0e7db', '#202023')(props),
      color: "#88ccca",
      boxShadow: mode("5px 5px 10px #d6cec3, -5px -5px 10px #fffff3", "5px 5px 10px #131315, -5px -5px 10px #2d2d31")(props),
      _active: {
        color: "#525252",
        boxShadow: mode("inset 5px 5px 10px #908b83, inset -5px -5px 10px #ffffff", "inset 5px 5px 10px #131315, inset -5px -5px 10px #2d2d31")(props)
      }

    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}






const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
