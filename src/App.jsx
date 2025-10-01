// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components/Pages
import Login from './pages/Login.jsx'

// Stylesheets
import './css/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
