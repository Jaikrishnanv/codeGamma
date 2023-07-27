import React, { useState } from 'react';
import productsData from '../productsData';


const ProductList = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === 'All' ? productsData : productsData.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h2>Product List</h2>
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Fashion">Fashion</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;