import React from 'react';
import {connect} from 'react-redux';
import {deleteItem} from '../../../../ducks/inquiries';
/* Components */
import {Card, CardText} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

function Actuator(props){
  const {
    item_type,
    valve_size,
    valve_additional_information,
    torque,
    return_type,
    stem_dimensions,
    stem_additional_information,
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
          <span>Valve Size: </span>{valve_size} inch
        </CardText>

        <CardText>
          <span>Torque: </span>{torque} in-lb
        </CardText>

        <div className='double-column'>
          <CardText>
            <span>Valve Additional Information: </span>{valve_additional_information}
          </CardText>
        </div>

        <CardText>
          <span>Stem Dimensions: </span>{stem_dimensions}
        </CardText>

        <CardText>
          <span>Return Type: </span>{return_type}
        </CardText>

        <div className='double-column'>
          <CardText>
            <span>Stem Additional Info: </span>{stem_additional_information}
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

export default connect(mapStateToProps, {deleteItem})(Actuator);
