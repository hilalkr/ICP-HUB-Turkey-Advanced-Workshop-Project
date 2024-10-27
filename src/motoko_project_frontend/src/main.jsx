import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // Sadece index.css'i import edin, index.scss'i kaldırın

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
