import React, {Component} from 'react';
import {connect} from 'react-redux';
import './InquiryWizard.css';
/* Components */
import NumberInput from 'material-ui-number-input';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectItemType from './functionalComponents/SelectItemType';
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
    this.state = {
      item: {item_type: ''},
      path: [],
      location: 'root'
    };
    this.advanceLocation = this.advanceLocation.bind(this);
    this.updateItemType = this.updateItemType.bind(this);
    this.updateValveSize = this.updateValveSize.bind(this);
  }

  componentDidMount(){
    this.setState({
      item: {item_type: ''}
    });
  }

  advanceLocation(){
    const {path, location} = this.state;
    if(location === 'root'){
      this.setState({
        location: path[0]
      });
    } else {
      let currentIndex = path.indexOf(location);
      this.setState({
        location: path[currentIndex + 1]
      });
    }
  }
  //
  updateItemType(event, index, value){
    let item = Object.assign({}, this.state.item);
    item.item_type = value;
    switch(value){
      case 'Actuator':
        this.setState({
          item,
          path: [
            'valve_size',
            'torque',
            'return_type',
            'stem_dimensions',
            'additional_information'
          ]
        });
        break;
      case 'Dust Collector':
        this.setState({
          item,
          path: [
            'particulate_types',
            'temperature',
            'additional_information'
          ]
        });
        break;
      case 'Instrumentation': // Fallthrough
      case 'Valve':
        this.setState({
          item,
          path: [
            'process',
            'temperature',
            'pressure',
            'pipe_size',
            'additional_information'
          ]
        });
        break;
    }
    this.setState({
      item: {item_type: value}
    });
  }

  updateValveSize(event, index, value) {

  }

  render(){
    const {cancel} = this.props;
    const {item, path, location} = this.state;
    let page;
    switch (location) {
      case 'root':
        page = <SelectItemType item={item} updateItemType={this.updateItemType}/>
        break;
      case 'valve_size':
        page = <SetValveSize item={item} updateValveSize={this.updateValveSize}/>
        break;
      default:
        page = null;
    }
    return(
      <Card className='inquiry-wizard' zDepth={4}>
        <div className='wizard-grid'>
          <RaisedButton className='wizard-cancel' secondary={true} label='Cancel' fullWidth={false} onClick={cancel}/>
          <h2 className='root-title'>What type of product are you looking for?</h2>

          {page}

          <section className='previous-next'>
            {
              false &&
              <RaisedButton
                className='previous-button'
                primary={true}
                label='previous'
              />
            }
            <RaisedButton
              className='next-button'
              primary={true}
              label='next'
              disabled={item.item_type ? false : true}
              onClick={this.advanceLocation}
            />
          </section>
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
