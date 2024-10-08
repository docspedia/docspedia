import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
