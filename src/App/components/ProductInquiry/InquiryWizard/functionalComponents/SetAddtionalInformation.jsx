import React from 'react';
import {connect} from 'react-redux';
import {updateAdditionalInformation} from '../../../../../ducks/wizard';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
/* Components */
import TextField from 'material-ui/TextField';
import PathControl from './PathControl';

function SetAdditionalInformation(props){
  const {
    path,
    additional_information,
    match,
    updateAdditionalInformation
  } = props;
  return (
    <div>
      <TextField
        id='set-additional-information'
        hintText='Enter additional info here'
        value={additional_information}
        onChange={updateAdditionalInformation}
        multiLine={true}
        rowsMax={6}
        errorText={
          additional_information &&
          additional_information.length > 1000 ?
          'Maximum of 1000 characters' :
          ''
        }
        errorStyle={{color: rubyRed}}
      />
      <PathControl
        currentLocation={match.path}
        previous={path ? path[path.length-1] : ''}
        next={''}
        conditionMet={
          !additional_information ||
          additional_information &&
          additional_information.length <= 1000 ?
          true : false
        }
      />
    </div>
  )
}

function mapStateToProps(state){
  const {path, item} = state.wizard;
  const {additional_information} = item;
  return {
    additional_information
  }
}

export default connect(mapStateToProps,{updateAdditionalInformation})(SetAdditionalInformation);
