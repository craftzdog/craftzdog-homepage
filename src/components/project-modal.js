import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

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
  const { theme } = useTheme()

  // ESCキーでモーダルを閉じる & 背景スクロール無効化（スクロールバーは維持）
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      // 現在のスクロール位置を保存
      const scrollY = window.scrollY

      // 背景を固定してスクロールを無効化（スクロールバーは残る）
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'

      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      // クリーンアップ: 元のスクロール位置に戻す
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)

      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content with fade and scale animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl max-h-[80vh] max-w-3xl w-full mx-auto overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6">
              {isLoading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* タグセクション */}
                  {project.tags && project.tags.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold mb-2">タグ</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              tag.color === 'blue'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                : tag.color === 'green'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                  : tag.color === 'red'
                                    ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                    : tag.color === 'yellow'
                                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                      : tag.color === 'purple'
                                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                            }`}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* マークダウンコンテンツ */}
                  {project.content && (
                    <div className="prose prose-sm dark:prose-invert max-w-none markdown-content">
                      <ReactMarkdown
                        components={{
                          h1: ({ children }) => (
                            <h1 className="text-lg font-bold mt-6 mb-3">
                              {children}
                            </h1>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-md font-bold mt-5 mb-2">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-sm font-bold mt-4 mb-2">
                              {children}
                            </h3>
                          ),
                          p: ({ children }) => (
                            <p className="mb-2 leading-relaxed">{children}</p>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc pl-5 mb-2 space-y-1">
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="list-decimal pl-5 mb-2 space-y-1">
                              {children}
                            </ol>
                          ),
                          li: ({ children }) => (
                            <li className="mb-1">{children}</li>
                          ),
                          hr: () => (
                            <hr className="my-4 border-gray-300 dark:border-gray-600" />
                          ),
                          img: ({ src, alt }) => (
                            <img
                              src={src}
                              alt={alt}
                              className="max-w-[70%] h-auto my-3 mx-auto rounded-md"
                            />
                          ),
                          code: ({ inline, children }) =>
                            inline ? (
                              <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm whitespace-nowrap">
                                {children}
                              </code>
                            ) : (
                              <code className="block bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-x-auto mb-2">
                                {children}
                              </code>
                            ),
                          pre: ({ children }) => (
                            <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-x-auto mb-2">
                              {children}
                            </pre>
                          ),
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              {children}
                            </a>
                          )
                        }}
                      >
                        {project.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
