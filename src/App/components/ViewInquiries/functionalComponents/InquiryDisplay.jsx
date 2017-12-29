import React, { Component } from 'react';
/* Components */
import {Card, CardText, CardTitle} from 'material-ui/Card';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function displayInquiryList(inquiryList){
  if(inquiryList){
    const jsxList = inquiryList.map((inquiry, index)=>{
      const {
        date,
        name,
        email,
        phone_number,
        inquiry_id,
        is_archived
      } = inquiry;
      const standardDate = new Date(date);
      return(
        <Card
          key={index}
          zDepth={3}
          className='inquiry-display-box'
        >
          <CardText>
            {`Date: ${months[standardDate.getMonth()]} ${standardDate.getDate()}, ${standardDate.getFullYear()}`}
          </CardText>
          <CardText>
            {`Name: ${name}`}
          </CardText>
          <CardText>
            {`Email: ${email}`}
          </CardText>
          <CardText>
            {`Phone: ${phone_number}`}
          </CardText>
          <CardText expandable={true} expanded={false}>
            test
          </CardText>
        </Card>
      );
    });
    return jsxList;
  }
}

export default function InquiryDisplay(props){
  const {inquiryList} = props;
  return(
    <section className='inquiry-display-wrapper'>
      {displayInquiryList(inquiryList)}
    </section>
  );
}
