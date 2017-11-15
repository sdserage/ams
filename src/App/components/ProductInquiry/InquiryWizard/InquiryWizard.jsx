import React, {Component} from 'react';
import './InquiryWizard.css';
/* Components */
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

export default class InquiryWizard extends Component{
  constructor(props){
    super(props);
    this.state = {
      item: null
    };
  }

  render(){
    const {cancel} = this.props;
    return(
      <Card className='inquiry-wizard' zDepth={3}>
        <div className='wizard-grid'>
          <div className='wizard-cancel'>
            <RaisedButton secondary={true} label='Cancel' fullWidth={false} onClick={cancel}/>
          </div>
        </div>
      </Card>
    );
  }
};
