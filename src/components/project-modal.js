import {
  Box,
  Center,
  HStack,
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Spinner,
  Tag,
  Text,
  UnorderedList,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'

/**
 * カスタムマークダウンレンダラー
 * 箇条書きの黒丸を表示するためのカスタムコンポーネント
 * ブックマークブロックの処理も含む
 */
const customTheme = {
  p: props => {
    const { children } = props
    return (
      <Text mb={2} lineHeight="1.6">
        {children}
      </Text>
    )
  },
  h1: props => {
    const { children } = props
    return (
      <Heading as="h1" size="lg" mt={6} mb={3}>
        {children}
      </Heading>
    )
  },
  h2: props => {
    const { children } = props
    return (
      <Heading as="h2" size="md" mt={5} mb={2}>
        {children}
      </Heading>
    )
  },
  h3: props => {
    const { children } = props
    return (
      <Heading as="h3" size="sm" mt={4} mb={2}>
        {children}
      </Heading>
    )
  },
  hr: props => {
    return <Box as="hr" my={4} borderColor="gray.300" />
  },
  u: props => {
    const { children } = props
    return (
      <Text as="u" display="inline">
        {children}
      </Text>
    )
  },
  ul: props => {
    const { children } = props
    return (
      <UnorderedList pl={5} mb={2} styleType="disc">
        {children}
      </UnorderedList>
    )
  },
  ol: props => {
    const { children } = props
    return (
      <OrderedList pl={5} mb={2}>
        {children}
      </OrderedList>
    )
  },
  li: props => {
    const { children } = props
    return (
      <ListItem mb={1} display="list-item">
        {children}
      </ListItem>
    )
  }
}

/**
 * プロジェクト詳細モーダルコンポーネント
 * カードをクリックした時に表示されるポップアップ
 *
 * @param {boolean} isOpen - モーダルの開閉状態
 * @param {function} onClose - モーダルを閉じる関数
 * @param {object} project - 表示するプロジェクトデータ
 * @param {boolean} isLoading - コンテンツ読み込み中かどうか
 */
const ProjectModal = ({ isOpen, onClose, project, isLoading = false }) => {
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
          {isLoading ? (
            <Center py={10}>
              <Spinner size="lg" />
            </Center>
          ) : (
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
                  <Box
                    sx={{
                      '& h1': {
                        fontSize: 'lg',
                        fontWeight: 'bold',
                        mt: 3,
                        mb: 2
                      },
                      '& h2': {
                        fontSize: 'md',
                        fontWeight: 'bold',
                        mt: 2,
                        mb: 1
                      },
                      '& h3': {
                        fontSize: 'sm',
                        fontWeight: 'bold',
                        mt: 2,
                        mb: 1
                      },
                      '& p': {
                        mb: 2,
                        lineHeight: '1.6'
                      },
                      '& ul': {
                        pl: 5,
                        mb: 2,
                        listStyleType: 'disc',
                        '& li': {
                          mb: 1,
                          display: 'list-item'
                        }
                      },
                      '& ol': {
                        pl: 5,
                        mb: 2,
                        listStyleType: 'decimal',
                        '& li': {
                          mb: 1,
                          display: 'list-item'
                        }
                      },
                      '& img': {
                        maxWidth: '60%',
                        height: 'auto',
                        my: 3,
                        borderRadius: 'md'
                      },
                      '& code': {
                        bg: useColorModeValue('gray.100', 'gray.700'),
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 'md',
                        fontSize: 'sm',
                        whiteSpace: 'nowrap',
                        display: 'inline'
                      },
                      '& pre': {
                        bg: useColorModeValue('gray.100', 'gray.700'),
                        p: 3,
                        borderRadius: 'md',
                        overflowX: 'auto',
                        mb: 2,
                        '& code': {
                          bg: 'transparent',
                          p: 0,
                          whiteSpace: 'pre'
                        }
                      }
                    }}
                  >
                    <ReactMarkdown
                      components={{ ...ChakraUIRenderer(), ...customTheme }}
                    >
                      {project.content}
                    </ReactMarkdown>
                  </Box>
                </Box>
              )}
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ProjectModal
