import React from 'react';
import {connect} from 'react-redux';
import {updatePath} from '../../../../../ducks/wizard';
import {deactivate, addItem} from '../../../../../ducks/inquiries';
/* Components */
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

function PathControl(props){
  const {
    item,
    next,
    previous,
    currentLocation,
    updatePath,
    conditionMet,
    deactivate,
    addItem
  } = props;
  const submit = currentLocation && currentLocation === '/productinquiry/additional-info' ? true : false;
  return (
    <section className='previous-next'>
      {
        currentLocation &&
        <Link to={`/productinquiry${previous?previous:''}`}>
        <RaisedButton
          className='previous-button'
          primary={true}
          label='previous'
        />
        </Link>
      }
      <Link to={`/productinquiry${next?next:''}`}>
        <RaisedButton
          className='next-button'
          primary={true}
          label={submit?'submit':'next'}
          disabled={conditionMet ? false : true}
          onClick={
            ()=>{
              if(submit){
                addItem(item);
                deactivate();
              }
            }
          }
        />
      </Link>
    </section>
  );
}

function mapStateToProps(state){
  const {item, path} = state.wizard;
  const {item_type} = item;
  return {
    item,
    item_type,
    path
  };
};

export default connect(mapStateToProps, {deactivate, addItem})(PathControl);
