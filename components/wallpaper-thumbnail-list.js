import { SimpleGrid } from '@chakra-ui/react'
import { WorkImage } from './work'

const WallpaperThumbnailList = ({ numOfImages, urlForImage, alt }) => {
  return (
    <SimpleGrid columns={[3, 3, 4]} gap={6}>
      {Array.from(Array(numOfImages).keys())
        .map(i => i + 1)
        .map(i => (
          <WorkImage key={i} src={urlForImage(i)} alt={`${alt} ${i}`} />
        ))}
    </SimpleGrid>
  )
}

export default WallpaperThumbnailList
