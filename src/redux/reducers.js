import { combineReducers } from 'redux'

const businesses = (state = [], action) => {
    switch (action.type) {
    // case 'ADD_BUSINESS':
    //   const business = action.value.business;
    //   business.id = action.value.id;
    //   return [...state, business];
    case 'DELETE_BUSINESS':
      return state.filter((business, index) => index !== action.value );
    default:
      return state;
  }
}


const user = (state = null) => state




export default combineReducers({ businesses, user })
