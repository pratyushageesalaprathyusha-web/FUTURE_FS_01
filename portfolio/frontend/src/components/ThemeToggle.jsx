import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-accent-violet/60 transition-colors"
    >
      {theme === 'dark' ? <FiSun className="text-accent-gold" size={16} /> : <FiMoon className="text-accent-violet" size={16} />}
    </button>
  )
}
