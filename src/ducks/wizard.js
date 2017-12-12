const _FULFILLED                          = 'FULFILLED'
    , UPDATE_PATH                         = 'UPDATE_PATH'
    , UPDATE_ITEM_TYPE                    = 'UPDATE_ITEM_TYPE'
    , UPDATE_VALVE_SIZE                   = 'UPDATE_VALVE_SIZE'
    , UPDATE_TORQUE_VALUE                 = 'UPDATE_TORQUE_VALUE'
    , UPDATE_VALVE_ADDITIONAL_INFORMATION = 'UPDATE_VALVE_ADDITIONAL_INFORMATION'
    , UPDATE_RETURN_TYPE                  = 'UPDATE_RETURN_TYPE'
    , UPDATE_STEM_DIMENSIONS              = 'UPDATE_STEM_DIMENSIONS'
    , UPDATE_STEM_ADDITIONAL_INFORMATION  = 'UPDATE_STEM_ADDITIONAL_INFORMATION'
    , UPDATE_PARTICULATE_TYPES            = 'UPDATE_PARTICULATE_TYPES'
    , UPDATE_PARTICULATE_SIZE             = 'UPDATE_PARTICULATE_SIZE'
    , UPDATE_TEMPERATURE                  = 'UPDATE_TEMPERATURE'
    , UPDATE_PROCESS                      = 'UPDATE_PROCESS'
    , UPDATE_PRESSURE                     = 'UPDATE_PRESSURE'
    , UPDATE_PIPE_SIZE                    = 'UPDATE_PIPE_SIZE'
    , UPDATE_PIPE_ADDITIONAL_INFORMATION  = 'UPDATE_PIPE_ADDITIONAL_INFORMATION'
    , UPDATE_ADDITIONAL_INFORMATION       = 'UPDATE_ADDITIONAL_INFORMATION'
    , initialState = {
      item: {item_type: ''},
      path: ['','']
    };

export function updateStemAdditionalInformation(event, stem_additional_information){
      return {
        type: UPDATE_STEM_ADDITIONAL_INFORMATION,
        payload: stem_additional_information
      }
    }

export function updateStemDimensions(event, index, stem_dimensions){
  return {
    type: UPDATE_STEM_DIMENSIONS,
    payload: stem_dimensions
  }
}

export function updateReturnType(event, index, return_type){
  return {
    type: UPDATE_RETURN_TYPE,
    payload: return_type
  }
}

export function updateValveAdditionalInformation(event, valve_additional_information){
  return {
    type: UPDATE_VALVE_ADDITIONAL_INFORMATION,
    payload: valve_additional_information
  }
}

export function updateTorqueValue(event, torque){
  if(torque === ''){
    torque = NaN;
  }
  return {
    type: UPDATE_TORQUE_VALUE,
    payload: torque
  }
}

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

export function updatePipeSize(event, pipe_size){
  if(pipe_size === ''){
    pipe_size = NaN;
  }
  return {
    type: UPDATE_VALVE_SIZE,
    payload: +pipe_size
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
    case UPDATE_TORQUE_VALUE:
      const item_updateTorqueValue = combineToNewObject(state.item, {torque: payload});
      return combineToNewObject(state, {item: item_updateTorqueValue});
    case UPDATE_VALVE_ADDITIONAL_INFORMATION:
      const item_updateValveAdditionalInformation = combineToNewObject(state.item, {valve_additional_information: payload});
      return combineToNewObject(state, {item: item_updateValveAdditionalInformation});
    case UPDATE_RETURN_TYPE:
      const item_updateReturnType = combineToNewObject(state.item, {return_type: payload});
      return combineToNewObject(state, {item: item_updateReturnType});
    case UPDATE_STEM_DIMENSIONS:
      const item_updateStemDimensions = combineToNewObject(state.item, {stem_dimensions: payload});
      return combineToNewObject(state, {item: item_updateStemDimensions});
    case UPDATE_STEM_ADDITIONAL_INFORMATION:
      const item_updateStemAdditionalInformation = combineToNewObject(state.item, {stem_additional_information: payload});
      return combineToNewObject(state, {item: item_updateStemAdditionalInformation});
    default:
      return state;
  }
}
