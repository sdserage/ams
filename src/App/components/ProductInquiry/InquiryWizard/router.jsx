import React from 'react';
/* Components */
import {Route, Switch} from 'react-router-dom';
// Routes
import SetItemType from './functionalComponents/SetItemType';
import SetValveSize from './functionalComponents/SetValveSize';
import SetTorqueValue from './functionalComponents/SetTorqueValue';
import SetReturnType from './functionalComponents/SetReturnType';
import SetStemDimensions from './functionalComponents/SetStemDimensions';

import SetAdditionalInformation from './functionalComponents/SetAddtionalInformation';

// <Route path='/productinquiry/particulates'   render={()=><SetParticulates/>}/>
// <Route path='/productinquiry/temperature'   render={()=><SetTemperature/>}/>
// <Route path='/productinquiry/process'   render={()=><SetProcess/>}/>
// <Route path='/productinquiry/pressure'   render={()=><SetPressure/>}/>
// <Route path='/productinquiry/pipe'   render={()=><SetPipe/>}/>

export default (
  <Switch>
    <Route exact path='/productinquiry'           component={SetItemType}/>
    <Route path='/productinquiry/valve-size'      component={SetValveSize}/>
    <Route path='/productinquiry/torque'          component={SetTorqueValue}/>
    <Route path='/productinquiry/return'          component={SetReturnType}/>
    <Route path='/productinquiry/stem'            component={SetStemDimensions}/>

    <Route path='/productinquiry/additional-info' component={SetAdditionalInformation}/>
  </Switch>
);
