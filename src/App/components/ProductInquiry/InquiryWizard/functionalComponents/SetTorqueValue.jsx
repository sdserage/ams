import React from 'react';
import {connect} from 'react-redux';
import {updateTorqueValue, updateValveAdditionalInformation} from '../../../../../ducks/wizard';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
import isValidNumber from '../../../../../assets/functions/isValidNumber';
/* Components */
import NumberInput from 'material-ui-number-input';
import TextField from 'material-ui/TextField';
import PathControl from './PathControl';

function SetTorqueValue(props){
  const {
    path,
    valve_additional_information,
    torque,
    updateTorqueValue,
    updateValveAdditionalInformation,
    match
  } = props;
  return (
    <div className='wizard-grid'>
      <h2 className='wizard-page-title'>
        Enter required torque below.
      </h2>
      <div className='wizard-number-input'>
        <NumberInput
          id='set-torque-value'
          onChange={updateTorqueValue}
          min={0}
          defaultValue={torque}
          value={torque}
        />in-lb
      </div>
      <h4 className='wizard-page-subtitle'>
        If you are unsure about the torque required
        or if you would like to provide further details
        about your valve please enter additional information
        in the space below.
      </h4>
      <TextField
        className='wizard-text-field2'
        id='set-valve-additional-information'
        hintText='Enter additional info here'
        value={valve_additional_information}
        onChange={updateValveAdditionalInformation}
        multiLine={true}
        rowsMax={6}
        errorText={
          valve_additional_information &&
          valve_additional_information.length > 1000 ?
          'Maximum of 1000 characters' :
          ''
        }
        errorStyle={{color: rubyRed}}
      />

      <PathControl
        currentLocation={match.path}
        previous={'/valve-size'}
        next={'/return'}
        conditionMet={
          isValidNumber(torque) ||
          valve_additional_information &&
          valve_additional_information.length < 1000
        }
      />
    </div>
  );
}

function mapStateToProps(state){
  const {path, item} = state.wizard;
  const {torque, valve_additional_information} = item;
  return {
    path,
    torque,
    valve_additional_information
  }
}

export default connect(mapStateToProps, {updateTorqueValue, updateValveAdditionalInformation})(SetTorqueValue);
