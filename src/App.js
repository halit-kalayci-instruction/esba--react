import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductCard from './components/product-card/ProductCard';


function App() {

  useEffect(() => {
    // ürünleri çek...
  }, []);

  const addProductToCart = (productName) => {
    console.log(productName + " added to cart.");
  }

  return (
    <div className="App">
      <Navbar />
      <ProductCard addToCart={addProductToCart} productName="Ürün 1" />
      <ProductCard addToCart={addProductToCart} productName="Ürün 2" />
      <ProductCard addToCart={addProductToCart} productName="Ürün 3" />
      <ProductCard addToCart={addProductToCart} productName="Ürün 4" />
      <ProductCard addToCart={addProductToCart} productName="Ürün 5" />
    </div>
  );
}

export default App;
