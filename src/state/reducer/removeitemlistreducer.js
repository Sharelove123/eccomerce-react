const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';


const initialState = {
    items: []
  };
  
export function reducerForremoveitem(state = initialState, action) {
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      case REMOVE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item !== action.payload)
        };
      default:
        return state;
    }
  }
  