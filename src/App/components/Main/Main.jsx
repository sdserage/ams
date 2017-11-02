import React, { Component } from 'react';
import './Main.css';
//import Scroll from 'react-scroll';
import scrollToElement from 'scroll-to-element';

export default class Main extends Component {
  constructor(props){
    super(props);
  }
  // let scroll = Scroll.animateScroll;
  //
  // let scrollToBottom = function() {
  //   scroll.scrollToBottom();
  // };
  //
  // let scroller = Scroll.scroller;
  //
  // scroller.scrollTo('about', {
  //     duration: 1500,
  //     delay: 100,
  //     smooth: true,
  //     //containerId: ,
  //     //offset:

  // });
  componentDidMount(){
    console.log(`.${this.props.view}`)
    scrollToElement(`.${this.props.view}`,{
      duration: 10
    });
  }

  render(){
    return (
      <div>
        <div className='test' name='home'>Home</div>
        <div className='test about' name='about'>About</div>
        <div onClick={()=>{}} className='test contact'name='contact'>Contact</div>
      </div>
    )
  }
};
