import React from 'react';
import {connect} from 'react-redux';
import {updateStemDimensions, updateStemAdditionalInformation} from '../../../../../ducks/wizard';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
/* Components */
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import PathControl from './PathControl';

function SetStemDimensions(props){
  const {
    match,
    stem_dimensions,
    stem_additional_information,
    updateStemDimensions,
    updateStemAdditionalInformation
  } = props;
  return (
    <div className='wizard-grid'>
      <h2 className='wizard-page-title'>
        Please specify the stem type below.
      </h2>
      <SelectField
        hintText="Select..."
        value={stem_dimensions}
        onChange={updateStemDimensions}
        className='wizard-select-field'
      >
        <MenuItem value='Double D' primaryText='Double D'/>
        <MenuItem value='Square' primaryText='Square'/>
      </SelectField>
      <h4 className='wizard-page-subtitle'>
        If you have further details about the stem,
        please let us know in the space below.
      </h4>
      <TextField
        className='wizard-text-field2'
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
