import React, {Component} from 'react';
import './InquiryWizard.css';
/* Components */
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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
      item: {item_type: ''},
      path: ''
    };
  }

  componentDidMount(){
    this.setState({
      item: {item_type: ''}
    });
  }

  //
  handleChange = (event, index, value) => this.setState({item: {item_type: value}});
  //

  render(){
    const {cancel} = this.props;
    const {item, path} = this.state;
    return(
      <Card className='inquiry-wizard' zDepth={3}>
        <div className='wizard-grid'>
          <RaisedButton className='wizard-cancel' secondary={true} label='Cancel' fullWidth={false} onClick={cancel}/>
          <h2 className='root-title'>What type of product are you looking for?</h2>
          <SelectField
            hintText="Select..."
            value={item.item_type}
            onChange={this.handleChange}
          >
            <MenuItem value='Actuator' primaryText='Actuator'/>
            <MenuItem value='Dust Collector' primaryText='Dust Collector'/>
            <MenuItem value='Instrumentation' primaryText='Instrumentation'/>
            <MenuItem value='Valve' primaryText='Valve'/>
          </SelectField>
          <section className='back-next'>
            {
              path &&
              <RaisedButton
                className='back-button'
                primary={true}
                label='back'
              />
            }
            <RaisedButton
              className='next-button'
              primary={true}
              label='next'
              disabled={item.item_type ? false : true}
            />
          </section>
        </div>
      </Card>
    );
  }
};
