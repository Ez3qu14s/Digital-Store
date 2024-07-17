import React from 'react';
import './index.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '/pages/Home/index.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
=======
import Home from './Pages/Home';
function App() {
  return (
    <div>
      <Home/>
    </div>
  )
>>>>>>> 1b74020 (Adicionando componente emAlta)
}

export default App;
