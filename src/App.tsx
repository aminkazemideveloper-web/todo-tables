
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import BoardPage from './pages/BoardPage/BoardPage'
import RootLayout from './layouts/RootLayout/RootLayout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'



function App() {
  return (
    <Routes>
      <Route element={<RootLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="board/:id" element={<BoardPage />} />
      <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
export default App
