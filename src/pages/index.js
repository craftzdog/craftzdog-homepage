import Image from 'next/image'
import NextLink from 'next/link'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoNewspaper
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Home = () => {
  // Bioデータの配列
  const bioData = [
    {
      year: '2021',
      description: '富山県立高岡工芸高等学校 電子機械科 卒業'
    },
    {
      year: '2021',
      description: '富山県立大学 工学部 情報システム工学科 入学'
    },
    {
      year: '2025',
      description: '富山県立大学 工学部 情報システム工学科 卒業'
    },
    {
      year: '2025',
      description: '富山県立大学 研究工学科 電子・情報工学専攻 入学'
    },
    {
      year: '2026',
      description: '休学し、フィリピンとカナダに留学（予定）'
    }
  ]

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4">
        {/* 挨拶 */}
        <div className="rounded-lg mb-6 p-3 text-center bg-white/50 dark:bg-white/20 glass">
          こんにちは！自分の弱みを糧にして生きている修士1年生です！💪
        </div>

        {/* プロフィール */}
        <div className="md:flex">
          <div className="flex-grow">
            <h2 className="text-4xl font-bold">Koki Nakagawa</h2>
            <p>Japan / Graduate Student / Developer</p>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-6 text-center">
            <div className="inline-block w-[100px] h-[100px] border-2 border-white/80 rounded-full overflow-hidden">
              <Image
                src="/images/koki_face.jpg"
                alt="Profile image"
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>

        {/* 自己紹介 */}
        <Section delay={0.1}>
          <h3 className="section-title">自己紹介</h3>
          <Paragraph>
            富山県立大学で情報工学を専攻する修士1年生
            <br />
            中学から高校時代、スプラトゥーンというゲームを5000時間プレイ。授業中は爆睡、家に帰ってからは朝までゲームをしていた元ダメ人間（自称）
            <br />
            そんな自分に嫌気がさし、「自分を変えよう」と決心。
            <br />
            2025年に大学院進学し、2026年に夢の実現のため1年の海外留学を予定
          </Paragraph>
          <div className="text-center my-4">
            <NextLink
              href="/Projects"
              scroll={false}
              className="inline-flex items-center px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded transition-colors"
            >
              作品を見る
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NextLink>
          </div>
        </Section>

        {/* Bio（経歴） */}
        <Section delay={0.2}>
          <h3 className="section-title">Bio</h3>
          {bioData.map((bio, index) => (
            <div key={index} className="mb-2">
              <div className="grid grid-cols-[4em_1fr]">
                <div className="font-bold">{bio.year}</div>
                <div>{bio.description}</div>
              </div>
            </div>
          ))}
        </Section>

        {/* できること */}
        <Section delay={0.3}>
          <h3 className="section-title">できること</h3>
          <Paragraph>
            Web開発、モバイルアプリ開発、UI/UXデザイン、
            機械学習など幅広い分野に興味を持っています。
          </Paragraph>
        </Section>

        {/* SNSリンク */}
        <Section delay={0.3}>
          <h3 className="section-title">SNS</h3>
          <ul>
            <li>
              <a
                href="https://github.com/Minimalist-00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded transition-colors">
                  <IoLogoGithub className="mr-2" />
                  GitHub
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Minimalist_30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded transition-colors">
                  <IoLogoTwitter className="mr-2" />x / Twitter
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/koki.n.0_0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded transition-colors">
                  <IoLogoInstagram className="mr-2" />
                  Instagram
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/koki-nakagawa-236443292/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded transition-colors">
                  <IoLogoLinkedin className="mr-2" />
                  LinkedIn
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://note.com/minimalist30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded transition-colors">
                  <IoNewspaper className="mr-2" />
                  note
                </button>
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </Layout>
  )
}

export default Home
