import React from 'react';
import {connect} from 'react-redux';
/* Components */
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function SelectItemType(props){
  const {item, updateItemType} = props;
  return (
    <SelectField
      hintText="Select..."
      value={item.item_type}
      onChange={updateItemType}
    >
      <MenuItem value='Actuator' primaryText='Actuator'/>
      <MenuItem value='Dust Collector' primaryText='Dust Collector'/>
      <MenuItem value='Instrumentation' primaryText='Instrumentation'/>
      <MenuItem value='Valve' primaryText='Valve'/>
    </SelectField>
  )
}

export default connect(null, {})(SelectItemType);

// PostgreSQL
// Express
// React
// Node

// Clarify
// Produce sample data
// solve sample data
// code constructs - what you will use
// psydocode
// Solve code
