/**
 * 翻訳テキストを取得するヘルパー関数
 * @param {Object} translations - 翻訳オブジェクト
 * @param {string} key - ドット記法のキー（例: "sections.work.title"）
 * @param {Object} variables - 置換する変数（例: {name: "Koki"}）
 * @returns {string} 翻訳されたテキスト
 */
export const t = (translations, key, variables = {}) => {
  const keys = key.split('.')
  let result = translations

  for (const k of keys) {
    if (result && typeof result === 'object') {
      result = result[k]
    } else {
      return key // キーが見つからない場合はキー自体を返す
    }
  }

  if (typeof result !== 'string') {
    return key
  }

  // 変数を置換（例: "Hello {name}" -> "Hello Koki"）
  return result.replace(/\{(\w+)\}/g, (match, variable) => {
    return variables[variable] !== undefined ? variables[variable] : match
  })
}

/**
 * リンク付きテキストを処理するヘルパー関数
 * @param {string} text - 処理するテキスト
 * @param {Object} links - リンクオブジェクト（例: {inkdrop: <Link>Inkdrop</Link>}）
 * @returns {Array} React要素の配列
 */
export const tWithLinks = (text, links = {}) => {
  const parts = []
  let lastIndex = 0
  const regex = /\{(\w+)\}/g
  let match

  while ((match = regex.exec(text)) !== null) {
    // マッチ前のテキストを追加
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }

    // リンクコンポーネントを追加
    const key = match[1]
    if (links[key]) {
      parts.push(links[key])
    } else {
      parts.push(match[0])
    }

    lastIndex = regex.lastIndex
  }

  // 残りのテキストを追加
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts
}
