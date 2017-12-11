import React from 'react';
/* Components */
import RaisedButton from 'material-ui/RaisedButton';

export default function ControlButtons(props){
  const {
    submitItems,
    addNewItem
  } = props;
  return (
    <div  className='control-buttons'>
      <RaisedButton label='+ Add' secondary={true} onClick={()=> addNewItem()}/>
      <RaisedButton primary={true} onClick={()=> submitItems()}>
        SUBMIT
      </RaisedButton>
    </div>
  );
}
