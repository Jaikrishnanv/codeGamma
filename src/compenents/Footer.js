import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>   © {new Date().getFullYear()} CODE GAMMA. All rights reserved.   </p>
      </div>
    </footer>
  );
};

export default Footer;