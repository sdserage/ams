import React from 'react';
import './Header.css';
import logo from './logo.svg';
import {Link} from 'react-router-dom';

export default function Header(props){
  return (
    <div id='top'>
      <header id='header'>
        <Link to='/viewinquiries'>
          <img src={logo} alt='logo'/>
        </Link>
        <nav>
          <Link to='/'>
            <p>Home</p>
          </Link>

          <Link to='/about'>
            <p>About</p>
          </Link>

          <Link to='/contact'>
            <p>Contact</p>
          </Link>
          {
            false && /* disabled for now */
            <Link to='/factoidsandtools'>
              <p>Factoids & Tools</p>
            </Link>
          }

          <Link to='/productinquiry'>
            <p>Product Inquiry</p>
          </Link>
        </nav>
      </header>
      <div className='header-spacer'></div>
    </div>
  );
}
//<div className='header-logo-temp'>logo</div>
