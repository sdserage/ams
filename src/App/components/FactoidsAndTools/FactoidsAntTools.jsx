import React, { Component } from 'react';
import './FactoidsAndTools.css';
import scrollToElement from 'scroll-to-element';
/* Components */

export default class FactoidsAndTools extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // scrollToElement(`#${this.props.view}`,{
    //   duration: 10
    // });
  }

  render(){
    return (
      <main id='factoids-and-tools'>
        Factoids & Tools
      </main>
    )
  }
};
