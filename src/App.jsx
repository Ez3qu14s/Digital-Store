import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Produtos from './Pages/Products';
import Produto from './Pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/produtos" Component={Produtos} />
        <Route path="/produto/:id" Component={Produto} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
