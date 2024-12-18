import React, { useState, useEffect } from 'react'

const PlanerkaWidget = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark as client-side rendering
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Render nothing on the server
    return null
  }

  return (
    <>
      <div
        className="app-planerka-embed"
        data-planerka-embed="default"
        data-planerka-url="https://planerka.app/meet"
        data-planerka-user="german-leontiev"
        data-planerka-event="30"
      ></div>
      <script src="https://planerka.app/meet/assets/external/embed.js?v=0.1"></script>
    </>
  )
}

export default PlanerkaWidget
