import {
  Container,
  Heading,
  AspectRatio,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { Title, LegalLinks } from '../../components/wallpaper'
import { BuyButton } from '../../components/payhip'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import WallpaperThumbnailList from '../../components/wallpaper-thumbnail-list'

const Wallpaper = () => (
  <Layout title="Machiya coding wallpaper pack">
    <Container>
      <Title>Machiya coding wallpaper pack</Title>
      <P>
        This wallpaper pack showcases imagery from a coding tutorial on the
        devaslife YouTube channel, focusing on the latest Neovim setup. Filmed
        in a traditional Japanese Machiya, the pack captures the unique blend of
        historic architecture and modern coding. The wallpapers highlight the
        aesthetic charm of the Machiya, offering a tranquil backdrop that
        contrasts with the technical subject matter. Ideal for admirers of
        Japanese culture and coding enthusiasts, this collection brings a touch
        of serene tradition to digital workspaces.
      </P>

      <Box
        align="center"
        my={4}
        p={4}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Box mb={4}>
          <em>
            Buying the wallpaper pack will greatly help me invest in gear and
            tools to create high-quality content 💪🙏
          </em>
        </Box>
        <BuyButton productId="mPTOX" price={19} />
      </Box>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/fFHlfbKVi30"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <P>
        The collection includes various formats suitable for different devices:
        landscape-oriented images for desktop setups and portrait-oriented
        selections for mobile users. The pack also contains a selection of
        behind-the-scenes photos from the video production.
      </P>

      <Heading as="h2" fontSize={20} my={4}>
        Landscape - Up to 8K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={16}
        urlForImage={i =>
          `/images/wallpapers/machiya/ls-${String(i).padStart(2, '0')}.jpg`
        }
        alt="Landscape"
      />

      <Heading as="h2" fontSize={20} my={4}>
        From video - Up to 4K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={9}
        urlForImage={i =>
          `/images/wallpapers/machiya/ft-${String(i).padStart(2, '0')}.jpg`
        }
        alt="From video"
      />

      <Heading as="h2" fontSize={20} my={4}>
        Portrait - Up to 6K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={4}
        urlForImage={i =>
          `/images/wallpapers/machiya/pt-${String(i).padStart(2, '0')}.jpg`
        }
        alt="Portrait"
      />

      <LegalLinks />
    </Container>
  </Layout>
)

export default Wallpaper
export { getServerSideProps } from '../../components/chakra'
