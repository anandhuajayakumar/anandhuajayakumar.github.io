import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SheetDataProvider } from './Contexts/SheetDataContext.jsx'
import { BannedBookContextProvider } from './Contexts/BannedBookContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SheetDataProvider>
      <BannedBookContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BannedBookContextProvider>
    </SheetDataProvider>
  </StrictMode>,
)
