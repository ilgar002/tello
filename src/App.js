import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import Products from './Pages/Products/Products';
import Details from "./Pages/Details/Details";
import Cart from './Pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import SearchResults from './Pages/SearchResults/SearchResults';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:slug' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/search-results/:query' element={<SearchResults />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App