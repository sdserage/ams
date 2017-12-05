import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SetItemType from './functionalComponents/SetItemType';

// <Route path='/productinquiry/valve-size'   render={()=><SetValveSize/>}/>
// <Route path='/productinquiry/torque'   render={()=><SetTorqueValue/>}/>
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
    <Route exact path='/productinquiry' component={SetItemType}/>
  </Switch>
);
