import { useEffect } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import api from '../../Services/api';
// import { Login } from '../../Components/Login.jsx';

export default function App() {
  async function concBack() {
    conect = await api.get('/')
  };
  useEffect(() => {
    concBack()
  });

  // return (
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/login" element={ < Login /> } />
  //   </Routes>
  //   </BrowserRouter>
  // )
};
