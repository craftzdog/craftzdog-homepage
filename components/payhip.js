import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'

const Payhip = () => (
  <>
    <script
      type="text/javascript"
      async
      src="https://payhip.com/payhip.js"
    ></script>
    <style jsx global>{`
      iframe.payhip-checkout-iframe {
        color-scheme: light;
      }
    `}</style>
  </>
)

export const BuyButton = ({ productId, price }) => {
  const handleClick = e => {
    e.preventDefault()
    global.Payhip.Checkout.open({
      product: productId
    })
  }

  return (
    <Button
      as={NextLink}
      onClick={handleClick}
      href={`https://payhip.com/b/${productId}`}
      colorScheme="teal"
    >
      Buy Now - ${price}
    </Button>
  )
}

export default Payhip
