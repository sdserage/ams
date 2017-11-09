import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

export default function Footer(props){
  return (
    <footer id='footer'>
      <nav>
        <div className='footer-box'>
          <Link to='/'>
            <h3>Home</h3>
          </Link>
          <Link to='/about'>
            <p>About</p>
          </Link>
          <Link to='/contact'>
            <p>Contact</p>
          </Link>
        </div>
        <div className='footer-box'>
          <Link to='/factoidsandtools'>
            <h3>Factoids & Tools</h3>
          </Link>
        </div>
        <div className='footer-box'>
          <Link to='/productinquiry'>
            <h3>Product Inquiry</h3>
          </Link>
        </div>
      </nav>
      <h4 className='design-info'>Serage Web Design 2017&trade;</h4>
    </footer>
  );
}
