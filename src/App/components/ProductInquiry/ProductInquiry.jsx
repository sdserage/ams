import React, { Component } from 'react';
import './ProductInquiry.css';
import {White} from 'material-ui/styles/colors';
import {connect} from 'react-redux';

/* Components */
import InquiryWizard from './InquiryWizard/InquiryWizard';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

const ACTUATOR = 'Actuator'
    , DUST_COLLECTOR = 'Dust Collector'
    , INSTRUMENTATION = 'Instrumentation'
    , VALVE = 'Valve';

function ControlButtons(props){
  const {
    submitItems,
    addNewItem
  } = props;
  return (
    <div  className='control-buttons'>
      <RaisedButton label='+ Add' secondary={true} onClick={()=> addNewItem()}/>
      <RaisedButton primary={true} onClick={()=> submitItems()}>
        SUBMIT
      </RaisedButton>
    </div>
  );
}

function Actuator(props){
  const {
    item_type,
    valve_size,
    valve_additional_information,
    torque,
    return_type,
    stem_dimensions,
    stem_additional_information,
    additional_information
  } = props.item;
  const {deleteItem, index} = props;
  return (
    <Card>
      <div className='card-heading'>
        <h2 className='item-header'>{item_type}</h2>
        <div className='tool-icons'>
          <FontAwesome name='pencil-square-o' className='card-icons'/>
          <FontAwesome name='trash-o' className='card-icons' onClick={()=> deleteItem(index)}/>
        </div>
      </div>
      <div className='card-info'>
        <CardText>
          <span>Valve Size: </span>{valve_size} inch
        </CardText>

        <CardText>
          <span>Torque: </span>{torque} in-lb
        </CardText>

        <div className='double-column'>
          <CardText>
            <span>Valve Additional Information: </span>{valve_additional_information}
          </CardText>
        </div>

        <CardText>
          <span>Stem Dimensions: </span>{stem_dimensions}
        </CardText>

        <CardText>
          <span>Return Type: </span>{return_type}
        </CardText>

        <div className='double-column'>
          <CardText>
            <span>Stem Additional Info: </span>{stem_additional_information}
          </CardText>
        </div>

        <div className='double-column'>
          <CardText>
            <span>Additional Information: </span>{additional_information}
          </CardText>
        </div>
      </div>
    </Card>
  );
}

function DustCollector(props){
  const {
    item_type,
    particulate_types,
    particulate_size,
    temperature,
    additional_information
  } = props.item;
  const {deleteItem, index} = props;
  //N&middot;m</p> : <p>
  return (
    <Card>
      <div className='card-heading'>
        <h2 className='item-header'>{item_type}</h2>
        <div className='tool-icons'>
          <FontAwesome name='pencil-square-o' className='card-icons'/>
          <FontAwesome name='trash-o' className='card-icons' onClick={()=> deleteItem(index)}/>
        </div>
      </div>
      <div className='card-info'>
        <div className='double-column'>
          <CardText>
            <span>Particulate Types: </span>{particulate_types.join(', ').toLowerCase()}
          </CardText>
        </div>

        <CardText>
          <span>Particulate Size: </span>{particulate_size} &micro;m
        </CardText>

        <CardText>
          <span>Temperature: </span>{temperature} &#x2109;
        </CardText>

        <div className='double-column'>
          <CardText>
            <span>Additional Information: </span>{additional_information}
          </CardText>
        </div>
      </div>
    </Card>
  );
}

function Instrumentation(props){
  const {
    item_type,
    process,
    temperature,
    pressure,
    pipe_size,
    pipe_additional_information,
    additional_information
  } = props.item;
  const {deleteItem, index} = props;
  return (
    <Card>
      <div className='card-heading'>
        <h2 className='item-header'>{item_type}</h2>
        <div className='tool-icons'>
          <FontAwesome name='pencil-square-o' className='card-icons'/>
          <FontAwesome name='trash-o' className='card-icons' onClick={()=> deleteItem(index)}/>
        </div>
      </div>
      <div className='card-info'>
        <CardText>
          <span>Process: </span>{process}
        </CardText>

        <CardText>
          <span>Temperature: </span>{temperature} &#x2109;
        </CardText>

        <CardText>
          <span>Pipe Size: </span>NPS {pipe_size} inch
        </CardText>

        <CardText>
          <span>Pressure: </span>{pressure} psi
        </CardText>

        <div className='double-column'>
          <CardText>
            <span>Pipe Additional Information: </span>{pipe_additional_information}
          </CardText>
        </div>

        <div className='double-column'>
          <CardText>
            <span>Additional Information: </span>{additional_information}
          </CardText>
        </div>
      </div>
    </Card>
  );
}

const Valve = Instrumentation;

class ProductInquiry extends Component {
  constructor(props){
    super(props);
    this.state = {
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
    this.deleteItem = this.deleteItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.submitItems = this.submitItems.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  addNewItem(){
    this.setState({
      itemCreatorOn: true
    })
  };

  cancel(){
    this.setState({
      itemCreatorOn: false
    })
  }

  submitItems(){

  }

  deleteItem(index){
    let itemListCopy = this.state.itemList.slice();
    itemListCopy.splice(index, 1);
    this.setState({
      itemList: itemListCopy
    })
  }

  render(){
    const {itemList, itemCreatorOn} = this.state;
    const displayItems = itemList.map((item, index)=>{
      switch(item.item_type){
        case ACTUATOR:
          return <Actuator
                  item={item}
                  key={index}
                  index={index}
                  deleteItem={this.deleteItem}/>;
        case DUST_COLLECTOR:
          return <DustCollector
                  item={item}
                  key={index}
                  index={index}
                  deleteItem={this.deleteItem}/>;
        case INSTRUMENTATION:
          return <Instrumentation
                  item={item}
                  key={index}
                  index={index}
                  deleteItem={this.deleteItem}/>;
        case VALVE:
          return <Valve
                  item={item}
                  key={index}
                  index={index}
                  deleteItem={this.deleteItem}/>;
        default:
          return null;
      }
    });
    return (
      <main id='product-inquiry'>
        <section className={`inquiry-item-display ${!itemList.length && 'disabled'}`}>
          {displayItems}
        </section>
        <ControlButtons addNewItem = {this.addNewItem} submitItems = {this.submitItems}/>
        {
          /*itemCreatorOn*/ true &&
            <div>
              <div className='inquiry-wizard-wrapper'></div>

              <InquiryWizard cancel={this.cancel}/>

            </div>
        }
      </main>
    )
  }
};

function mapStateToProps(state){
  return {
    itemList: state.inquiries.itemList
  }
}

export default connect(mapStateToProps, {})(ProductInquiry);
