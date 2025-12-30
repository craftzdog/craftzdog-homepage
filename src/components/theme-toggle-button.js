import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const SunIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
)

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex items-center gap-0 rounded-full p-1 cursor-pointer transition-all duration-300 hover:opacity-80"
      style={{
        backgroundColor: isDark ? '#4A5568' : '#FFA500'
      }}
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <div
        className="relative z-[2] flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
        style={{
          backgroundColor: !isDark ? 'white' : 'transparent',
          color: !isDark ? '#FFA500' : 'rgba(255, 255, 255, 0.7)'
        }}
      >
        <SunIcon />
      </div>

      {/* Moon Icon */}
      <div
        className="relative z-[2] flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
        style={{
          backgroundColor: isDark ? 'white' : 'transparent',
          color: isDark ? '#4A5568' : 'rgba(255, 255, 255, 0.7)'
        }}
      >
        <MoonIcon />
      </div>
    </button>
  )
}

export default ThemeToggleButton
