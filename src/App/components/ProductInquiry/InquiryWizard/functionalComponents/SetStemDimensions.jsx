import React from 'react';
import {connect} from 'react-redux';
import {updateStemDimensions, updateStemAdditionalInformation} from '../../../../../ducks/wizard';
/* Components */
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import PathControl from './PathControl';

const rubyRed = '#931621';

function SetStemDimensions(props){
  const {
    match,
    stem_dimensions,
    stem_additional_information,
    updateStemDimensions,
    updateStemAdditionalInformation
  } = props;
  return (
    <div>
      <SelectField
        hintText="Select..."
        value={stem_dimensions}
        onChange={updateStemDimensions}
      >
        <MenuItem value='Double D' primaryText='Double D'/>
        <MenuItem value='Square' primaryText='Square'/>
      </SelectField>
      <TextField
        id='set-stem-additional-information'
        hintText='Enter additional info here'
        value={stem_additional_information}
        onChange={updateStemAdditionalInformation}
        multiLine={true}
        rowsMax={6}
        errorText={
            stem_additional_information &&
            stem_additional_information.length > 1000 ?
            'Maximum of 1000 characters' :
            ''
        }
        errorStyle={{color: rubyRed}}
      />
      <PathControl
        currentLocation={match.path}
        previous={'/return'}
        next={'/additional-info'}
        conditionMet={
          stem_dimensions && !stem_additional_information ||
          stem_dimensions && stem_additional_information.length < 1000
          ? true : false
        }
      />
    </div>
  );
};

function mapStateToProps(state){
  const {item, path} = state.wizard;
  const {stem_dimensions, stem_additional_information} = item;
  return {
    path,
    stem_dimensions,
    stem_additional_information
  }
}

export default connect(mapStateToProps, {updateStemDimensions, updateStemAdditionalInformation})(SetStemDimensions);
