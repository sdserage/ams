import React, { Component } from 'react';
import './ViewInquiries.css';
import {
  getInquiryList,
  inquiryContentsOn,
  inquiryContentsOff,
  updateInquiryContents,
  archiveInquiry,
  unarchiveInquiry
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
    this.props.getInquiryList();
    if(this.props.inquiryList.length > 0){
      this.setState({
        hasReceivedAllProps: true
      });
    }
  }

  componentWillReceiveProps(newProps){
    if(!this.state.hasReceivedAllProps){
      newProps.getInquiryList();
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
      unarchiveInquiry
    } = this.props;
    return (
      <main id='view-inquiries'>
        <InquiryDisplay
          inquiryList={inquiryList}
          inquiryContentsOn={inquiryContentsOn}
          inquiryContentsOff={inquiryContentsOff}
          updateInquiryContents={updateInquiryContents}
          inquiryContents={inquiryContents}
          viewInquiryContentsOn={viewInquiryContentsOn}
          archiveInquiry={archiveInquiry}
          unarchiveInquiry={unarchiveInquiry}
        />
      </main>
    )
  }
};

function mapStateToProps(state){
  const {
    inquiryList,
    viewInquiryContentsOn,
    inquiryContents
  } = state.inquiries;
  return {
    inquiryList,
    viewInquiryContentsOn,
    inquiryContents
  }
}

const actionBuilders = {
  getInquiryList,
  inquiryContentsOn,
  inquiryContentsOff,
  updateInquiryContents,
  archiveInquiry,
  unarchiveInquiry
}

export default connect(mapStateToProps, actionBuilders)(ViewInquiries);
