import React from 'react';
/* Components */
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import Toggle from 'material-ui/Toggle';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';

export default function FilterInquiries(props){
  const {
    filterValues,
    updatePrimaryFilter,
    updatePropertyFilter,
    deleteModeOn,
    deleteModeOff
  } = props;
  const {
    primaryFilter,
    propertyFilter,
    deleteMode
  } = filterValues;
  const dangerText = {
    color: 'red'
  }
  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <DropDownMenu value={primaryFilter} onChange={updatePrimaryFilter}>
          <MenuItem value='non-archived' primaryText='New Inquiries'/>
          <MenuItem value='archived' primaryText='Archived Inquiries'/>
          <MenuItem value='all' primaryText='All Inquiries'/>
        </DropDownMenu>
      </ToolbarGroup>
      <ToolbarGroup>
        <DropDownMenu value={propertyFilter} onChange={updatePropertyFilter}>
          <MenuItem value='No filter' primaryText='No filter' label='Filter by...'/>
          <MenuItem value='date' primaryText='Date'/>
          <MenuItem value='name' primaryText='Name'/>
          <MenuItem value='email' primaryText='Email'/>
          <MenuItem value='phone_number' primaryText='Phone Number'/>
        </DropDownMenu>
      </ToolbarGroup>
      <ToolbarGroup>
        <Toggle
          label={deleteMode ? 'Delete Mode On' : 'Delete Mode Off'}
          labelPosition={'right'}
          labelStyle={deleteMode && dangerText}
          onToggle={
            (event, isInputChecked)=>{
              isInputChecked ? deleteModeOn() : deleteModeOff();
            }
          }
        />
      </ToolbarGroup>
    </Toolbar>
  )
}
