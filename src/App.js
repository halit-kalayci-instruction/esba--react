import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductCard from './components/product-card/ProductCard';
// alias
import { products as ProductData } from './data/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage'
import ProductList from './pages/product-list/ProductList'
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ürünleri çek...
    setProducts(ProductData);
  }, []);

  const addProductToCart = (productName) => {
    console.log(productName + " added to cart.");
  }

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/products' element={<ProductList />}></Route>
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
