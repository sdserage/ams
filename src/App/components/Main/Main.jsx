import React, { Component } from 'react';
import './Main.css';
import scrollToElement from 'scroll-to-element';

export default class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    scrollToElement(`.${this.props.view}`,{
      duration: 10
    });
  }

  render(){
    return (
      <div>
        <div className='test home'>Home</div>
        <div className='test about'>About</div>
        <div className='test contact'>Contact</div>
      </div>
    )
  }
};
