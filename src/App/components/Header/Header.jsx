import React from 'react';
import './Header.css';

export default function Header(props){
  return (
    <header id='header'>
      <div className='header-logo-temp'>logo</div>
      <nav>
        <a>Home</a>
        <a>About</a>
        <a>Factoids & Tools</a>
        <a>Product Inquiries</a>
        <a>Contact</a>
      </nav>
    </header>
  );
}
