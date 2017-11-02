import {combineReducers} from 'redux';

function users(state=[],action){
  if(action.type === "USERS_LOADED"){
    return action.value;
  }
  return state;
}

function currentUser(state={},action){
  if( action.type === "CHOOSE_USER"){
    return action.value;
  }
  if(action.type === "USERS_LOADED"){
    return action.value[0];
  }
  return state;
}
function searchText(state="",action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}

/*
function filteredUsers(state=[],action){
  return state;
}
*/

const rootReducer = combineReducers({
 users,searchText,currentUser,
});
export default rootReducer;
