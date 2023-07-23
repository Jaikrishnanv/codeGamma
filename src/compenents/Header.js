import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
};

export default Header;