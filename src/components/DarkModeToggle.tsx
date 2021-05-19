import {useTheme} from 'next-themes'
import * as React from 'react'

const DarkModeToggle: React.FC = () => {
  const [mounted, setMounted] = React.useState(false)
  const {theme, setTheme} = useTheme()
  React.useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <div>
          {theme === 'dark' ? <span>Light Mode</span> : <span>Dark Mode</span>}
        </div>
      )}
    </button>
  )
}

export default DarkModeToggle
