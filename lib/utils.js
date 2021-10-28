import { useRouter } from 'next/router'
import * as en from '../locales/en'
import * as es from '../locales/es'
const lang = page => {
  const router = useRouter()
  const { locale } = router
  const tAux = locale === 'en' ? en : es
  const t = tAux[page]
  return t
}
export default lang
