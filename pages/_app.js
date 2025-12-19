import { Analytics } from '@vercel/analytics/react'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import Payhip from '../components/payhip'
import { LanguageProvider } from '../contexts/LanguageContext'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Payhip />
      <LanguageProvider>
        <Layout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Analytics />
        </Layout>
      </LanguageProvider>
    </Chakra>
  )
}

export default Website
