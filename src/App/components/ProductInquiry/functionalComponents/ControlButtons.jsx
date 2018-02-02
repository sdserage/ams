import React from 'react';
/* Components */
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
// import {Link} from 'react-router-dom';

export default function ControlButtons(props){
  const {
    submitItems,
    addNewItem,
    resetWizard,
    name,
    email,
    phone_number,
    updateName,
    updateEmail,
    updatePhoneNumber,
    itemList,
    activateSubmitMenu,
    deactivateSubmitMenu,
    submitMenuOn,
    anchorEl
  } = props;
  return (
    <div  className='control-buttons'>
      <RaisedButton label='+ Add' secondary={true} onClick={()=>{addNewItem(); resetWizard();}}/>
      <RaisedButton primary={true} label='Send Inquiry' onClick={activateSubmitMenu}/>
      <Popover
        open={submitMenuOn}
        onRequestClose={deactivateSubmitMenu}
        anchorOrigin={{horizontal: 'center', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorEl={anchorEl}
      >
        <div className='submit-menu'>
          <TextField
            onChange={updateName}
            hintText='Name (required)'
            defaultValue={name}
          />
          <TextField
            onChange={updateEmail}
            hintText='Email (required)'
            defaultValue={email}
          />
          <TextField
            onChange={updatePhoneNumber}
            hintText='Phone number (optional)'
            defaultValue={phone_number}
          />
          <RaisedButton
            primary={true}
            label='submit'
            onClick={()=>{
              submitItems(name, email, phone_number, itemList);
            }}
            disabled={name && email && itemList && itemList.length ? false : true}
          />
        </div>
      </Popover>
    </div>
  );
}

//name,
// email,
// phone_number,
// itemList
