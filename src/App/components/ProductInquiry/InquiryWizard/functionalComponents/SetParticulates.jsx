import React, {Component} from 'react';
import {connect} from 'react-redux';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
import {updateParticulateTypes, updateParticulateSize} from '../../../../../ducks/wizard';
import isValidNumber from '../../../../../assets/functions/isValidNumber';
/* Components */
import PathControl from './PathControl';
import ParticulateCheckList from './ParticulateCheckList';

import NumberInput from 'material-ui-number-input';

class SetParticulates extends Component {
  constructor(props){
    super(props);
    this.state = {
      particulateList: [
        {name: 'Grease', checked: false},
        {name: 'Metal', checked: false},
        {name: 'Oil Mist', checked: false},
        {name: 'Smoke', checked: false},
        {name: 'Sticky', checked: false},
        {name: 'Wood', checked: false},
        {name: 'Other', checked: false}
      ],
      otherValue: '',
      hasNotReceivedFromProps: true
    }
    this.check = this.check.bind(this);
    this.unCheck = this.unCheck.bind(this);
    this.updateOtherValue = this.updateOtherValue.bind(this);
  }

  componentDidMount(){
    const {particulate_types} = this.props;
    let copyList = this.state.particulateList.slice();
    let copyOther = '';
    const nonOther = ['Grease', 'Metal', 'Oil Mist', 'Smoke', 'Sticky', 'Wood'];
    if(particulate_types && this.state.hasNotReceivedFromProps){
      let updatedCopy = copyList.map(particulate=>{
        if(particulate_types.includes(particulate.name)){
          particulate.checked = true;
        }else if(particulate.name === 'Other' && !nonOther.includes(particulate_types[particulate_types.length - 1])){
          particulate.checked = true;
          copyOther = particulate_types[particulate_types.length-1];
        }
        return particulate;
      });
      this.setState({
        particulateList: updatedCopy,
        otherValue: copyOther,
        hasNotReceivedFromProps: false
      });
    }
  }

  componentWillReceiveProps(newProps){
    const {particulate_types} = newProps;
    let copyList = this.state.particulateList.slice();
    let copyOther = '';
    const nonOther = ['Grease', 'Metal', 'Oil Mist', 'Smoke', 'Sticky', 'Wood'];
    if(particulate_types && this.state.hasNotReceivedFromProps){
      let updatedCopy = copyList.map(particulate=>{
        if(particulate_types.includes(particulate.name)){
          particulate.checked = true;
        }else if(particulate.name === 'Other' && !nonOther.includes(particulate_types[particulate_types.length - 1])){
          particulate.checked = true;
          copyOther = particulate_types[particulate_types.length-1];

        }
        return particulate
      });
      this.setState({
        particulateList: updatedCopy,
        otherValue: copyOther,
        hasNotReceivedFromProps: false
      });
    }
  }

  check(index){
    const {updateParticulateTypes} = this.props;
    let copyList = this.state.particulateList.slice();
    copyList[index].checked = true;
    this.setState({
      particulateList: copyList
    }, ()=>{
      let filteredList = [];
      this.state.particulateList.map(particulate=>{
        if(particulate.checked){
          if(particulate.name === 'Other' && this.state.otherValue){
            filteredList.push(this.state.otherValue);
          }else if(particulate.name !== 'Other'){
            filteredList.push(particulate.name);
          }
        }
      });
      updateParticulateTypes(filteredList);
    });
  }

  unCheck(index){
    const {updateParticulateTypes} = this.props;
    let copyList = this.state.particulateList.slice();
    copyList[index].checked = false;
    this.setState({
      particulateList: copyList
    }, ()=>{
      let filteredList = [];
      this.state.particulateList.map(particulate=>{
        if(particulate.checked){
          if(particulate.name === 'Other' && this.state.otherValue){
            filteredList.push(this.state.otherValue);
          }else if(particulate.name !== 'Other'){
            filteredList.push(particulate.name);
          }
        }
      });
      updateParticulateTypes(filteredList);
    });
  }

  updateOtherValue(event, value){
    const {updateParticulateTypes} = this.props;
    this.setState({
      otherValue: value
    }, ()=>{
      let filteredList = [];
      this.state.particulateList.map(particulate=>{
        if(particulate.checked){
          if(particulate.name === 'Other' && this.state.otherValue){
            filteredList.push(this.state.otherValue);
          }else if(particulate.name !== 'Other'){
            filteredList.push(particulate.name);
          }
        }
      });
      updateParticulateTypes(filteredList);
    });
  }

  render(){
    const {
      match,
      path,
      particulate_types,
      particulate_size,
      updateParticulateSize
    } = this.props;
    const {particulateList, otherValue} = this.state;
    return (
      <div>
        <ParticulateCheckList
          particulateList={particulateList}
          check={this.check}
          unCheck={this.unCheck}
          updateOtherValue={this.updateOtherValue}
          otherValue={otherValue}
        />
        <NumberInput
          id='set-particulate-size'
          onChange={updateParticulateSize}
          min={0}
          value={particulate_size}
        />&micro;m
        <PathControl
          currentLocation={match.path}
          previous={''}
          next={'/temperature'}
          conditionMet={isValidNumber(particulate_size) && particulate_types && particulate_types.length > 0}
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
