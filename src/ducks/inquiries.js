import axios from 'axios';
const _FULFILLED                    = '_FULFILLED'
    , GET_INQUIRY_LIST              = 'GET_INQUIRY_LIST'
    , DELETE_ITEM                   = 'DELETE_ITEM'
    , ADD_ITEM                      = 'ADD_ITEM'
    , ACTIVATE                      = 'ACTIVATE'
    , DEACTIVATE                    = 'DEACTIVATE'
    , INQUIRY_CONTENTS_ON           = 'INQUIRY_CONTENTS_ON'
    , INQUIRY_CONTENTS_OFF          = 'INQUIRY_CONTENTS_OFF'
    , UPDATE_INQUIRY_CONTENTS       = 'UPDATE_INQUIRY_CONTENTS'
    , ARCHIVE_INQUIRY               = 'ARCHIVE_INQUIRY'
    , UNARCHIVE_INQUIRY             = 'UNARCHIVE_INQUIRY'
    , UPDATE_PRIMARY_FILTER         = 'UPDATE_PRIMARY_FILTER'
    , UPDATE_PROPERTY_FILTER        = 'UPDATE_PROPERTY_FILTER'
    , UPDATE_PROPERTY_FILTER_VALUE  = 'UPDATE_PROPERTY_FILTER_VALUE'
    , UPDATE_DATE_FILTER            = 'UPDATE_DATE_FILTER'
    , UPDATE_DATE_FILTER_VALUE      = 'UPDATE_DATE_FILTER_VALUE'
    , DELETE_MODE_ON                = 'DELETE_MODE_ON'
    , DELETE_MODE_OFF               = 'DELETE_MODE_OFF'
    , DELETE_INQUIRY                = 'DELETE_INQUIRY'
    , initialState                  = {
      itemCreatorOn:                false, //true
      itemList:                     [],
      inquiryList:                  [],
      viewInquiryContentsOn:        false,
      inquiryContents:              [],
      filterValues: {
        primaryFilter:              'non-archived',
        propertyFilter:             'No filter',
        propertyFilterValue:        '',
        dateFilter:                 false,
        dateFilterValue:            '',
        deleteMode:                 false
      }
    };

const url = '/api/';

export function deleteInquiry(inquiry_id, filterValues){
  const response = axios.delete(`${url}inquiries/${inquiry_id}`)
    .then(resp=>{
      const {
        primaryFilter,
        propertyFilter,
        propertyFilterValue,
        dateFilter,
        dateFilterValue
      } = filterValues;
      let queries = [];
      if(primaryFilter){
        queries.push(`include=${primaryFilter}`);
      }
      if(propertyFilter !== 'No filter'){
        queries.push(`${propertyFilter}=${propertyFilterValue}`);
      }
      if(dateFilter){
        queries.push(`date=${dateFilterValue}`);
      }
      return axios.get(`${url}inquiries${
        queries.length > 0 ? '?' + queries.join('&') : ''
      }`)
        .then(resp=>{
        return resp.data;
      });
    });
  return {
    type: DELETE_INQUIRY,
    payload: response
  }
}

export function updateDateFilter(event, index, value){
  return {
    type: UPDATE_DATE_FILTER,
    payload: value
  }
}

export function updateDateFilterValue(date){
  return {
    type: UPDATE_DATE_FILTER_VALUE,
    payload: date
  }
}

export function deleteModeOn(){
  return {
    type: DELETE_MODE_ON,
    payload: true
  }
}
export function deleteModeOff(){
  return {
    type: DELETE_MODE_OFF,
    payload: false
  }
}

export function updatePropertyFilter(event, index, value){
  return {
    type: UPDATE_PROPERTY_FILTER,
    payload: value
  }
}

export function updatePrimaryFilter(event, index, value){
  return {
    type: UPDATE_PRIMARY_FILTER,
    payload: value
  }
}

export function updatePropertyFilterValue(event, value){
  return {
    type: UPDATE_PROPERTY_FILTER_VALUE,
    payload: value
  }
}

export function archiveInquiry(inquiry_id, filterValues){
  const response = axios.put(`${url}inquiries/${inquiry_id}`)
    .then(resp=>{
      const {
        primaryFilter,
        propertyFilter,
        propertyFilterValue,
        dateFilter,
        dateFilterValue
      } = filterValues;
      let queries = [];
      if(primaryFilter){
        queries.push(`include=${primaryFilter}`);
      }
      if(propertyFilter !== 'No filter'){
        queries.push(`${propertyFilter}=${propertyFilterValue}`);
      }
      if(dateFilter){
        queries.push(`date=${dateFilterValue}`);
      }
      return axios.get(`${url}inquiries${
        queries.length > 0 ? '?' + queries.join('&') : ''
      }`)
        .then(resp=>{
        return resp.data;
      });
    });
  return {
    type: ARCHIVE_INQUIRY,
    payload: response
  }
}

