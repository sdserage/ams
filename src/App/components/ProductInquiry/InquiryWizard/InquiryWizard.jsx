import React, {Component} from 'react';
import {connect} from 'react-redux';
import './InquiryWizard.css';
/* Components */
import NumberInput from 'material-ui-number-input';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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



function SetValveSize(props){
  const {item, updateValveSize} = props;
  return (
    <NumberInput
    />
  )
}

class InquiryWizard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {cancel} = this.props;

    return(
      <Card className='inquiry-wizard' zDepth={4}>
        <div className='wizard-grid'>
          <RaisedButton className='wizard-cancel' secondary={true} label='Cancel' fullWidth={false} onClick={cancel}/>
          <Router>
            {router}
          </Router>
        </div>
      </Card>
    );
  }
};

function mapStateToProps(state){
  return {

  };
};

export default connect(mapStateToProps, {})(InquiryWizard);
