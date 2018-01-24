import React, { Component } from 'react';
import './ViewInquiries.css';
import {
  getInquiryList,
  inquiryContentsOn,
  inquiryContentsOff,
  updateInquiryContents,
  archiveInquiry,
  unarchiveInquiry,
  updatePrimaryFilter,
  updatePropertyFilter,
  updatePropertyFilterValue,
  updateDateFilter,
  updateDateFilterValue,
  deleteModeOn,
  deleteModeOff
} from '../../../ducks/inquiries';
import {connect} from 'react-redux';
/* Components */
import InquiryDisplay from './functionalComponents/InquiryDisplay';
import ItemDisplay from './functionalComponents/ItemDisplay';
import FilterInquiries from './functionalComponents/FilterInquiries';

class ViewInquiries extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasReceivedAllProps: false
    };
  }

  componentDidMount(){
    const scrollToElement = require('scroll-to-element');
    scrollToElement(`body`,{
      duration: 10
    });
    this.props.getInquiryList(this.props.filterValues);
    if(this.props.inquiryList.length > 0){
      this.setState({
        hasReceivedAllProps: true
      });
    }
  }

  componentWillReceiveProps(newProps){
    if(!this.state.hasReceivedAllProps){
      newProps.getInquiryList(newProps.filterValues);
      if(newProps.inquiryList.length > 0){
        this.setState({
          hasReceivedAllProps: true
        });
      }
    }
  }

  render(){
    const {
      inquiryList,
      viewInquiryContentsOn,
      inquiryContentsOn,
      inquiryContentsOff,
      inquiryContents,
      updateInquiryContents,
      archiveInquiry,
      unarchiveInquiry,
      filterValues,
      updatePrimaryFilter,
      updatePropertyFilter,
      updatePropertyFilterValue,
      updateDateFilterValue,
      updateDateFilter,
      deleteModeOn,
      deleteModeOff,
      getInquiryList
    } = this.props;
    return (
      <main id='view-inquiries'>
        <FilterInquiries
          filterValues={filterValues}
          updatePrimaryFilter={updatePrimaryFilter}
          updatePropertyFilter={updatePropertyFilter}
          updatePropertyFilterValue={updatePropertyFilterValue}
          deleteModeOn={deleteModeOn}
          deleteModeOff={deleteModeOff}
          getInquiryList={getInquiryList}
          updateDateFilter={updateDateFilter}
          updateDateFilterValue={updateDateFilterValue}
        />
        <InquiryDisplay
          inquiryList={inquiryList}
          inquiryContentsOn={inquiryContentsOn}
          inquiryContentsOff={inquiryContentsOff}
          updateInquiryContents={updateInquiryContents}
          inquiryContents={inquiryContents}
          viewInquiryContentsOn={viewInquiryContentsOn}
          archiveInquiry={archiveInquiry}
          unarchiveInquiry={unarchiveInquiry}
          filterValues={filterValues}
        />
      </main>
    )
  }
};

function mapStateToProps(state){
  const {
    inquiryList,
    viewInquiryContentsOn,
    inquiryContents,
    filterValues
  } = state.inquiries;
  return {
    inquiryList,
    viewInquiryContentsOn,
    inquiryContents,
    filterValues
  }
}

const actionBuilders = {
  getInquiryList,
  inquiryContentsOn,
  inquiryContentsOff,
  updateInquiryContents,
  archiveInquiry,
  unarchiveInquiry,
  updatePrimaryFilter,
  updatePropertyFilter,
  updatePropertyFilterValue,
  updateDateFilterValue,
  updateDateFilter,
  deleteModeOn,
  deleteModeOff
}

export default connect(mapStateToProps, actionBuilders)(ViewInquiries);
