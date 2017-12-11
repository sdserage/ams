import React from 'react';
import {connect} from 'react-redux';
import {updatePath} from '../../../../../ducks/wizard';
/* Components */
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

function PathControl(props){
  const {next, previous, currentLocation, updatePath, conditionMet} = props;
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
          label='next'
          disabled={conditionMet ? false : true}
        />
      </Link>
    </section>
  );
}

function mapStateToProps(state){
  const {item, path} = state.wizard;
  const {item_type} = item;
  return {
    item_type,
    path
  };
};

export default connect(mapStateToProps, {})(PathControl);
