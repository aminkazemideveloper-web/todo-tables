
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import BoardPage from './pages/BoardPage/BoardPage'
import RootLayout from './layouts/RootLayout/RootLayout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './pages/ErrorPage/ErrorPage'


function App() {


  return (

    <ErrorBoundary fallback={<ErrorPage/>}>

    
    <Routes>
      <Route element={<RootLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="board/:id" element={<BoardPage />} />
      <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </ErrorBoundary>
  )
}

export default App
