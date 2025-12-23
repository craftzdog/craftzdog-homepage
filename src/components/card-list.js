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
 * @param {string} apiEndpoint - APIエンドポイント(デフォルト: '/api/development')
 */
const CardList = ({
  items,
  delay = 0,
  columns = [1, 1, 2],
  gap = 6,
  apiEndpoint = '/api/development'
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isLoadingContent, setIsLoadingContent] = useState(false)

  const handleCardClick = async item => {
    // モーダルを開く
    setSelectedProject(item)
    onOpen()

    // ページIDがある場合は、詳細コンテンツを取得
    if (item.id) {
      setIsLoadingContent(true)
      try {
        const response = await fetch(`${apiEndpoint}?pageId=${item.id}`)
        const data = await response.json()

        if (response.ok) {
          // 取得したデータでselectedProjectを更新
          setSelectedProject(data)
        } else {
          console.error('コンテンツ取得エラー:', data.error)
        }
      } catch (error) {
        console.error('コンテンツ取得エラー:', error)
      } finally {
        setIsLoadingContent(false)
      }
    }
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
        isLoading={isLoadingContent}
      />
    </>
  )
}

export default CardList
