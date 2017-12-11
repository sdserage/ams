const _FULFILLED = 'FULFILLED'
    , UPDATE_PATH = 'UPDATE_PATH'
    , UPDATE_ITEM_TYPE = 'UPDATE_ITEM_TYPE'
    , UPDATE_VALVE_SIZE = 'UPDATE_VALVE_SIZE'
    , initialState = {
      item: {item_type: ''},
      path: ['','']
    };

export function updatePath(newPath){
  return {
    type: UPDATE_PATH,
    payload: newPath
  }
}

export function updateItemType(event, index, item_type){
  let path;
  switch (item_type) {
    case 'Actuator':
      path = [
        '',
        '/valve-size',
        '/torque',
        '/return',
        '/stem',
        '/additional-info'
      ];
      break;
    case 'Dust Collector':
      path = [
        '',
        '/particulates',
        '/temperature',
        '/additional-info'
      ];
      break;
    case 'Instrumentation':
    case 'Valve':
      path = [
        '',
        '/process',
        '/temperature',
        '/pressure',
        '/pipe',
        '/additional-info'
      ];
      break;
    default:
      path = [''];
      break;
  }
  return {
    type: UPDATE_ITEM_TYPE,
    payload: {
      item_type: item_type,
      path: path
    }
  }
}

export function updateValveSize(event, valve_size){
  if(valve_size === ''){
    valve_size = NaN;
  }
  return {
    type: UPDATE_VALVE_SIZE,
    payload: +valve_size
  }
}

function combineToNewObject(baseObject, newObject){
  return Object.assign({}, baseObject, newObject);
}

export default function inquiries(state = initialState, action){
  const {type, payload} = action;
  switch(type){
    case UPDATE_ITEM_TYPE:
      const item_updateItemType = combineToNewObject(state.item, {item_type: payload.item_type});
      return combineToNewObject(state, {item: item_updateItemType, path: payload.path});
    case UPDATE_PATH:
      return combineToNewObject(state, {path: payload});
    case UPDATE_VALVE_SIZE:
      const item_updateValveSize = combineToNewObject(state.item, {valve_size: payload});
      return combineToNewObject(state, {item: item_updateValveSize});
    default:
      return state;
  }
}
