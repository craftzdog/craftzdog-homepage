import { Box, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
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

// スキルデータ
const frontendSkills = [
  {
    title: 'Javascript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 4,
  },
  {
    title: 'Typescript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 3,
  },
  {
    title: 'HTML',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 5,
  },
  {
    title: 'CSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 3,
  },
  {
    title: 'SCSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    level: 1,
  },
]

const backendSkills = [
  {
    title: 'Go',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
    level: 2,
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

// スキルカードコンポーネント
const SkillCard = ({ skills }) => {
  if (skills.length === 0) {
    return <Text color="gray.500">準備中...</Text>
  }

  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
      {skills.map((card, index) => (
        <Box 
          key={index} 
          bg="white" 
          borderRadius="lg" 
          boxShadow="md" 
          textAlign="center" 
          py={5}
          px={3}
        >
          <Image src={card.img} alt={card.title} w="56px" mx="auto" pb={2} />
          <Text pb={1} fontWeight="medium">{card.title}</Text>
          <Flex justify="center" gap={0}>
            {generateStars(card.level)}
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  )
}

// 星アイコンコンポーネント
const StarIcon = ({ filled }) => (
  <Box as="svg" width="20px" height="19px" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    {filled ? (
      <path d="M10 3.90594L11.2601 6.93547L11.6119 7.78141L12.5252 7.85463L15.7958 8.11683L13.3039 10.2514L12.6081 10.8474L12.8207 11.7386L13.582 14.9302L10.7819 13.2199L10 12.7423L9.21812 13.2199L6.418 14.9302L7.17931 11.7386L7.39189 10.8474L6.69608 10.2514L4.2042 8.11683L7.47484 7.85463L8.3881 7.78141L8.73995 6.93547L10 3.90594Z" fill="#F1C644" stroke="#F1C644" strokeWidth="3" />
    ) : (
      <path d="M10 2.60396L11.7217 6.74345L11.9563 7.30742L12.5651 7.35623L17.0341 7.7145L13.6292 10.6311L13.1653 11.0285L13.307 11.6226L14.3473 15.9835L10.5213 13.6466L10 13.3282L9.47875 13.6466L5.65272 15.9835L6.69296 11.6226L6.83468 11.0285L6.3708 10.6311L2.96595 7.7145L7.43488 7.35623L8.04372 7.30742L8.27829 6.74345L10 2.60396Z" stroke="#F1C644" strokeWidth="2" />
    )}
  </Box>
)

// 星を生成する関数
const generateStars = (level) => {
  const maxLevel = 5
  const stars = []

  for (let i = 1; i <= maxLevel; i++) {
    stars.push(<StarIcon key={i} filled={i <= level} />)
  }

  return stars
}

const AboutMe = () => (
  <Layout title="About Me">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Experience
      </Heading>
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

      <Heading as="h3" fontSize={20} mb={4} mt={10}>
        Awards
      </Heading>
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

      <Box pt={0} pb={0} mt={10}>
        <Heading as="h3" fontSize={20} mb={4}>
          Skills
        </Heading>

        <Text pb={8}>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </Text>

        {/* Frontend */}
        <Heading as="h5" fontSize="lg" fontWeight="bold" pb={4}>
          Frontend
        </Heading>
        <SkillCard skills={frontendSkills} />

        {/* Backend */}
        <Heading as="h5" fontSize="lg" fontWeight="bold" pb={4} pt={10}>
          Backend
        </Heading>
        <SkillCard skills={backendSkills} />

        {/* Design */}
        <Heading as="h5" fontSize="lg" fontWeight="bold" pb={4} pt={10}>
          Design
        </Heading>
        <SkillCard skills={[]} />

        {/* Other */}
        <Heading as="h5" fontSize="lg" fontWeight="bold" pb={4} pt={10}>
          Other
        </Heading>
        <SkillCard skills={[]} />
      </Box>

    </Container>
  </Layout>
)

export default AboutMe
export { getServerSideProps } from '../components/chakra'
