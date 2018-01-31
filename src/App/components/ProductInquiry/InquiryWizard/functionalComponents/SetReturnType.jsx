import React from 'react';
import {connect} from 'react-redux';
import {updateReturnType} from '../../../../../ducks/wizard';
/* Components */
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PathControl from './PathControl';

function SetReturnType(props){
  const {updateReturnType, return_type, path, match} = props;
  return (
    <div className='wizard-grid'>
      <h2 className='wizard-page-title'>
        What return does the valve use?
      </h2>
      <SelectField
        hintText="Select..."
        value={return_type}
        onChange={updateReturnType}
        className='wizard-select-field'
      >
        <MenuItem value='Double Acting' primaryText='Double Acting'/>
        <MenuItem value='Spring' primaryText='Spring'/>
      </SelectField>
      <PathControl
        currentLocation={match.path}
        previous={'/torque'}
        next={'/stem'}
        conditionMet={return_type ? true : false}
      />
    </div>
  );
}

function mapStateToProps(state){
  const {item, path} = state.wizard;
  const {return_type} = item;
  return {
    return_type,
    path
  };
};

export default connect(mapStateToProps, {updateReturnType})(SetReturnType);
