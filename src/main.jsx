import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/base/globals.css"
import "./styles/layout/app.css"
import "./styles/components/card.css"
import "./styles/components/forecast.css"
import "./styles/components/search.css"
import "./styles/components/extra.css"
import "./styles/components/buttons.css"
import "./styles/animations/clouds.css"





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
