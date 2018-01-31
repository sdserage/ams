import React from 'react';
import {connect} from 'react-redux';
import {updateValveSize} from '../../../../../ducks/wizard';
import isValidNumber from '../../../../../assets/functions/isValidNumber';
/* Components */
import NumberInput from 'material-ui-number-input';
import PathControl from './PathControl';

function SetValveSize(props){
  const {path, match, updateValveSize, valve_size} = props;
  return (
    <div className='wizard-grid'>
      <h2 className='wizard-page-title'>
        Please specify the valve size.
      </h2>
      <div className='wizard-number-input'>
        <NumberInput
          id='set-valve-size'
          onChange={updateValveSize}
          min={0}
          defaultValue={valve_size}
        />inch
      </div>
      <PathControl
        currentLocation={match.path}
        previous={''}
        next={'/torque'}
        conditionMet={isValidNumber(valve_size)}
      />
    </div>
  );
}

function mapStateToProps(state){
  const {path, item} = state.wizard;
  const {valve_size} = item;
  return {
    path,
    valve_size
  };
}

export default connect(mapStateToProps, {updateValveSize})(SetValveSize);
