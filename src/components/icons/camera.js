import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const CameraIcon = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // デフォルトはダークモード
  const isDark = mounted ? theme === 'dark' : true

  // ライトモード: 黒、ダークモード: 白
  const bodyColor = isDark ? '#FFFFFF' : '#2D3748'
  const lensStroke = isDark ? '#2D3748' : '#FFFFFF'
  const lensInnerColor = isDark ? '#2D3748' : '#FFFFFF'
  const lensGlowColor = isDark ? 'rgba(45,55,72,0.3)' : 'rgba(255,255,255,0.3)'

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* レンズの光沢効果 */}
        <radialGradient id="lensGlow" cx="30%" cy="30%">
          <stop offset="0%" stopColor={lensGlowColor} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* カメラ本体 */}
      <path
        d="M6.5 3L5 5H2C1.46957 5 0.960859 5.21071 0.585786 5.58579C0.210714 5.96086 0 6.46957 0 7V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5H15L13.5 3H6.5Z"
        fill={bodyColor}
        className="camera-body"
      />

      {/* レンズ外側のリング */}
      <circle
        cx="10"
        cy="11"
        r="3.5"
        fill="none"
        stroke={lensStroke}
        strokeWidth="1.5"
        className="camera-lens"
      />

      {/* レンズ内側 */}
      <circle
        cx="10"
        cy="11"
        r="2"
        fill={lensInnerColor}
        className="camera-lens-inner"
      />

      {/* レンズの光沢 */}
      <circle
        cx="10"
        cy="11"
        r="2"
        fill="url(#lensGlow)"
        className="camera-lens-glow"
      />

      {/* シャッターボタン（小さな装飾） */}
      <circle cx="15.5" cy="7.5" r="0.8" fill={lensStroke} opacity="0.8" />
    </svg>
  )
}

export default CameraIcon
