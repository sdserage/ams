import React, {Component} from 'react';
import {connect} from 'react-redux';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
import {updateParticulateTypes, updateParticulateSize} from '../../../../../ducks/wizard';
import isValidNumber from '../../../../../assets/functions/isValidNumber';
/* Components */
import PathControl from './PathControl';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import NumberInput from 'material-ui-number-input';

const nonOther = [
  'Grease',
  'Metal',
  'Oil Mist',
  'Smoke',
  'Sticky',
  'Sugar',
  'Wood'
];

class SetParticulates extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentValue: '',
      otherValue: '',
      hasNotReceivedFromProps: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.updateOtherValue = this.updateOtherValue.bind(this);
  }

  componentDidMount(){
    const {particulate_types} = this.props;
    if(particulate_types && this.state.hasNotReceivedFromProps){
      if(nonOther.includes(particulate_types)){
        this.setState({
          currentValue: particulate_types,
          hasNotReceivedFromProps: false
        });
      }else{
        this.setState({
          currentValue: 'Other',
          otherValue: particulate_types,
          hasNotReceivedFromProps: false
        });
      }
    }
  }

  componentWillReceiveProps(newProps){
    const {particulate_types} = newProps;
    if(particulate_types && this.state.hasNotReceivedFromProps){
      if(nonOther.includes(particulate_types)){
        this.setState({
          currentValue: particulate_types,
          hasNotReceivedFromProps: false
        });
      }else{
        this.setState({
          currentValue: 'Other',
          otherValue: particulate_types,
          hasNotReceivedFromProps: false
        });
      }
    }
  }

  handleChange(event, index, value){
    const {updateParticulateTypes} = this.props;
    if(value !== 'Other'){
      updateParticulateTypes(event, index, value);
      this.setState({
        currentValue: value
      }, ()=>{
        updateParticulateTypes(event, index, value);
      });
    }else{
      this.setState({
        currentValue: value
      }, ()=>{
        updateParticulateTypes(event, index, this.state.otherValue);
      });
    }
  }

  updateOtherValue(event, newVal){
    this.setState({
      otherValue: newVal
    });
    this.handleChange(event, 0, 'Other')
  }

  render(){
    const {
      match,
      path,
      particulate_types,
      particulate_size,
      updateParticulateSize
    } = this.props;
    const {currentValue, otherValue} = this.state;
    return (
      <div className='wizard-grid'>
        <h2 className='wizard-page-title'>
          Please select a particulate type.
        </h2>
        <div className='wizard-select-field plus'>
          <SelectField
            hintText="Select..."
            value={currentValue}
            onChange={this.handleChange}
          >
            <MenuItem value='Grease'    primaryText='Grease'/>
            <MenuItem value='Metal'     primaryText='Metal'/>
            <MenuItem value='Oil Mist'  primaryText='Oil Mist'/>
            <MenuItem value='Smoke'     primaryText='Smoke'/>
            <MenuItem value='Sticky'    primaryText='Sticky'/>
            <MenuItem value='Sugar'     primaryText='Sugar'/>
            <MenuItem value='Wood'      primaryText='Wood'/>
            <MenuItem value='Other'     primaryText='Other'/>
          </SelectField>
          <TextField
            disabled={currentValue === 'Other' ? false : true}
            id='set-other-particulate'
            hintText={currentValue === 'Other' ? 'Please type here.' : ''}
            rowsMax={1}
            multiLine={false}
            onChange={this.updateOtherValue}
            value={otherValue}
          />
        </div>
        <h4 className='wizard-page-subtitle'>
          Please select a particulate size.
        </h4>
        <div className='wizard-number-input2'>
          <NumberInput
            id='set-particulate-size'
            onChange={updateParticulateSize}
            min={0}
            defaultValue={particulate_size}
          />&micro;m
        </div>
        <PathControl
          currentLocation={match.path}
          previous={''}
          next={'/temperature'}
          conditionMet={isValidNumber(particulate_size) && particulate_types}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  const {path, item} = state.wizard;
  const {particulate_types, particulate_size} = item;
  return {
    path,
    particulate_types,
    particulate_size
  };
}

export default connect(mapStateToProps, {updateParticulateTypes, updateParticulateSize})(SetParticulates);
