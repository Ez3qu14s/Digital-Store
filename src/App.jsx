import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Produtos from './Pages/Products';
import Produto from './Pages/Product'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path='/produto/:id' element={<Produto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
