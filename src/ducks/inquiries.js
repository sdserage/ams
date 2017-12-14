const _FULFILLED   = 'FULFILLED'
    , DELETE_ITEM  = 'DELETE_ITEM'
    , ADD_ITEM     = 'ADD_ITEM'
    , ACTIVATE     = 'ACTIVATE'
    , DEACTIVATE   = 'DEACTIVATE'
    , initialState = {
      itemCreatorOn: false, //true
      itemList: []
    };

export function activate(){
  return {
    type: ACTIVATE,
    payload: true
  };
};

export function deactivate(){
  return {
    type: DEACTIVATE,
    payload: false
  }
}

export function deleteItem(itemList, index){
  let itemListCopy = itemList.slice();
  itemListCopy.splice(index, 1);
  return {
    type: DELETE_ITEM,
    payload: itemListCopy
  };
};

export function addItem(newItem){
  return {
    type: ADD_ITEM,
    payload: newItem
  }
}

function combineToNewObject(baseObject, newObject){
  return Object.assign({}, baseObject, newObject);
}

export default function inquiries(state = initialState, action){
  const {type, payload} = action;
  switch(type){
    case DELETE_ITEM:
      return combineToNewObject(state, {itemList: payload});
    case ACTIVATE:
      return combineToNewObject(state, {itemCreatorOn: payload});
    case DEACTIVATE:
      return combineToNewObject(state, {itemCreatorOn: payload});
    case ADD_ITEM:
      let itemListCopy = state.itemList.slice();
      itemListCopy.push(payload);
      return combineToNewObject(state, {itemList: itemListCopy});
    default:
      return state;
  }
}
