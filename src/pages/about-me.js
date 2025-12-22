import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

// モックデータ
const timelineData = [
  {
    date: '2021.03',
    title: '富山県立高岡工芸高等学校 電子機械科 卒業',
    description: ''
  },
  {
    date: '2021.04',
    title: '富山県立大学 工学部 情報システム工学科 入学',
    description:
      '2022年12月に授業をきっかけでプログラミングを開始。主にReact（Typescript）やNext、Goを使用してWebアプリを開発。UI/UX面にとても関心があり、Figmaを使用したデザインやMUI･Tailwind･MantainなどのUIライブラリ等を使用して実装までを行う。2023年4月に登壇したLT大会と、6月に参加したハッカソンをきっかけに、他のエンジニアとの技術的な交流も積極的に行っている。',
    logo: '/images/logo_tpu.png'
  },
  {
    date: '2021.09 - 2023.06',
    title: '星乃珈琲店 アルバイト',
    description:
      'お客様や従業員との接し方を学び、人への気配りやコミュニケーション能力を磨いてきた。2023年にはバイトリーダーを務め、新人指導及び教育を担当'
  },
  {
    date: '2022.10 - ',
    title: '学生団体「POLYGON」 加入',
    description: '富山県立大学で情報分野に興味･関心がある学生が集う学生団体',
    logo: '/images/logo_polygon.png'
  },
  {
    date: '2023.04 - 2026.03',
    title: '富山県庁 DX推進サポーター 任命',
    description:
      '雇用形態：会計年度任用職員。富山県庁内で抱えている課題の改善（業務改善）を行っている。実際に県庁の方々とのヒアリング･ミーティングを行いながら、問題を根本から解決するために学生視点からの提案･解決を行っている。'
  },
  {
    date: '2023.08',
    title: '株式会社CARTA HOLDINGS サマーインターン「Treasure」 参加',
    description:
      'サマーインターン「Treasure」に参加（3week）。前半 講義 / 後半 チームで企画･開発。最終発表では フロントエンド賞 を受賞',
    logo: '/images/logo_carta.jpg'
  },
  {
    date: '2023.09',
    title:
      'エキサイトホールディングス株式会社 サマーインターン「Booost!!!」 参加',
    description:
      'サマーインターン「Booost!!!」に参加（5day）。ヘルスケア事業のお悩み相談サービスのレコメンドシステムをチームで企画･開発',
    logo: '/images/logo_excite.png'
  },
  {
    date: '2023.10 - 2027.03',
    title: '岩本・河崎研究室（SIDLab）配属',
    description: '',
    logo: '/images/logo_sidlab.svg'
  },
  {
    date: '2024.02 - 2024.03',
    title: '大学事務局 アルバイト',
    description:
      'POLYGONの取り組みとして、アルバイトの勤怠管理DXを行った。具体的には、総務課へのヒアリング、業務フローの見直し、MS製品（PowerAutomateなど）を使用したシステムの実装などを担当'
  },
  {
    date: '2025.03',
    title: '富山県立大学 工学部 情報システム工学科 卒業',
    description: ''
  },
  {
    date: '2025.04',
    title:
      '富山県立大学 大学院 工学研究科 電子・情報工学専攻 博士前期課程 入学',
    description: ''
  }
]

// 実績用モックデータ
const awardData = [
  {
    date: '2023.04.27',
    title: 'サポーターズ LT会 出場'
  },
  {
    date: '2023.06.17',
    title: 'サポーターズ 技育CAMPキャラバン@福岡 優秀賞'
  },
  {
    date: '2023.07.29',
    title: 'サポーターズ 技育CAMPキャラバン@金沢 登壇'
  },
  {
    date: '2023.08.07 - 08.25',
    title:
      '株式会社CARTA HOLDINGS サマーインターンシップ【Treasure】参加 / フロントエンド賞受賞'
  },
  {
    date: '2023.08.12',
    title: 'サポーターズ 技育展 登壇'
  },
  {
    date: '2023.09.02',
    title: 'サポーターズ 技育CAMPアドバンス Vol.3 大賞(優勝)'
  },
  {
    date: '2023.09.04 - 09.08',
    title: 'エキサイト株式会社 インターンシップ 参加'
  },
  {
    date: '2025.02.26',
    title: 'UBI研究会 Japan UBI Symposium2025 研究発表'
  }
]

// スキルデータ
const frontendSkills = [
  {
    title: 'Javascript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 4
  },
  {
    title: 'Typescript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 3
  },
  {
    title: 'HTML',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 5
  },
  {
    title: 'CSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 3
  },
  {
    title: 'SCSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    level: 1
  }
]

const backendSkills = [
  {
    title: 'Go',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
    level: 2
  }
]

// タイムラインアイテムコンポーネント
const ExTimelineItem = ({ date, title, description, logo, isLast }) => {
  return (
    <Flex ml={5} position="relative" pb={isLast ? 0 : 8}>
      {/* 左側: ドットと縦線 */}
      <Box mt={1} w="36px" position="relative">
        <Box
          w="15px"
          h="15px"
          bg="blue.500"
          borderRadius="full"
          zIndex={1}
          position="relative"
        />
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
      <Box w={{ base: '80px', md: '120px' }}>
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
        <Box
          w="15px"
          h="15px"
          bg="blue.500"
          borderRadius="full"
          zIndex={1}
          position="relative"
        />
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
      <Box w={{ base: '80px', md: '120px' }}>
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
          <Text pb={1} fontWeight="medium">
            {card.title}
          </Text>
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
  <Box
    as="svg"
    width="20px"
    height="19px"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {filled ? (
      <path
        d="M10 3.90594L11.2601 6.93547L11.6119 7.78141L12.5252 7.85463L15.7958 8.11683L13.3039 10.2514L12.6081 10.8474L12.8207 11.7386L13.582 14.9302L10.7819 13.2199L10 12.7423L9.21812 13.2199L6.418 14.9302L7.17931 11.7386L7.39189 10.8474L6.69608 10.2514L4.2042 8.11683L7.47484 7.85463L8.3881 7.78141L8.73995 6.93547L10 3.90594Z"
        fill="#F1C644"
        stroke="#F1C644"
        strokeWidth="3"
      />
    ) : (
      <path
        d="M10 2.60396L11.7217 6.74345L11.9563 7.30742L12.5651 7.35623L17.0341 7.7145L13.6292 10.6311L13.1653 11.0285L13.307 11.6226L14.3473 15.9835L10.5213 13.6466L10 13.3282L9.47875 13.6466L5.65272 15.9835L6.69296 11.6226L6.83468 11.0285L6.3708 10.6311L2.96595 7.7145L7.43488 7.35623L8.04372 7.30742L8.27829 6.74345L10 2.60396Z"
        stroke="#F1C644"
        strokeWidth="2"
      />
    )}
  </Box>
)

// 星を生成する関数
const generateStars = level => {
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
      <Box>
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

      <Box mt={10}>
        <Heading as="h3" fontSize={20} mb={4}>
          Experience
        </Heading>
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

      <Box mt={10}>
        <Heading as="h3" fontSize={20} mb={4}>
          Awards
        </Heading>
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
