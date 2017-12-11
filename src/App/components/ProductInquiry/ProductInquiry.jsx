import React, { Component } from 'react';
import './ProductInquiry.css';
import {White} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
/* Components */
import InquiryWizard from './InquiryWizard/InquiryWizard';
import RaisedButton from 'material-ui/RaisedButton';
import Instrumentation from './functionalComponents/Instrumentation';
import DustCollector from './functionalComponents/DustCollector';
import Actuator from './functionalComponents/Actuator';
import ControlButtons from './functionalComponents/ControlButtons';

const ACTUATOR = 'Actuator'
    , DUST_COLLECTOR = 'Dust Collector'
    , INSTRUMENTATION = 'Instrumentation'
    , VALVE = 'Valve'
    , Valve = Instrumentation;

class ProductInquiry extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemCreatorOn: false,
    };
    this.activate = this.activate.bind(this);
    this.submitItems = this.submitItems.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  activate(){
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

  render(){
    const {itemCreatorOn} = this.state;
    const {itemList, deleteItem} = this.props;
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
        <ControlButtons addNewItem = {this.activate} submitItems = {this.submitItems}/>
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
