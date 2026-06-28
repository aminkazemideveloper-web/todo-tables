import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/colors.css'
import './styles/typography.css'

import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { StrictMode } from 'react'
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx'
import { ErrorBoundary } from 'react-error-boundary'
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorPage/>}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ErrorBoundary>
  </StrictMode>
  ,
)
