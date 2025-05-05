import React from 'react'
import { useDarkMode } from './context/themeContext'
import { Moon, Sun } from 'lucide-react'

const App = () => {
  const { darkMode, setDarkMode } = useDarkMode()

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center dark:bg-gray-900 transition-colors duration-500'>
      <h1 className='text-5xl mb-20 dark:text-white'>Dark Mode Toggler</h1>
      <button
        className='bg-gray-200 dark:bg-gray-800 p-4 rounded-full cursor-pointer'
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun size={24} className='text-yellow-400' /> : <Moon size={24} className='text-blue-700' />}
      </button>
    </div>
  )
}

export default App
