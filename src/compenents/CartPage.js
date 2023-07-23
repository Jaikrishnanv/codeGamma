import React from 'react';

const CartPage = ({ cartItems, setCartItems }) => {
  const removeFromCart = (itemToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total Price: ${getTotalPrice()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;