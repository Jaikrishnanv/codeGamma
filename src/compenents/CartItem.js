import React from 'react';

const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
      <button onClick={() => increaseQuantity(item.id)}>+</button>
      <button onClick={() => decreaseQuantity(item.id)}>-</button>
    </div>
  );
};

export default CartItem;