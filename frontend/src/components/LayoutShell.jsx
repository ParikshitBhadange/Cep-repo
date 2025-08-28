import { useEffect, useState } from 'react'

const LayoutShell = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-200">
      <main className="pb-20 lg:pb-8">
        {children}
      </main>
    </div>
  )
}

export default LayoutShell