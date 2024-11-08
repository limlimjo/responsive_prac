import { BrowserRouter, Routes, Route } from "react-router-dom"
// 페이지 컴포넌트
import MainPage from '@pages/index/index'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<MainPage />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App