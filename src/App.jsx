import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home/index';
import Produto from './Pages/Product';
import Produtos from './Pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
