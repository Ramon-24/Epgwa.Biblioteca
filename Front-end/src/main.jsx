import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/Home/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Cadastro from './Components/Cadastro'
import Home from './Components/Home'
import Loan from './Components/Loan'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <App />  */}
        <Route path="/" element={< Login />} />
        <Route path="/cad_aluno" element={<Cadastro/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/emprestimos" element={<Loan/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)