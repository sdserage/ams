import React from 'react';
import './Contact.css';

export default function Contact(props){
  return (
    <section id='contact'>
      <h1 className='contact'>Contact</h1>
      <h3>Air Management Specialists</h3>
      <h5>Air Pollution Control / Process Control</h5>
      <div className='contact-info'>
        <p>tel: (xxx) xxx-xxxx</p>
        <p>fax: (xxx) xxx-xxxx</p>
        <p>email: xxxxxxxx@x.com</p>
        <p>000 Xxxxxxxx Circle</p>
        <p>xxxxx City, Utah 00000</p>
      </div>

      <a href='http://www.facebook.com/airmanagementspecialists' target='_blank'>
        Like us on Facebook!
      </a>
    </section>
  );
}
