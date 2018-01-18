import React, {Component} from 'react';
import {connect} from 'react-redux';
import './InquiryWizard.css';
import {resetWizard} from '../../../../ducks/wizard';
/* Components */
import RaisedButton from 'material-ui/RaisedButton';
import {BrowserRouter as Router} from 'react-router-dom';
import router from './router';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

class InquiryWizard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {cancel, resetWizard} = this.props;
    return(
      <Card className='inquiry-wizard' zDepth={4}>
        <div className='wizard-grid'>
          <RaisedButton className='wizard-cancel' secondary={true} label='Cancel' fullWidth={false} onClick={()=>{cancel(); resetWizard()}}/>
          <Router>
            {router}
          </Router>
        </div>
      </Card>
    );
  }
};

export default connect(null, {resetWizard})(InquiryWizard);
