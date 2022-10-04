import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import Products from './Pages/Products/Products';
import Details from "./Pages/Details/Details";
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:slug' element={<Products />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App