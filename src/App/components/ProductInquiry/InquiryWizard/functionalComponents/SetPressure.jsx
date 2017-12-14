import React from 'react';
import {connect} from 'react-redux';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
import {updatePressure} from '../../../../../ducks/wizard';
import isValidNumber from '../../../../../assets/functions/isValidNumber';
/* Components */
import PathControl from './PathControl';
import NumberInput from 'material-ui-number-input';

function SetPressure(props){
  const {
    match,
    path,
    pressure,
    updatePressure
  } = props;
  return (
    <div>
      <NumberInput
        id='set-temperature'
        onChange={updatePressure}
        min={0}
        defaultValue={pressure}
      />psi
      <PathControl
        currentLocation={match.path}
        previous={'/temperature'}
        next={'/pipe'}
        conditionMet={isValidNumber(pressure)}
      />
    </div>
  );
}

function mapStateToProps(state){
  const {path, item} = state.wizard;
  const {pressure} = item;
  return {
    path,
    pressure
  };
}

export default connect(mapStateToProps, {updatePressure})(SetPressure);
