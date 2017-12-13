import React, {Component} from 'react';
import {connect} from 'react-redux';
import {rubyRed} from '../../../../../assets/globalConstants/colors';
import {updateParticulateTypes} from '../../../../../ducks/wizard';
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
      otherValue: ''
    }
    this.check = this.check.bind(this);
    this.unCheck = this.unCheck.bind(this);
    this.updateOtherValue = this.updateOtherValue.bind(this);
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
            console.log(particulate.name);
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
            console.log(particulate.name);
            filteredList.push(particulate.name);
          }
        }
      });
      updateParticulateTypes(filteredList);
    });
  }

  updateOtherValue(event, value){
    console.log('hello')
    this.setState({
      otherValue: value
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
        />
        <PathControl
          currentLocation={match.path}
          previous={''}
          next={'/temperature'}
          conditionMet={true}
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

export default connect(mapStateToProps, {updateParticulateTypes})(SetParticulates);
