import React, { Component } from 'react';
import './ProductInquiry.css';
import {White} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {activate, deactivate} from '../../../ducks/inquiries';
import {resetWizard} from '../../../ducks/wizard';
/* Components */
import InquiryWizard from './InquiryWizard/InquiryWizard';
import RaisedButton from 'material-ui/RaisedButton';
import Instrumentation from './functionalComponents/Instrumentation';
import DustCollector from './functionalComponents/DustCollector';
import Actuator from './functionalComponents/Actuator';
import ControlButtons from './functionalComponents/ControlButtons';
import DefaultDisplay from './functionalComponents/DefaultDisplay';

const ACTUATOR = 'Actuator'
    , DUST_COLLECTOR = 'Dust Collector'
    , INSTRUMENTATION = 'Instrumentation'
    , VALVE = 'Valve'
    , Valve = Instrumentation;

class ProductInquiry extends Component {
  constructor(props){
    super(props);
    this.startNewItem = this.startNewItem.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  startNewItem(){
    this.props.activate();
  };

  cancel(){
    this.props.deactivate();

  };

  render(){
    const {
      itemList,
      deleteItem,
      itemCreatorOn,
      resetWizard
    } = this.props;
    const displayItems = itemList.map((item, index)=>{
      switch(item.item_type){
        case ACTUATOR:
          return <Actuator
                  displayButtons={true}
                  item={item}
                  key={index}
                  index={index}
                  deleteItem={this.deleteItem}/>;
        case DUST_COLLECTOR:
          return <DustCollector
                  displayButtons={true}
                  item={item}
                  key={index}
                  index={index}
                  deleteItem={this.deleteItem}/>;
        case INSTRUMENTATION:
          return <Instrumentation
                  displayButtons={true}
                  item={item}
                  key={index}
                  index={index}
                  deleteItem={this.deleteItem}/>;
        case VALVE:
          return <Valve
                  displayButtons={true}
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
          <h1>{itemList.length > 1 ? 'Your Inquiry Items' : 'Your Inquiry Item'}</h1>
          {
            itemList && itemList.length > 0 &&
              <ControlButtons addNewItem = {this.startNewItem} resetWizard={resetWizard} submitItems = {this.submitItems}/>
          }
          {displayItems}
        </section>
        <section className={`inquiry-wizard-info ${itemList.length > 10 && 'disabled'}`}>
          <DefaultDisplay
            itemList={itemList}
            resetWizard={resetWizard}
            addNewItem={this.startNewItem}
          />
        </section>
        {
          itemCreatorOn &&
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
  const {itemList, itemCreatorOn} = state.inquiries;
  return {
    itemList,
    itemCreatorOn
  }
}

export default connect(mapStateToProps, {activate, deactivate, resetWizard})(ProductInquiry);
