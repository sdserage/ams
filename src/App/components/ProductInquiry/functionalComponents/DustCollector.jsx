import React from 'react';
import {connect} from 'react-redux';
import {deleteItem} from '../../../../ducks/inquiries';
/* Components */
import {Card, CardText} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

function DustCollector(props){
  const {
    item_type,
    particulate_types,
    particulate_size,
    temperature,
    additional_information
  } = props.item;
  const {index, itemList, deleteItem, displayButtons} = props;
  //N&middot;m</p> : <p>
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
        <div className='double-column'>
          <CardText>
            <span>Particulate Type: </span>{particulate_types}
          </CardText>
        </div>

        <CardText>
          <span>Particulate Size: </span>{particulate_size} &micro;m
        </CardText>

        <CardText>
          <span>Temperature: </span>{temperature} &#x2109;
        </CardText>

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

export default connect(mapStateToProps, {deleteItem})(DustCollector);
