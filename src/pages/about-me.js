import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

// モックデータ
const timelineData = [
  {
    date: '2021.4',
    title: '富山県立大学 工学部 情報システム工学科',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
    logo: '/images/tpu_logo.png'
  },
  {
    date: '2021.9 - 2023.6',
    title: '星乃珈琲店 アルバイト',
    description: 'お客様や従業員との接し方を学び、人への気配りやコミュニケーション能力を磨いてきた',
  },
  {
    date: '2021.9 - 2023.6',
    title: 'タイトルが入ります',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    date: '2021.9 - 2023.6',
    title: 'タイトルが入ります',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    date: '2021.9 - 2023.6',
    title: 'タイトルが入ります',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    date: '2021.9 - 2023.6',
    title: 'タイトルが入ります',
    description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    date: '2021.9 - 2023.6',
    title: 'タイトルが入ります',
    description: '富山県庁内で抱えている課題の改善（業務改善）を行っている。実際に県庁の方々とのヒアリング･ミーティングを行いながら、問題を根本から解決するために学生視点からの提案･解決を行っている。',
  },
]

// 実績用モックデータ
const awardData = [
  {
    date: '2021.4',
    title: 'タイトルが入ります',
  },
  {
    date: '2021.4',
    title: 'タイトルが入ります',
  },
  {
    date: '2021.4',
    title: 'タイトルが入ります',
  },
]

// タイムラインアイテムコンポーネント
const ExTimelineItem = ({ date, title, description, logo, isLast }) => {
  return (
    <Flex ml={5} position="relative" pb={isLast ? 0 : 8}>
      {/* 左側: ドットと縦線 */}
      <Box mt={1} w="36px" position="relative">
        <Box w="15px" h="15px" bg="blue.500" borderRadius="full" zIndex={1} position="relative" />
        {!isLast && (
          <Box 
            position="absolute" 
            top="20px" 
            left="6px" 
            bottom="-32px" 
            w="3px" 
            bg="blue.500" 
          />
        )}
      </Box>

      {/* 中央: 日付 */}
      <Box w={{ base: '120px', md: '192px' }}>
        <Text fontSize="15px">{date}</Text>
      </Box>

      {/* 右側: タイトルと説明 */}
      <Box w={{ base: 'full', md: '510px' }} flex="1">
        <Text fontSize="17px" fontWeight="bold" pb={1}>
          {title}
        </Text>
        <Text fontSize="15px">{description}</Text>
      </Box>

      {/* ロゴ（オプション） */}
      {logo && (
        <Box ml={10} display={{ base: 'none', lg: 'block' }}>
          <Image src={logo} alt="Logo" w="80px" h="auto" />
        </Box>
      )}
    </Flex>
  )
}

// シンプルなタイムラインアイテムコンポーネント（実績用）
const TimelineItem = ({ date, title, isLast }) => {
  return (
    <Flex ml={5} position="relative" pb={isLast ? 0 : 8}>
      {/* 左側: ドットと縦線 */}
      <Box mt={1} w="36px" position="relative">
        <Box w="15px" h="15px" bg="blue.500" borderRadius="full" zIndex={1} position="relative" />
        {!isLast && (
          <Box 
            position="absolute" 
            top="20px" 
            left="6px" 
            bottom="-32px" 
            w="3px" 
            bg="blue.500" 
          />
        )}
      </Box>

      {/* 中央: 日付 */}
      <Box w={{ base: '120px', md: '192px' }}>
        <Text fontSize="15px">{date}</Text>
      </Box>

      {/* 右側: タイトルのみ */}
      <Box w={{ base: 'full', md: '510px' }} flex="1">
        <Text fontSize="17px" fontWeight="bold">
          {title}
        </Text>
      </Box>
    </Flex>
  )
}

const AboutMe = () => (
  <Layout title="About Me">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Experience
      </Heading>

      {/* タイムラインリスト */}
      <Box>
        {timelineData.map((item, index) => (
          <ExTimelineItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            logo={item.logo}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </Box>

      <Heading as="h3" fontSize={20} mb={4}>
        Awards
      </Heading>

      {/* 実績タイムラインリスト */}
      <Box>
        {awardData.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            isLast={index === awardData.length - 1}
          />
        ))}
      </Box>
    </Container>
  </Layout>
)

export default AboutMe
export { getServerSideProps } from '../components/chakra'
