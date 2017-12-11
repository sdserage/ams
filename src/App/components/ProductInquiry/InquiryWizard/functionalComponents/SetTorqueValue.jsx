import React from 'react';
import {connect} from 'react-redux';
import {updateItemType} from '../../../../../ducks/wizard';
/* Components */
import PathControl from './PathControl';

function SetTorqueValue(props){
  const {valve_additional_information, torque, match} = props;
  return (
    <div>
      <PathControl
        currentLocation={match.path}
        previous={'/valve-size'}
        next={'/return'}
        conditionMet={true}
      />
    </div>
  );
}

export default connect(null, {})(SetTorqueValue);
