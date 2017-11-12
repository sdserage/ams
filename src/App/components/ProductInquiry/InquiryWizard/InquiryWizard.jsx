import React, {Component} from 'react';
import './InquiryWizard.css';
/* Components */
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

export default class InquiryWizard extends Component{
  constructor(){
    super();
    this.state = {
      item: null
    };
  }

  render(){
    return(
      <section className='inquiry-wizard'>
        test

      </section>
    );
  }
};
