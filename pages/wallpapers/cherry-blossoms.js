import { Container, Heading, AspectRatio } from '@chakra-ui/react'
import { Title, LegalLinks } from '../../components/wallpaper'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import WallpaperThumbnailList from '../../components/wallpaper-thumbnail-list'
import { WallpaperProductBox } from '../../components/wallpaper-product-box'

const Wallpaper = () => (
  <Layout title="Cherry blossom view and coding">
    <Container>
      <Title>Cherry blossom coding wallpaper pack</Title>
      <P>
        This wallpaper pack offers a selection of carefully curated images from
        the &apos;devaslife&apos; YouTube channel, known for its programming
        content. The featured wallpapers are derived from the &quot;Boost your
        skills with ChatGPT: Creating a transcription and translation tool using
        OpenAI&quot; video, showcasing a serene riverside and cherry blossoms
        backdrop of the programming tutorial.
      </P>

      <WallpaperProductBox productId="65jPS" price={19} />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/UNGi144eVbI"
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
        Landscape - up to 6K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={14}
        urlForImage={i =>
          `/images/wallpapers/cherry-blossoms/ls-${String(i).padStart(
            2,
            '0'
          )}.jpg`
        }
        alt="Landscape"
      />

      <Heading as="h2" fontSize={20} my={4}>
        From video - up to 4K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={14}
        urlForImage={i =>
          `/images/wallpapers/cherry-blossoms/v-${String(i).padStart(
            2,
            '0'
          )}.jpg`
        }
        alt="From video"
      />

      <Heading as="h2" fontSize={20} my={4}>
        Portrait - up to 6K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={7}
        urlForImage={i =>
          `/images/wallpapers/cherry-blossoms/pl-${String(i).padStart(
            2,
            '0'
          )}.jpg`
        }
        alt="Portrait"
      />

      <LegalLinks />
    </Container>
  </Layout>
)

export default Wallpaper
export { getServerSideProps } from '../../components/chakra'
