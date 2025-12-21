import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const isDark = useColorModeValue(false, true)

  return (
    <Box
      as="button"
      onClick={toggleColorMode}
      position="relative"
      display="flex"
      alignItems="center"
      gap={0}
      bg={useColorModeValue('#FFA500', '#4A5568')}
      borderRadius="full"
      p={1}
      cursor="pointer"
      transition="background-color 0.3s ease"
      _hover={{
        opacity: 0.8
      }}
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <Box
        position="relative"
        zIndex={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="32px"
        h="32px"
        borderRadius="full"
        bg={!isDark ? 'white' : 'transparent'}
        transition="background-color 0.3s ease"
      >
        <SunIcon 
          boxSize={4} 
          color={!isDark ? '#FFA500' : 'whiteAlpha.700'}
        />
      </Box>

      {/* Moon Icon */}
      <Box
        position="relative"
        zIndex={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="32px"
        h="32px"
        borderRadius="full"
        bg={isDark ? 'white' : 'transparent'}
        transition="background-color 0.3s ease"
      >
        <MoonIcon 
          boxSize={4} 
          color={isDark ? '#4A5568' : 'whiteAlpha.700'}
        />
      </Box>
    </Box>
  )
}

export default ThemeToggleButton
