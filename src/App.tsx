
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import BoardPage from './pages/BoardPage/BoardPage'
import RootLayout from './layouts/RootLayout/RootLayout'


function App() {


  return (
    <Routes>
      <Route element={<RootLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="board/:id" element={<BoardPage />} />
      </Route>
    </Routes>
  )
}

export default App
