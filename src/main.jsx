import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Color from './enum/colors.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode
    style={{
      backgroundColor: Color.primary,
    }}
  >
    <App />
  </StrictMode>,
)
