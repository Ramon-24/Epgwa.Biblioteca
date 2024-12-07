import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/Home/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Cadastro from './Components/Cadastro'
import Home from './Components/Home'
import Loan from './Components/Loan'
import Loans from './Components/Loans'
import Atrasos from './Components/Atrasos'
import Configuracao from './Components/Configuracao'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <App />  */}
        <Route path="/" element={< Login />} />
        <Route path="/cad_aluno" element={<Cadastro/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/emprestimos" element={<Loan/>} />
        <Route path="/emprestimo" element={<Loans/>} />
        <Route path="/atraso" element={<Atrasos/>} />
        <Route path="/config" element={<Configuracao/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
