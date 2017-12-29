import axios from 'axios';
const _FULFILLED            = '_FULFILLED'
    , GET_INQUIRY_LIST      = 'GET_INQUIRY_LIST'
    , DELETE_ITEM           = 'DELETE_ITEM'
    , ADD_ITEM              = 'ADD_ITEM'
    , ACTIVATE              = 'ACTIVATE'
    , DEACTIVATE            = 'DEACTIVATE'
    , INQUIRY_CONTENTS_ON   = 'INQUIRY_CONTENTS_ON'
    , INQUIRY_CONTENTS_OFF  = 'INQUIRY_CONTENTS_OFF'
    , initialState          = {
      itemCreatorOn: false, //true
      itemList: [],
      inquiryList: [],
      viewInquiryContentsOn: false,
      inquiryContents: []
    };

const url = '/api/';

export function inquiryContentsOff(){
  return {
    type: INQUIRY_CONTENTS_OFF,
    payload: false
  }
}

export function inquiryContentsOn(){
  return {
    type: INQUIRY_CONTENTS_ON,
    payload: true
  }
}

export function getInquiryList(queries){
  const response = axios.get(`${url}inquiries${
    queries ? '?' + queries.join('&') : ''
  }`)
    .then(resp=>{
      return resp.data;
    });
  return {
    type: GET_INQUIRY_LIST,
    payload: response
  }
}

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
    case INQUIRY_CONTENTS_ON:
      return combineToNewObject(state, {viewInquiryContentsOn: payload});
    case INQUIRY_CONTENTS_OFF:
      return combineToNewObject(state, {viewInquiryContentsOn: payload});
    case GET_INQUIRY_LIST + _FULFILLED:
      return combineToNewObject(state, {inquiryList: payload});
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
