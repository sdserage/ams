import React from 'react';
/* Components */
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';

export default function FilterInquiries(props){
  const {
    filterValues,
    updatePrimaryFilter
  } = props;
  const {
    primaryFilter
  } = filterValues;
  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <DropDownMenu value={primaryFilter} onChange={updatePrimaryFilter}>
          <MenuItem value='non-archived' primaryText='New Inquiries'/>
          <MenuItem value='archived' primaryText='Archived Inquiries'/>
          <MenuItem value='all' primaryText='All Inquiries'/>
        </DropDownMenu>
      </ToolbarGroup>
    </Toolbar>
  )
}
