import React from 'react';
/* Components */
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

export default function ControlButtons(props){
  const {
    submitItems,
    addNewItem,
    resetWizard,
    itemList
  } = props;
  return (
    <div  className='control-buttons'>
      <Link to='/productinquiry'>
        <RaisedButton label='+ Add' secondary={true} onClick={()=>{addNewItem(); resetWizard();}}/>
      </Link>
        <RaisedButton primary={true} label='Submit' onClick={()=> submitItems()}/>
    </div>
  );
}
