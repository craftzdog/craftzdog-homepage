import { Box, useColorModeValue } from '@chakra-ui/react'
import { BuyButton } from './payhip'

export const WallpaperProductBox = ({ productId, price }) => {
  return (
    <Box
      align="center"
      my={4}
      p={4}
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      <Box mb={4}>
        <em>
          Purchasing the wallpaper pack will greatly support my content creation
          and indie app development journey 💪🙏
        </em>
      </Box>
      <BuyButton productId={productId} price={price} />
    </Box>
  )
}
