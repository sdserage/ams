const _FULFILLED = 'FULFILLED'
    , initialState = {

    };

function updateState(state, newObject){
  return Object.assign({}, state, newObject);
}

export default function inquiries(state = initialState, action){
  switch(action.type){
    default:
      return state;
  }
}
