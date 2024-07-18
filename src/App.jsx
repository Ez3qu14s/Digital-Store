import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Products from './Pages/Products';
import Product from './Pages/Product'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path='/produto/:nome' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
