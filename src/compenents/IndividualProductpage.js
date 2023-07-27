import React from 'react';

const IndividualProductPage = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default IndividualProductPage;
