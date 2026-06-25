
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import BoardPage from './pages/BoardPage/BoardPage'


function App() {


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="board" element={<BoardPage />} />
    </Routes>
  )
}

export default App
