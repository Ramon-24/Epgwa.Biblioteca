import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/Home/App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      {/* <App />  */}
      <Route path="/login" element={ < Login /> } />
    </Routes>
    </BrowserRouter>
  // </StrictMode>,
)
// function App () {
//   return(
//   )
// }