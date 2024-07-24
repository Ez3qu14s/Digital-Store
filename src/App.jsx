import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Produtos from './Pages/Products';
import Produto from './Pages/Product';

import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path='/produto/:id' element={<Produto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
