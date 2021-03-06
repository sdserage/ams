import React from 'react';
import {connect} from 'react-redux';
import {updateItemType} from '../../../../../ducks/wizard';
/* Components */
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PathControl from './PathControl';
import {Card} from 'material-ui/Card';

function SetItemType(props){
  const {item_type, updateItemType, path} = props;
  return (
    <div className='wizard-grid'>
      <h2 className='wizard-page-title'>What type of product are you looking for?</h2>
      <SelectField
        hintText="Select..."
        value={item_type}
        onChange={updateItemType}
        className='wizard-select-field'
      >
        <MenuItem value='Actuator' primaryText='Actuator' style={{zIndex: '9000'}}/>
        <MenuItem value='Dust Collector' primaryText='Dust Collector'/>
        <MenuItem value='Instrumentation' primaryText='Instrumentation'/>
        <MenuItem value='Valve' primaryText='Valve'/>
      </SelectField>
      <PathControl
        currentLocation=''
        next={path[1]}
        conditionMet={item_type ? true : false}
      />
    </div>
  );
}

function mapStateToProps(state){
  const {item, path} = state.wizard;
  const {item_type} = item;
  return {
    item_type,
    path
  }
}

export default connect(mapStateToProps, {updateItemType})(SetItemType);

// PostgreSQL
// Express
// React
// Node
//
// Clarify
// Produce sample data
// solve sample data
// code constructs - what you will use
// psydocode
// Solve code
