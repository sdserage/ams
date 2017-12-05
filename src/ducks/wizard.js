const _FULFILLED = 'FULFILLED'
    , initialState = {
      item: {item_type: ''}
    };

function updateState(state, newObject){
  return Object.assign({}, state, newObject);
}

export default function inquiries(state = initialState, action){
  const {type, payload} = action;
  switch(type){
    default:
      return state;
  }
}
