import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductCard from './components/product-card/ProductCard';
// alias
import { products as ProductData } from './data/products';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage'
import ProductList from './pages/product-list/ProductList'
import NotFound from './pages/not-found/NotFound';
function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  useEffect(() => { }, []);
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<ProductList />} />
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
