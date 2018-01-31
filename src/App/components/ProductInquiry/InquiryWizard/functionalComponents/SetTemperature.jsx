import React from 'react';
import {connect} from 'react-redux';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
import {updateTemperature} from '../../../../../ducks/wizard';
import isValidNumber from '../../../../../assets/functions/isValidNumber';
import {getNext, getPrevious} from '../../../../../assets/functions/getNextAndPrevious';
/* Components */
import PathControl from './PathControl';
import NumberInput from 'material-ui-number-input';

function SetTemperature(props){
  const {
    match,
    path,
    temperature,
    updateTemperature
  } = props;
  return (
    <div className='wizard-grid'>
      <h2 className='wizard-page-title'>
        Please specify the maximum (or minimum) temperature.
      </h2>
      <div className='wizard-number-input'>
        <NumberInput
          id='set-temperature'
          onChange={updateTemperature}
          min={0}
          defaultValue={temperature}
        />&#8457;{/*&#8451;*/}
      </div>
      <PathControl
        currentLocation={match.path}
        previous={getPrevious(path, '/temperature')}
        next={getNext(path, '/temperature')}
        conditionMet={isValidNumber(temperature)}
      />
    </div>
  );
}

function mapStateToProps(state){
  const {path, item} = state.wizard;
  const {temperature} = item;
  return {
    path,
    temperature
  };
}

export default connect(mapStateToProps, {updateTemperature})(SetTemperature);
