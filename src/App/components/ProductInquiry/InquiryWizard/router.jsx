import React from 'react';
/* Components */
import {Route, Switch} from 'react-router-dom';
// Routes
import SetItemType from './functionalComponents/SetItemType';
import SetValveSize from './functionalComponents/SetValveSize';
import SetTorqueValue from './functionalComponents/SetTorqueValue';

// <Route path='/productinquiry/return'   render={()=><SetReturnType/>}/>
// <Route path='/productinquiry/stem'   render={()=><SetStemType/>}/>
// <Route path='/productinquiry/particulates'   render={()=><SetParticulates/>}/>
// <Route path='/productinquiry/temperature'   render={()=><SetTemperature/>}/>
// <Route path='/productinquiry/process'   render={()=><SetProcess/>}/>
// <Route path='/productinquiry/pressure'   render={()=><SetPressure/>}/>
// <Route path='/productinquiry/pipe'   render={()=><SetPipe/>}/>
// <Route path='/productinquiry/additional-info'   render={()=><SetAdditionalInfo/>}/>

export default (
  <Switch>
    <Route exact path='/productinquiry'       component={SetItemType}/>
    <Route path='/productinquiry/valve-size'  component={SetValveSize}/>
    <Route path='/productinquiry/torque'      component={SetTorqueValue}/>
  </Switch>
);
