import { SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from './grid-item'
import Section from './section'

/**
 * プロジェクトカード一覧コンポーネント
 * プロジェクトをカード形式で一覧表示する再利用可能なコンポーネント
 * 
 * @param {Array} projects - プロジェクトデータの配列
 * @param {number} delay - アニメーション遅延の基準値（デフォルト: 0）
 */
const ProjectCardList = ({ projects, delay = 0 }) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      {projects.map((project, index) => (
        <Section key={project.id} delay={delay + index * 0.1}>
          <WorkGridItem
            id={project.id}
            title={project.title}
            thumbnail={project.thumbnail}
          >
            {project.description}
          </WorkGridItem>
        </Section>
      ))}
    </SimpleGrid>
  )
}

export default ProjectCardList
