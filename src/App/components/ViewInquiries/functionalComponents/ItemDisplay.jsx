import React, { Component } from 'react';
/* Components */
import {Card, CardText} from 'material-ui/Card';

export default function ItemDisplay(props){
  const {inquiryList} = props;
  console.log('hello')
  return(
    <Card
      className='inquiry-item-display'
    >
      item display
    </Card>
  );
}
