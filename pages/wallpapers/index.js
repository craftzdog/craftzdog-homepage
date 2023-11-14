import NextLink from 'next/link'
import { Box, Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbCherryBlossoms from '../../public/images/wallpapers/cherry-blossoms/ls-13.jpg'
import thumbMachiya from '../../public/images/wallpapers/machiya/ls-03.jpg'

const Wallpapers = () => (
  <Layout title="Wallpaper Packs">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Wallpaper Packs
      </Heading>

      <Box my={4}>
        The wallpaper packs offer a selection of carefully curated images
        from&nbsp;
        <Link as={NextLink} href="https://www.youtube.com/devaslife">
          the devaslife YouTube channel
        </Link>
        , known for its programming content.
      </Box>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem
            category="wallpapers"
            id="machiya"
            title="Machiya"
            thumbnail={thumbMachiya}
          >
            A traditional Japanese house, offering a tranquil backdrop that
            contrasts with the technical subject matter
          </WorkGridItem>
          <WorkGridItem
            category="wallpapers"
            id="cherry-blossoms"
            title="Cherry Blossoms"
            thumbnail={thumbCherryBlossoms}
          >
            A serene riverside and cherry blossoms backdrop of the programming
            tutorial
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Wallpapers
export { getServerSideProps } from '../../components/chakra'
