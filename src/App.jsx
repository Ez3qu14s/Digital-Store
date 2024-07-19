import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Produtos from './Pages/Products';
import Produto from './Pages/Product';
import Carrinho from './Pages/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/produto/:id" element={<Produto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
