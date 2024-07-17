import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/Home';
=======
import Home from './Pages/Home';
import Header from './Components/Header';
import Produtos from './Pages/Producs';
>>>>>>> f6be98018f8dcfc19aa7757309da7cd73e2ff366

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
