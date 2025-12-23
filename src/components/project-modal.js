import {
  Box,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tag,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'

/**
 * プロジェクト詳細モーダルコンポーネント
 * カードをクリックした時に表示されるポップアップ
 *
 * @param {boolean} isOpen - モーダルの開閉状態
 * @param {function} onClose - モーダルを閉じる関数
 * @param {object} project - 表示するプロジェクトデータ
 */
const ProjectModal = ({ isOpen, onClose, project }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const overlayBg = useColorModeValue('blackAlpha.600', 'blackAlpha.800')

  if (!project) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay bg={overlayBg} backdropFilter="blur(4px)" />
      <ModalContent
        bg={bgColor}
        maxH="80vh"
        maxW="container.md"
        mx="auto"
        my="auto"
        borderRadius="2xl"
      >
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack align="stretch" spacing={4}>
            {/* タグセクション */}
            {project.tags && project.tags.length > 0 && (
              <Box>
                <Heading size="sm" mb={2}>
                  タグ
                </Heading>
                <HStack spacing={2} flexWrap="wrap">
                  {project.tags.map((tag, index) => (
                    <Tag
                      key={index}
                      colorScheme={tag.color || 'blue'}
                      size="md"
                      mb={2}
                    >
                      {tag.name}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            )}

            {/* マークダウンコンテンツ */}
            {project.content && (
              <Box>
                <Heading size="sm" mb={2}>
                  詳細
                </Heading>
                <Box
                  sx={{
                    '& h1': {
                      fontSize: '2xl',
                      fontWeight: 'bold',
                      mt: 4,
                      mb: 2
                    },
                    '& h2': {
                      fontSize: 'xl',
                      fontWeight: 'bold',
                      mt: 3,
                      mb: 2
                    },
                    '& h3': {
                      fontSize: 'lg',
                      fontWeight: 'bold',
                      mt: 2,
                      mb: 1
                    },
                    '& p': { mb: 2 },
                    '& ul': { pl: 4, mb: 2 },
                    '& ol': { pl: 4, mb: 2 },
                    '& li': { mb: 1 },
                    '& code': {
                      bg: useColorModeValue('gray.100', 'gray.700'),
                      px: 1,
                      py: 0.5,
                      borderRadius: 'md',
                      fontSize: 'sm'
                    },
                    '& pre': {
                      bg: useColorModeValue('gray.100', 'gray.700'),
                      p: 3,
                      borderRadius: 'md',
                      overflowX: 'auto',
                      mb: 2
                    }
                  }}
                >
                  <ReactMarkdown components={ChakraUIRenderer()}>
                    {project.content}
                  </ReactMarkdown>
                </Box>
              </Box>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ProjectModal
