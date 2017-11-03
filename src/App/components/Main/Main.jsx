import React, { Component } from 'react';
import './Main.css';
import scrollToElement from 'scroll-to-element';
/* Components */
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';

export default class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    scrollToElement(`#${this.props.view}`,{
      duration: 10
    });
  }

  render(){
    return (
      <main id='main'>
        <Home/>
        <About/>
        <Contact/>
      </main>
    )
  }
};
