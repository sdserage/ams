import React from 'react';
import {connect} from 'react-redux';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
/* Components */
import PathControl from './PathControl';

function SetPipe(props){
  const {
    match,
    path
  } = props;
  return (
    <div>
      <PathControl
        currentLocation={match.path}
        previous={''}
        next={''}
        conditionMet={true}
      />
    </div>
  );
}

function mapStateToProps(state){
  const {path, item} = state.wizard;
  return {
    path
  };
}

export default connect(mapStateToProps, {})(SetPipe);
