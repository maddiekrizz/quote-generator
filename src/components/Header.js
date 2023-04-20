

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      
      <h1>Quote Generator</h1>
      <nav>
        <ul>
          <li><Link exact to="/home"></Link></li>
          <li><Link to="/"></Link></li>
          <li><Link to="/contact"></Link></li>
                   
        </ul>
        
    
      </nav>
    </header>
  );
}

export default Header;
