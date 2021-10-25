import { useRouter } from 'next/router'
import Link from 'next/link'

const pathTranslations = {
  es: {
    '/work': '/trabajos'
  }
}

const TranslatedLink = ({ href, children }) => {
  const { locale } = useRouter()
  // Get translated route for non-default locales
  const translatedPath = pathTranslations[locale]?.[href]
  // Set `as` prop to change displayed URL in browser
  const as = translatedPath ? `/${locale}${translatedPath}` : undefined

  return (
    <Link href={href} as={as}>
      {children}
    </Link>
  )
}

export default TranslatedLink
