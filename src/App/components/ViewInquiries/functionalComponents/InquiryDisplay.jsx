import React, { Component } from 'react';
/* Components */
import {Card, CardText, CardTitle} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import ItemDisplay from './ItemDisplay';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import Archive from 'material-ui/svg-icons/content/archive';
import Unarchive from 'material-ui/svg-icons/content/unarchive';
import Delete from 'material-ui/svg-icons/action/delete';

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

function displayInquiryList
  (inquiryList,
  inquiryContents,
  inquiryContentsOn,
  inquiryContentsOff,
  updateInquiryContents,
  viewInquiryContentsOn){
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
          expanded={
            viewInquiryContentsOn &&
            inquiryContents[0] &&
            inquiryContents[0].inquiry_id === inquiry_id
          }
        >
          <AppBar
            title={`${name} - ${months[standardDate.getMonth()]} ${standardDate.getDate()}, ${standardDate.getFullYear()}`}
            iconElementLeft={
              <IconButton
                onClick={()=>{
                  if(viewInquiryContentsOn &&
                  inquiryContents[0] &&
                  inquiryContents[0].inquiry_id === inquiry_id){
                    updateInquiryContents(0);
                    inquiryContentsOff();
                  }else{
                    updateInquiryContents(inquiry_id);
                    inquiryContentsOn()
                  }
                }}
              >
                {
                  viewInquiryContentsOn &&
                  inquiryContents[0] &&
                  inquiryContents[0].inquiry_id === inquiry_id ?

                  <KeyboardArrowUp/>
                  :
                  <KeyboardArrowDown/>
                }
              </IconButton>
            }
            iconElementRight={
              <IconButton><Archive/></IconButton>
            }

          />
          <CardText>
            {`Email: ${email}`}
          </CardText>
          <CardText>
            {`Phone: ${phone_number}`}
          </CardText>
          <CardText expandable={true}>
            <ItemDisplay inquiryContents={inquiryContents}/>
          </CardText>
        </Card>
      );
    });
    return jsxList;
  }
}

export default function InquiryDisplay(props){
  const {
    inquiryList,
    inquiryContents,
    inquiryContentsOn,
    inquiryContentsOff,
    updateInquiryContents,
    viewInquiryContentsOn
  } = props;
  return(
    <section className='inquiry-display-wrapper'>
      {
        displayInquiryList(
          inquiryList,
          inquiryContents,
          inquiryContentsOn,
          inquiryContentsOff,
          updateInquiryContents,
          viewInquiryContentsOn
        )
      }
    </section>
  );
}
