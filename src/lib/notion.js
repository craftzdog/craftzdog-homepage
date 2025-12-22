import { Client } from '@notionhq/client'

/**
 * Notionクライアントを取得（環境変数を使用して初期化）
 */
function getNotionClient() {
  const apiKey = process.env.NOTION_API_KEY

  const client = new Client({
    auth: apiKey
  })

  return client
}

/**
 * Notionデータベースからプロジェクトデータを取得
 * @param {string} databaseId - NotionデータベースのID
 * @returns {Promise<Array>} プロジェクトデータの配列
 */
export async function getProjectsFromNotion(databaseId) {
  try {
    const notion = getNotionClient()

    // Step 1: データベース情報を取得してdata_source_idを取得
    const dbInfo = await notion.databases.retrieve({
      database_id: databaseId
    })

    if (!dbInfo.data_sources || dbInfo.data_sources.length === 0) {
      throw new Error('データベースにdata sourceが見つかりません')
    }

    const dataSourceId = dbInfo.data_sources[0].id

    // Step 2: data sourceをクエリ
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId
    })

    // Notionのデータを整形
    const projects = response.results.map(page => {
      const properties = page.properties

      // タイトルの取得
      const title =
        properties.Name?.title?.[0]?.plain_text ||
        properties.Title?.title?.[0]?.plain_text ||
        '無題'

      // 説明文の取得
      const description =
        properties.Description?.rich_text?.[0]?.plain_text ||
        properties.説明?.rich_text?.[0]?.plain_text ||
        ''

      // 画像の取得
      let thumbnail = '/images/no-image.png' // デフォルト画像

      // カバー画像がある場合
      if (page.cover) {
        if (page.cover.type === 'external') {
          thumbnail = page.cover.external.url
        } else if (page.cover.type === 'file') {
          thumbnail = page.cover.file.url
        }
      }
      // プロパティに画像がある場合
      else if (properties.Image?.files?.[0]) {
        const imageFile = properties.Image.files[0]
        if (imageFile.type === 'external') {
          thumbnail = imageFile.external.url
        } else if (imageFile.type === 'file') {
          thumbnail = imageFile.file.url
        }
      }
      // プロパティに画像URLがある場合
      else if (properties.ImageURL?.url) {
        thumbnail = properties.ImageURL.url
      }

      return {
        id: page.id,
        title,
        thumbnail,
        description
      }
    })

    return projects
  } catch (error) {
    console.error('Notion APIエラー:', error)
    throw new Error(`Notionからデータを取得できませんでした: ${error.message}`)
  }
}

/**
 * Projectsページ用のデータを取得
 */
export async function getProjects() {
  const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID
  if (!databaseId) {
    throw new Error('NOTION_PROJECTS_DATABASE_IDが設定されていません')
  }
  return await getProjectsFromNotion(databaseId)
}

/**
 * Developmentページ用のデータを取得
 */
export async function getDevelopmentProjects() {
  const databaseId = process.env.NOTION_DEVELOPMENT_DATABASE_ID
  if (!databaseId) {
    throw new Error('NOTION_DEVELOPMENT_DATABASE_IDが設定されていません')
  }
  return await getProjectsFromNotion(databaseId)
}
