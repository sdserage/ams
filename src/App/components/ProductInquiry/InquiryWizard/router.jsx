import React from 'react';
/* Components */
import {Route, Switch} from 'react-router-dom';
// Routes
import SetItemType from './functionalComponents/SetItemType';
import SetValveSize from './functionalComponents/SetValveSize';
import SetTorqueValue from './functionalComponents/SetTorqueValue';
import SetReturnType from './functionalComponents/SetReturnType';
import SetStemDimensions from './functionalComponents/SetStemDimensions';

import SetParticulates from './functionalComponents/SetParticulates';
import SetTemperature from './functionalComponents/SetTemperature';

import SetProcess from './functionalComponents/SetProcess';
import SetPressure from './functionalComponents/SetPressure';
import SetPipe from './functionalComponents/SetPipe';

import SetAdditionalInformation from './functionalComponents/SetAddtionalInformation';

export default (
  <Switch>
    <Route exact path='/productinquiry'           component={SetItemType}/>
    <Route path='/productinquiry/valve-size'      component={SetValveSize}/>
    <Route path='/productinquiry/torque'          component={SetTorqueValue}/>
    <Route path='/productinquiry/return'          component={SetReturnType}/>
    <Route path='/productinquiry/stem'            component={SetStemDimensions}/>

    <Route path='/productinquiry/particulates'    component={SetParticulates}/>
    <Route path='/productinquiry/temperature'     component={SetTemperature}/>

    <Route path='/productinquiry/process'         component={SetProcess}/>
    <Route path='/productinquiry/pressure'        component={SetPressure}/>
    <Route path='/productinquiry/pipe'            component={SetPipe}/>

    <Route path='/productinquiry/additional-info' component={SetAdditionalInformation}/>
  </Switch>
);
