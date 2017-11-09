import React, { Component } from 'react';
import './ProductInquiry.css';
/* Components */
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const ACTUATOR = 'Actuator'
    , DUST_COLLECTOR = 'Dust Collector'
    , INSTRUMENTATION = 'Instrumentation'
    , VALVE = 'Valve';

function Actuator(props){
  return (
    <Card>
      <CardHeader
        title={props.type}
      />
    </Card>
  );
}

function DustCollector(props){
  return (
    <Card>
      <CardHeader
        title={props.type}
      />
    </Card>
  );
}

function Instrumentation(props){
  return (
    <Card>
      <CardHeader
        title={props.type}
      />
    </Card>
  );
}

const Valve = Instrumentation;

export default class ProductInquiry extends Component {
  constructor(props){
    super(props);
    this.state = {
      temporaryItem: null,
      itemCreatorOn: false,
      itemList: [
        {
          item_type: 'Actuator',
          valve_size: 18,
          valve_additional_information: "It's a stainless steel ball valve.",
          torque: 46,
          return_type: 'Double Acting | Water',
          stem_dimensions: 'Double D',
          stem_additional_information: 'idk',
          additional_information: 'The last actuator I had got a lot of wear and tear, can you make a cover for this one?'
        },
        {
          item_type: 'Dust Collector',
          particulate_types: ['Wood', 'Metal', 'Sticky'],
          particulate_size: 125,
          temperature: 260,
          additional_information: 'Our process leaves a huge mess in the air, make sure this works!'
        },
        {
          item_type: 'Instrumentation',
          process: 'Water',
          temperature: 1080,
          pressure: 130,
          pipe_size: 13,
          pipe_additional_information: 'The pipe is plastic, is that a problem??',
          additional_information: 'I like cats- Oh, you meant about the instrumentation... I got nothing.'
        },
        {
          item_type: 'Valve',
          process: 'Chlorine Gas',
          temperature: 240,
          pressure: 200,
          pipe_size: 15,
          pipe_additional_information: 'Stainless Steel.',
          additional_information: 'This stuff is highly toxic! You better get me one that works!'
        }
      ] // Will be moved to the inquiries reducer
    };
  }

  startNewItem(){
    this.setState({
      temporaryItem: {},
      itemCreatorOn: true
    })
  };

  render(){
    const itemList = this.state.itemList;
    const displayItems = itemList.map((item, index)=>{
      switch(item.item_type){
        case ACTUATOR:
          return <Actuator type={item.item_type} key={index}/>;
        case DUST_COLLECTOR:
          return <DustCollector type={item.item_type} key={index}/>;
        case INSTRUMENTATION:
          return <Instrumentation type={item.item_type} key={index}/>;
        case VALVE:
          return <Valve type={item.item_type} key={index}/>;
        default:
          return null;
      }
    });
    return (
      <main id='product-inquiry'>
        {displayItems}
      </main>
    )
  }
};
