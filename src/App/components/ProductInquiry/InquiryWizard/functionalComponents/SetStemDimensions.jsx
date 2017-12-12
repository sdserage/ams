import React from 'react';
import {connect} from 'react-redux';
import {updateReturnType} from '../../../../../ducks/wizard';
/* Components */
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import PathControl from './PathControl';

function SetStemDimensions(props){
  const {match} = props;
  return (
    <div>
      <PathControl
        currentLocation={match.path}
        previous={'/return'}
        next={'/additional-info'}
        conditionMet={
          true
        }
      />
    </div>
  );
};

export default connect(null, {})(SetStemDimensions);
