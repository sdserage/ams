const _FULFILLED   = 'FULFILLED'
    , DELETE_ITEM  = 'DELETE_ITEM'
    , ADD_ITEM     = 'ADD_ITEM'
    , ACTIVATE     = 'ACTIVATE'
    , DEACTIVATE   = 'DEACTIVATE'
    , initialState = {
      itemCreatorOn: false,//true,
      itemList: [
        {
          item_type: 'Actuator',
          valve_size: 18,
          valve_additional_information: "It's a stainless steel ball valve.",
          torque: 46,
          return_type: 'Double Acting | Water',
          stem_dimensions: 'Double D',
          stem_additional_information: 'idk',
          additional_information: 'The last actuator I had got a lot of wear and tear, can you make a cover for this one?'
        },
        {
          item_type: 'Dust Collector',
          particulate_types: ['Wood', 'Metal', 'Sticky'],
          particulate_size: 125,
          temperature: 260,
          additional_information: 'Our process leaves a huge mess in the air, make sure this works!'
        },
        {
          item_type: 'Instrumentation',
          process: 'Water',
          temperature: 1080,
          pressure: 130,
          pipe_size: 13,
          pipe_additional_information: 'The pipe is plastic, is that a problem??',
          additional_information: 'I like cats- Oh, you meant about the instrumentation... I got nothing.'
        },
        {
          item_type: 'Valve',
          process: 'Chlorine Gas',
          temperature: 240,
          pressure: 200,
          pipe_size: 15,
          pipe_additional_information: 'Stainless Steel.',
          additional_information: 'This stuff is highly toxic! You better get me one that works!'
        }
      ]
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
