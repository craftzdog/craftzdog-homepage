import { SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { WorkGridItem } from './grid-item'
import ProjectModal from './project-modal'
import Section from './section'

/**
 * カード一覧コンポーネント
 * アイテムをカード形式で一覧表示する汎用的なコンポーネント
 *
 * @param {Array} items - 表示するアイテムデータの配列
 * @param {number} delay - アニメーション遅延の基準値(デフォルト: 0)
 * @param {Array} columns - レスポンシブなカラム数の配列(デフォルト: [1, 1, 2])
 * @param {number} gap - グリッド間のギャップ(デフォルト: 6)
 */
const CardList = ({ items, delay = 0, columns = [1, 1, 2], gap = 6 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedProject, setSelectedProject] = useState(null)

  const handleCardClick = item => {
    setSelectedProject(item)
    onOpen()
  }

  return (
    <>
      <SimpleGrid columns={columns} gap={gap}>
        {items.map((item, index) => (
          <Section key={item.id} delay={delay + index * 0.1}>
            <WorkGridItem
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              onClick={() => handleCardClick(item)}
            >
              {item.description}
            </WorkGridItem>
          </Section>
        ))}
      </SimpleGrid>

      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        project={selectedProject}
      />
    </>
  )
}

export default CardList
