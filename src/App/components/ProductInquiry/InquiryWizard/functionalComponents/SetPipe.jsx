import React from 'react';
import {connect} from 'react-redux';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
import {updatePipeSize, updatePipeAdditionalInformation} from '../../../../../ducks/wizard';
import isValidNumber from '../../../../../assets/functions/isValidNumber';
/* Components */
import PathControl from './PathControl';
import NumberInput from 'material-ui-number-input';
import TextField from 'material-ui/TextField';

function validatePipeConditions(pipe_size, pipe_additional_information){
  if(isValidNumber(pipe_size)){
    console.log(isValidNumber(pipe_size))
    if(pipe_additional_information){
      return pipe_additional_information.length <= 1000;
    }
    return true;
  }
  return false;
}

function SetPipe(props){
  const {
    match,
    path,
    pipe_size,
    pipe_additional_information,
    updatePipeSize,
    updatePipeAdditionalInformation
  } = props;
  return (
    <div>
      NPS<NumberInput
        id='set-pipe-size'
        onChange={updatePipeSize}
        min={0}
        defaultValue={pipe_size}
      />inch
      <TextField
        id='set-pipe-additional-information'
        hintText='Enter additional info here'
        value={pipe_additional_information}
        onChange={updatePipeAdditionalInformation}
        multiLine={true}
        rowsMax={6}
        errorText={
          pipe_additional_information &&
          pipe_additional_information.length > 1000 ?
          'Maximum of 1000 characters' :
          ''
        }
        errorStyle={{color: rubyRed}}
      />
      <PathControl
        currentLocation={match.path}
        previous={'/pressure'}
        next={'/additional-info'}
        conditionMet={
          validatePipeConditions(pipe_size, pipe_additional_information)
        }
      />
    </div>
  );
}

function mapStateToProps(state){
  const {path, item} = state.wizard;
  const {pipe_size, pipe_additional_information} = item;
  return {
    path,
    pipe_size,
    pipe_additional_information
  };
}

export default connect(mapStateToProps, {updatePipeSize, updatePipeAdditionalInformation})(SetPipe);
