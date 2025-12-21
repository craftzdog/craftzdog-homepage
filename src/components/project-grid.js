import { SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from './grid-item'
import Section from './section'

/**
 * プロジェクトグリッドコンポーネント
 * プロジェクトの一覧をグリッド形式で表示する再利用可能なコンポーネント
 * 
 * @param {Array} projects - プロジェクトデータの配列
 * @param {number} delay - アニメーション遅延の基準値（デフォルト: 0）
 */
const ProjectGrid = ({ projects, delay = 0 }) => {
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

export default ProjectGrid
