import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Components/Home';
import Product from './Components/Product';
import Detail from './Components/Detail';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/product' exact element={<Product />} />
        <Route path='/:id' exact element={<Detail />} />
        <Route path='/features' exact element={<Features />}/>
        <Route path='/pricing' exact element={<Pricing />}/>
        <Route path='/about' exact element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
