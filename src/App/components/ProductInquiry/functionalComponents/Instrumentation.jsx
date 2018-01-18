import React from 'react';
import {connect} from 'react-redux';
import {deleteItem} from '../../../../ducks/inquiries';
/* Components */
import {Card, CardText} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

function Instrumentation(props){
  const {
    item_type,
    process,
    temperature,
    pressure,
    pipe_size,
    pipe_additional_information,
    additional_information
  } = props.item;
  const {index, itemList, deleteItem, displayButtons} = props;
  return (
    <Card>
      <div className='card-heading'>
        <h2 className='item-header'>{item_type}</h2>
        <div className='tool-icons'>
          {
            /* displayButtons &&
              <FontAwesome
                name='pencil-square-o'
                className='card-icons'
              /> */
          }
          {
            displayButtons &&
              <FontAwesome
                name='trash-o'
                className='card-icons'
                onClick={()=> deleteItem(itemList, index)}
              />
          }
        </div>
      </div>
      <div className='card-info'>
        <CardText>
          <span>Process: </span>{process}
        </CardText>

        <CardText>
          <span>Temperature: </span>{temperature} &#x2109;
        </CardText>

        <CardText>
          <span>Pipe Size: </span>NPS {pipe_size} inch
        </CardText>

        <CardText>
          <span>Pressure: </span>{pressure} psi
        </CardText>

        <div className='double-column'>
          <CardText>
            <span>Pipe Additional Information: </span>{pipe_additional_information}
          </CardText>
        </div>

        <div className='double-column'>
          <CardText>
            <span>Additional Information: </span>{additional_information}
          </CardText>
        </div>
      </div>
    </Card>
  );
}

function mapStateToProps(state){
  return {
    itemList: state.inquiries.itemList
  };
}

export default connect(mapStateToProps, {deleteItem})(Instrumentation);
