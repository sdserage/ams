import React from 'react';
/* Components */
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

function CheckListItem(props){
  const {
    particulate,
    index,
    check,
    unCheck,
    updateOtherValue,
    otherValue
  } = props;
  const {checked, name} = particulate;
  return (
    <ListItem
      leftCheckbox={
        <Checkbox
          checked={checked}
          onClick={()=>{
            if(checked){
              unCheck(index);
            }else{
              check(index);
            }
          }}
        />
      }
      primaryText={name !== 'Other' && name}
    >
    {
      name === 'Other' &&
        <TextField
          id='other-value'
          hintText={otherValue ? '' : name}
          value={otherValue}
          rowsMax={1}
          onChange={updateOtherValue}
        />
    }
    </ListItem>
  );
}

export default function ParticulateCheckList(props){
  const {
    particulateList,
    check,
    unCheck,
    updateOtherValue,
    otherValue
  } = props;
  const list = particulateList.map((particulate, index)=>{
    return (
      <CheckListItem
        particulate={particulate}
        key={index}
        index={index}
        check={check}
        unCheck={unCheck}
        updateOtherValue={updateOtherValue}
        otherValue={otherValue}
      />
    )
  });
  return (
    <List>
      {list}
    </List>
  );
}
