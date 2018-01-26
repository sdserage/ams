import React from 'react';
/* Components */
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import DatePicker from 'material-ui/DatePicker';
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
    updatePropertyFilterValue,
    updateDateFilterValue,
    updateDateFilter,
    deleteModeOn,
    deleteModeOff,
    getInquiryList
  } = props;
  const {
    primaryFilter,
    propertyFilter,
    dateFilter,
    dateFilterValue,
    deleteMode
  } = filterValues;
  const dangerText = {
    color: 'red'
  }
  const safeText = {
    color: 'white'
  }
  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <DropDownMenu
          value={primaryFilter}
          onChange={(event, index, value)=>{
            updatePrimaryFilter(event, index, value);
            const updatedFilterValues = Object.assign(
              {}, filterValues, {primaryFilter: value}
            );
            getInquiryList(updatedFilterValues);
          }}
        >
          <MenuItem value='non-archived' primaryText='New'/>
          <MenuItem value='archived' primaryText='Archived'/>
          <MenuItem value='all' primaryText='All'/>
        </DropDownMenu>
      </ToolbarGroup>
      <ToolbarGroup>
        <DropDownMenu
          value={dateFilter}
          onChange={updateDateFilter}
        >
          <MenuItem value={false} primaryText='No Date Filter'/>
          <MenuItem value={true} primaryText='Date Filter'/>
        </DropDownMenu>
        <DatePicker
          hintText='Select a date...'
          disabled={dateFilter ? false : true}
          onChange={(noEvent, date)=>{
            updateDateFilterValue(date);
            const updatedFilterValues = Object.assign(
              {}, filterValues, {dateFilterValue: date}
            );
            getInquiryList(updatedFilterValues);
          }}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <DropDownMenu value={propertyFilter} onChange={updatePropertyFilter}>
          <MenuItem value='No filter' primaryText='No filter' label='Filter by...'/>
          <MenuItem value='name' primaryText='Name'/>
          <MenuItem value='email' primaryText='Email'/>
          <MenuItem value='phone_number' primaryText='Phone Number'/>
        </DropDownMenu>
        <TextField
          id='property-filter-field'
          hintText='Type filter value here'
          onChange={(event, value)=>{
            updatePropertyFilterValue(event, value);
            const updatedFilterValues = Object.assign(
              {}, filterValues, {propertyFilterValue: value}
            );
            getInquiryList(updatedFilterValues);
          }}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <Toggle
          label={deleteMode ? 'Delete Mode On' : 'Delete Mode Off'}
          labelPosition={'right'}
          labelStyle={deleteMode ? dangerText : safeText}
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
