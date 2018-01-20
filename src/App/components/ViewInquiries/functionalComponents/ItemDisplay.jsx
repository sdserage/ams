import React, { Component } from 'react';
/* Components */
import {Card, CardText} from 'material-ui/Card';
import Actuator from '../../ProductInquiry/functionalComponents/Actuator';
import DustCollector from '../../ProductInquiry/functionalComponents/DustCollector';
import Instrumentation from '../../ProductInquiry/functionalComponents/Instrumentation';

const ACTUATOR = 'Actuator'
    , DUST_COLLECTOR = 'Dust Collector'
    , INSTRUMENTATION = 'Instrumentation'
    , VALVE = 'Valve'
    , Valve = Instrumentation;

function MappedItems(inquiryContents){
  return inquiryContents.map((item, index)=>{
    switch(item.item_type){
      case ACTUATOR:
        return <Actuator
                item={item}
                key={index}
                index={index}/>;
      case DUST_COLLECTOR:
        return <DustCollector
                item={item}
                key={index}
                index={index}/>;
      case INSTRUMENTATION:
        return <Instrumentation
                item={item}
                key={index}
                index={index}/>;
      case VALVE:
        return <Valve
                item={item}
                key={index}
                index={index}/>;
      default:
        return null;
    }
  });
}

export default function ItemDisplay(props){
  const {inquiryContents} = props;
  return(
    <div
      className='inquiry-item-display-contents'
    >
      <h2 className='inquiry-item-display-heading'>Inquiry Items:</h2>
      {MappedItems(inquiryContents)}
    </div>
  );
}
