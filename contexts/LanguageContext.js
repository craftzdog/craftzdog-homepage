import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en')
  const [translations, setTranslations] = useState({})

  useEffect(() => {
    // ローカルストレージから言語設定を読み込む（ブラウザのみ）
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'ja')) {
        setLocale(savedLocale)
      }
    }
  }, [])

  useEffect(() => {
    // 言語が変更されたらローカルストレージに保存（ブラウザのみ）
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale)
    }
  }, [locale])

  const loadTranslations = async (namespace) => {
    if (translations[locale]?.[namespace]) {
      return translations[locale][namespace]
    }

    try {
      const data = await import(`../locales/${locale}/${namespace}.json`)
      setTranslations(prev => ({
        ...prev,
        [locale]: {
          ...prev[locale],
          [namespace]: data.default
        }
      }))
      return data.default
    } catch (error) {
      console.error(`Failed to load translations for ${locale}/${namespace}`, error)
      return {}
    }
  }

  const toggleLocale = () => {
    setLocale(prev => prev === 'en' ? 'ja' : 'en')
  }

  const value = {
    locale,
    setLocale,
    toggleLocale,
    loadTranslations,
    translations: translations[locale] || {}
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
