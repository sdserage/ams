import React, {Component} from 'react';
import {connect} from 'react-redux';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
import {updateProcess} from '../../../../../ducks/wizard';
/* Components */
import PathControl from './PathControl';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

class SetProcess extends Component{
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
    const {process} = this.props;
    if(process && this.state.hasNotReceivedFromProps){
      const nonOther = ['Air', 'Steam', 'Water'];
      if(nonOther.includes(process)){
        this.setState({
          currentValue: process,
          hasNotReceivedFromProps: false
        });
      }else{
        this.setState({
          currentValue: 'Other',
          otherValue: process,
          hasNotReceivedFromProps: false
        })
      }
    }
  }

  componentWillReceiveProps(newProps){
    const {process} = newProps;
    if(process && this.state.hasNotReceivedFromProps){
      const nonOther = ['Air', 'Steam', 'Water'];
      if(nonOther.includes(process)){
        this.setState({
          currentValue: process,
          hasNotReceivedFromProps: false
        });
      }else{
        this.setState({
          currentValue: 'Other',
          otherValue: process,
          hasNotReceivedFromProps: false
        })
      }
    }
  }

  handleChange(event, index, value){
    const {updateProcess} = this.props;
    if(value !== 'Other'){
      updateProcess(event, index, value);
      this.setState({
        currentValue: value
      }, ()=>{
        updateProcess(event, index, value);
      });
    }else{
      this.setState({
        currentValue: value
      }, ()=>{
        updateProcess(event, index, this.state.otherValue);
      });
    }
  }

  updateOtherValue(event, newVal){
    this.setState({
      otherValue: newVal
    });
    this.handleChange(event, 0, 'Other');
  }

  render(){
    const {
      match,
      path,
      process
    } = this.props;
    const {currentValue, otherValue} = this.state;
    return (
      <div>
        <SelectField
          hintText="Select..."
          value={currentValue}
          onChange={this.handleChange}
        >
          <MenuItem value='Air'   primaryText='Air'/>
          <MenuItem value='Steam' primaryText='Steam'/>
          <MenuItem value='Water' primaryText='Water'/>
          <MenuItem value='Other' primaryText='Other'/>
        </SelectField>
        {
          currentValue === 'Other' &&
          <TextField
            id='set-other-process'
            hintText={otherValue ? '' : 'Other'}
            multiLine={false}
            rowsMax={1}
            onChange={this.updateOtherValue}
            value={otherValue}
          />
        }
        <PathControl
          currentLocation={match.path}
          previous={''}
          next={'/temperature'}
          conditionMet={process}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  const {path, item} = state.wizard;
  const {process} = item;
  return {
    path,
    process
  };
}

export default connect(mapStateToProps, {updateProcess})(SetProcess);
