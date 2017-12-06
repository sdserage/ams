import React from 'react';
import {connect} from 'react-redux';
//import {} from '../../../../../ducks/wizard';
/* Components */
import NumberInput from 'material-ui-number-input';
import PathControl from './PathControl';

function getNext(path='', currentLocation){
  let NextIndex = path.indexOf(currentLocation) + 1;
  if(NextIndex >= path.length){
    NextIndex--;
  }
  return path[NextIndex];
}

function SetValveSize(props){
  const {path} = props;
  return (
    <div>
      <NumberInput
      />
      <PathControl/>
    </div>
  );
}

function mapStateToProps(state){
  const {path} = state.wizard;
  return {
    path
  };
}

export default connect(mapStateToProps,{})(SetValveSize);
