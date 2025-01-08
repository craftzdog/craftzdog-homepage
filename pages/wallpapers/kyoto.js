import { Container, Heading, UnorderedList, ListItem } from '@chakra-ui/react'
import { Title, LegalLinks } from '../../components/wallpaper'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import WallpaperThumbnailList from '../../components/wallpaper-thumbnail-list'
import { WallpaperProductBox } from '../../components/wallpaper-product-box'

const Wallpaper = () => (
  <Layout title="Machiya coding wallpaper pack">
    <Container>
      <Title>Textures of Kyoto wallpaper pack</Title>
      <P>
        Immerse yourself in the intricate beauty of Kyoto with the{' '}
        <strong>Textures of Kyoto</strong> wallpaper pack. This carefully
        curated collection focuses on the tactile details and timeless materials
        that define Kyoto&apos;s serene and historic charm.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Aged Wooden Walls:</strong> Scratches and patinas that tell
          the story of time and craftsmanship.
        </ListItem>
        <ListItem>
          <strong>Moss-Covered Stones:</strong> Vibrant moss growing on ancient
          rocks in traditional gardens.
        </ListItem>
        <ListItem>
          <strong>Rock Gardens:</strong> Shadows and patterns that evoke a
          meditative atmosphere.
        </ListItem>
        <ListItem>
          <strong>Temple Architecture:</strong> Exquisitely structured and
          beautifully crafted details.
        </ListItem>
        <ListItem>
          <strong>Patinas:</strong> The subtle aging of materials that add depth
          and character.
        </ListItem>
      </UnorderedList>
      <P>
        Designed to celebrate Kyoto&apos;s materials rather than cityscapes,
        this wallpaper pack offers a calming and artful backdrop for your
        devices. Let <strong>Textures of Kyoto</strong> bring the essence of
        Japan&apos;s timeless artistry into your daily life.
      </P>

      <WallpaperProductBox productId="J6aTh" price={29} />

      <P>
        The collection includes various formats suitable for different devices:
        landscape-oriented images for desktop setups and portrait-oriented
        selections for mobile users.
      </P>

      <Heading as="h2" fontSize={20} my={4}>
        Landscape - Up to 8K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={105}
        urlForImage={i =>
          `/images/wallpapers/kyoto/ls_${String(i).padStart(3, '0')}.jpg`
        }
        alt="Landscape"
      />

      <Heading as="h2" fontSize={20} my={4}>
        Portrait - Up to 6K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={11}
        urlForImage={i =>
          `/images/wallpapers/kyoto/pr_${String(i).padStart(2, '0')}.jpg`
        }
        alt="Portrait"
      />

      <LegalLinks />
    </Container>
  </Layout>
)

export default Wallpaper
export { getServerSideProps } from '../../components/chakra'
