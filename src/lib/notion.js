import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

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
 * NotionToMarkdownインスタンスを取得
 */
function getNotionToMarkdown() {
  const notion = getNotionClient()
  return new NotionToMarkdown({ notionClient: notion })
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

/**
 * Notionページのコンテンツをマークダウンとして取得
 * @param {string} pageId - NotionページのID
 * @returns {Promise<string>} マークダウン形式のコンテンツ
 */
export async function getPageContent(pageId) {
  try {
    const n2m = getNotionToMarkdown()

    // ページのブロックを取得してマークダウンに変換
    const mdblocks = await n2m.pageToMarkdown(pageId)

    // 目次ブロックを除外
    const filteredBlocks = mdblocks.filter(block => {
      // table_of_contentsブロックを除外
      return block.type !== 'table_of_contents'
    })

    const mdString = n2m.toMarkdownString(filteredBlocks)
    let content = mdString.parent || ''

    // デバッグ: 最初の200文字をログ出力
    console.log(
      'Original content (first 200 chars):',
      content.substring(0, 200)
    )

    // マークダウンから「目次」を含む行を削除（複数パターンに対応）
    // パターン1: 見出しとしての目次
    content = content.replace(/^#+\s*目次.*$/gm, '')
    // パターン2: 目次セクション全体（見出し + その後のリンク）
    content = content.replace(/^#+\s*目次.*\n([\s\S]*?)(?=\n#+\s|\n\n|$)/m, '')
    // パターン3: 単独の「目次」を含むテキスト行（コールアウトなど）
    content = content.replace(/^>\s*.*目次.*$/gm, '')
    // パターン4: 任意の「目次」を含む行
    content = content.replace(/^.*目次.*$/gm, '')

    // マークダウンから「詳細」を含む行を削除（複数パターンに対応）
    // パターン1: 見出しとしての詳細（任意のレベル、前後の空白も含む）
    content = content.replace(/^#+\s*詳細\s*$/gm, '')
    // パターン2: 見出しとしての詳細（任意の文字が続く場合も）
    content = content.replace(/^##\s*詳細$/gm, '')
    // パターン3: 単独の「詳細」テキスト行
    content = content.replace(/^\s*詳細\s*$/gm, '')
    // パターン4: コールアウトなどの「詳細」
    content = content.replace(/^>\s*.*詳細.*$/gm, '')
    // パターン5: 行全体をチェックして「詳細」のみの行を削除
    const lines = content.split('\n')
    const filteredLines = lines.filter((line, index) => {
      const trimmed = line.trim()
      // 「## 詳細」または「詳細」のみの行を除外
      if (
        trimmed === '## 詳細' ||
        trimmed === '### 詳細' ||
        trimmed === '# 詳細' ||
        trimmed === '詳細'
      ) {
        console.log(`Removing line ${index}: "${line}"`)
        return false
      }
      return true
    })
    content = filteredLines.join('\n')

    // 連続する空行を1つにまとめる
    content = content.replace(/\n\n\n+/g, '\n\n')

    // デバッグ: 処理後の最初の200文字をログ出力
    console.log(
      'Filtered content (first 200 chars):',
      content.substring(0, 200)
    )

    return content.trim()
  } catch (error) {
    console.error('ページコンテンツ取得エラー:', error)
    return ''
  }
}

/**
 * ページの基本情報とコンテンツを取得
 * @param {string} pageId - NotionページのID
 * @returns {Promise<object>} ページ情報とコンテンツ
 */
export async function getPageWithContent(pageId) {
  try {
    const notion = getNotionClient()

    // ページの基本情報を取得
    const page = await notion.pages.retrieve({ page_id: pageId })

    // コンテンツを取得
    const content = await getPageContent(pageId)

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
    let thumbnail = '/images/no-image.png'

    if (page.cover) {
      if (page.cover.type === 'external') {
        thumbnail = page.cover.external.url
      } else if (page.cover.type === 'file') {
        thumbnail = page.cover.file.url
      }
    } else if (properties.Image?.files?.[0]) {
      const imageFile = properties.Image.files[0]
      if (imageFile.type === 'external') {
        thumbnail = imageFile.external.url
      } else if (imageFile.type === 'file') {
        thumbnail = imageFile.file.url
      }
    } else if (properties.ImageURL?.url) {
      thumbnail = properties.ImageURL.url
    }

    // タグの取得（もしあれば）
    const tags = []
    if (properties.Tags?.multi_select) {
      properties.Tags.multi_select.forEach(tag => {
        tags.push({
          name: tag.name,
          color: tag.color
        })
      })
    }

    return {
      id: page.id,
      title,
      thumbnail,
      description,
      content,
      tags
    }
  } catch (error) {
    console.error('ページ情報取得エラー:', error)
    throw new Error(`ページ情報を取得できませんでした: ${error.message}`)
  }
}
