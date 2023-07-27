import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemsCount }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItemsCount})</Link>
      </nav>
      <div>
        <h1>My E-Commerce App</h1>
      </div>
    </header>
  );
};

export default Header;