export function unarchiveInquiry(inquiry_id, filterValues){
  const response = axios.put(`${url}inquiries/${inquiry_id}`)
    .then(resp=>{
      const {
        primaryFilter,
        propertyFilter,
        propertyFilterValue,
        dateFilter,
        dateFilterValue
      } = filterValues;
      let queries = [];
      if(primaryFilter){
        queries.push(`include=${primaryFilter}`);
      }
      if(propertyFilter !== 'No filter'){
        queries.push(`${propertyFilter}=${propertyFilterValue}`);
      }
      if(dateFilter){
        queries.push(`date=${dateFilterValue}`);
      }
      return axios.get(`${url}inquiries${
        queries.length > 0 ? '?' + queries.join('&') : ''
      }`)
        .then(resp=>{
        return resp.data;
      });
    });
  return {
    type: UNARCHIVE_INQUIRY,
    payload: response
  }
}

export function updateInquiryContents(inquiry_id){
  const response = axios.get(`${url}inquiries/inquiry_items/${inquiry_id}`)
    .then(resp=>{
      return resp.data;
    });
  return {
    type: UPDATE_INQUIRY_CONTENTS,
    payload: response
  }
}

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

export function getInquiryList(filterValues){
  const {
    primaryFilter,
    propertyFilter,
    propertyFilterValue,
    dateFilter,
    dateFilterValue
  } = filterValues;
  let queries = [];
  if(primaryFilter){
    queries.push(`include=${primaryFilter}`);
  }
  if(propertyFilter !== 'No filter'){
    queries.push(`${propertyFilter}=${propertyFilterValue}`);
  }
  if(dateFilter){
    queries.push(`date=${dateFilterValue}`);
  }
  const response = axios.get(`${url}inquiries${
    queries.length > 0 ? '?' + queries.join('&') : ''
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
    case UPDATE_INQUIRY_CONTENTS + _FULFILLED:
      return combineToNewObject(state, {inquiryContents: payload});
    case ARCHIVE_INQUIRY + _FULFILLED:
      return combineToNewObject(state, {inquiryList: payload});
    case UNARCHIVE_INQUIRY + _FULFILLED:
      return combineToNewObject(state, {inquiryList: payload});
    case UPDATE_PRIMARY_FILTER:
      const filterValues_updatePrimaryFilter = combineToNewObject(state.filterValues, {primaryFilter: payload})
      return combineToNewObject(state, {filterValues: filterValues_updatePrimaryFilter});
    case UPDATE_PROPERTY_FILTER:
      const filterValues_updatePropertyFilter = combineToNewObject(state.filterValues, {propertyFilter: payload})
      return combineToNewObject(state, {filterValues: filterValues_updatePropertyFilter});
    case UPDATE_PROPERTY_FILTER_VALUE:
      const filterValues_updatePropertyFilterValue = combineToNewObject(state.filterValues, {propertyFilterValue: payload})
      return combineToNewObject(state, {filterValues: filterValues_updatePropertyFilterValue});
    case UPDATE_DATE_FILTER_VALUE:
      const filterValues_updateDateFilterValue = combineToNewObject(state.filterValues, {dateFilterValue: payload})
      return combineToNewObject(state, {filterValues: filterValues_updateDateFilterValue});
    case UPDATE_DATE_FILTER:
      const filterValues_updateDateFilter = combineToNewObject(state.filterValues, {dateFilter: payload})
      return combineToNewObject(state, {filterValues: filterValues_updateDateFilter});
    case DELETE_MODE_ON:
      const filterValues_deleteModeOn = combineToNewObject(state.filterValues, {deleteMode: payload});
      return combineToNewObject(state, {filterValues: filterValues_deleteModeOn});
    case DELETE_MODE_OFF:
      const filterValues_deleteModeOff = combineToNewObject(state.filterValues, {deleteMode: payload});
      return combineToNewObject(state, {filterValues: filterValues_deleteModeOff});
    case DELETE_INQUIRY + _FULFILLED:
      return combineToNewObject(state, {inquiryList: payload});
    default:
      return state;
  }
}
