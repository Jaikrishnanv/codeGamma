import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './compenents/Header';
import Footer from './compenents/Footer';
import LandingPage from './compenents/LandingPage';
import ProductPage from './compenents/ProductPage';
import CartPage from './compenents/CartPage';
import './App.css'

const App = () => {
  const products = [
    { id: 1, name: 'Product 1', category: 'Fashion', price: 567 },
    { id: 2, name: 'Product 2', category: 'Home Appliances', price: 459 },
    { id: 3, name: 'Product 3', category: 'Electronics', price:  234},
    { id: 4, name: 'Product 4', category: 'Beauty', price: 567 },
    { id: 5, name: 'Product 5', category: 'Furniture', price: 678 },
  ];

  const [filteredCategory, setFilteredCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<LandingPage
          products={products}
          filteredCategory={filteredCategory}
          setFilteredCategory={setFilteredCategory}
        />} />
        <Route
          path="/product/:id"
          element={<ProductPage
            products={products}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />}
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;