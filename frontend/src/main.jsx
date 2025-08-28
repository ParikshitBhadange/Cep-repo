import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Set initial theme based on system preference
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme')
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const theme = savedTheme || systemTheme
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)