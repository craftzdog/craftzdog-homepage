import fs from 'fs'
import path from 'path'

/**
 * JSONファイルからプロジェクト一覧を取得
 * @param {string} jsonFileName - JSONファイル名（'projects.json' または 'development.json'）
 * @returns {Array} プロジェクトデータの配列
 */
export function getProjectsFromJson(jsonFileName) {
  const filePath = path.join(process.cwd(), 'src', 'data', jsonFileName)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

/**
 * Markdownファイルからコンテンツを取得
 * @param {string} contentFile - コンテンツファイルのパス（例: 'projects/project-1.md'）
 * @returns {string} Markdownコンテンツ
 */
export function getMarkdownContent(contentFile) {
  const filePath = path.join(
    process.cwd(),
    'src',
    'data',
    'content',
    contentFile
  )

  try {
    const content = fs.readFileSync(filePath, 'utf8')
    return content.trim()
  } catch (error) {
    console.error(`Markdownファイル読み込みエラー: ${contentFile}`, error)
    return ''
  }
}

/**
 * プロジェクトIDから詳細情報を取得
 * @param {string} jsonFileName - JSONファイル名
 * @param {string} projectId - プロジェクトID
 * @returns {object|null} プロジェクト詳細情報
 */
export function getProjectById(jsonFileName, projectId) {
  const projects = getProjectsFromJson(jsonFileName)
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return null
  }

  // Markdownコンテンツを取得して追加
  if (project.contentFile) {
    const content = getMarkdownContent(project.contentFile)
    return {
      ...project,
      content
    }
  }

  return project
}

/**
 * Projectsページ用のデータを取得
 */
export function getProjects() {
  return getProjectsFromJson('projects.json')
}

/**
 * Developmentページ用のデータを取得
 */
export function getDevelopmentProjects() {
  return getProjectsFromJson('development.json')
}

/**
 * ページの詳細情報とコンテンツを取得
 * @param {string} pageId - ページID
 * @param {string} jsonFileName - JSONファイル名
 * @returns {object|null} ページ情報とコンテンツ
 */
export function getPageWithContent(pageId, jsonFileName) {
  return getProjectById(jsonFileName, pageId)
}
