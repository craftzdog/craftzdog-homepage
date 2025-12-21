import { Container, Divider, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import ProjectGrid from '../components/project-grid'
import Section from '../components/section'

// メインプロジェクトのデータ
const mainProjects = [
  {
    id: 'project1',
    title: 'プロジェクト1',
    thumbnail: '/images/project1.png',
    description: 'プロジェクト1の説明文がここに入ります'
  },
  {
    id: 'project2',
    title: 'プロジェクト2',
    thumbnail: '/images/project2.png',
    description: 'プロジェクト2の説明文がここに入ります'
  },
  {
    id: 'project3',
    title: 'プロジェクト3',
    thumbnail: '/images/project3.png',
    description: 'プロジェクト3の説明文がここに入ります'
  },
  {
    id: 'project4',
    title: 'プロジェクト4',
    thumbnail: '/images/project4.png',
    description: 'プロジェクト4の説明文がここに入ります'
  }
]

// その他のプロジェクトのデータ
const otherProjects = [
  {
    id: 'project5',
    title: 'プロジェクト5',
    thumbnail: '/images/project5.png',
    description: 'プロジェクト5の説明文がここに入ります'
  },
  {
    id: 'project6',
    title: 'プロジェクト6',
    thumbnail: '/images/project6.png',
    description: 'プロジェクト6の説明文がここに入ります'
  }
]

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <ProjectGrid projects={mainProjects} delay={0} />

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          その他
        </Heading>
      </Section>

      <ProjectGrid projects={otherProjects} delay={0.3} />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
