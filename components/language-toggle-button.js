import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggleButton = () => {
  const { locale, toggleLocale } = useLanguage()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={locale}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle language"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {locale === 'en' ? '🇯🇵' : '🇺🇸'}
            </span>
          }
          onClick={toggleLocale}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default LanguageToggleButton
