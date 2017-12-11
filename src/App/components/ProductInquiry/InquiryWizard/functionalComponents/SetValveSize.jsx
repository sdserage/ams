import React from 'react';
import {connect} from 'react-redux';
import {updateValveSize} from '../../../../../ducks/wizard';
/* Components */
import NumberInput from 'material-ui-number-input';
import PathControl from './PathControl';

function getNext(path=[''], currentLocation){
  let NextIndex = path.indexOf(currentLocation) + 1;
  if(NextIndex >= path.length){
    NextIndex--;
  }
  return path[NextIndex];
}

function isValidNumber(val){
  return !isNaN(val);
}

function SetValveSize(props){
  const {path, match, updateValveSize, valve_size} = props;
  return (
    <div>
      <NumberInput
        id='set-valve-size'
        onChange={updateValveSize}
        min={0}
        defaultValue={valve_size}
      />inch
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
