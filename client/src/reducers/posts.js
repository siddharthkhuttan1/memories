import * as actionTypes from '../actions/actionTypes'


const initialState = {};
export default (state = initialState, action) => {
  console.log({action})
   switch(action.type){
     case actionTypes.SET_POSTS: 
            return action.value;
    case 'CREATE': 
            return state;

     default: return state;
   }
}