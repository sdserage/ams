import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

export default function Footer(props){
  return (
    <footer id='footer'>
      <nav>
        <div className='footer-box'>
          <h3>Home</h3>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className='footer-box'>
          <h3>Factoids & Tools</h3>
        </div>
        <div className='footer-box'>
          <h3>Product Inquiry</h3>
        </div>
      </nav>
      <h4 className='design-info'>Serage Web Design 2017</h4>
    </footer>
  );
}
