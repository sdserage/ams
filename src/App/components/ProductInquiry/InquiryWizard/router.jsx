import React from 'react';
import {Route, Switch} from 'react-router-dom';

export default function router(props){
  return(
    <Switch>
      <Route path='/productinquiry/type'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/valve-size'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/torque'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/return'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/stem'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/particulates'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/temperature'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/process'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/pressure'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/pipe'   render={()=><ProductInquiry pathList='' />}/>
      <Route path='/productinquiry/additional-info'   render={()=><ProductInquiry pathList='' />}/>
    </Switch>
  )
};
