export function chooseUser(user){
  return {
    type:"CHOOSE_USER",
    value:user
  }
}

export function setSearchText(text){
  return {
    type:"SET_SEARCH_TEXT",
    value:text
  }
}

export function loadUsers() {
  return function (dispatch) {
    dispatch({
      // signals that loading has begun
      // we are loading, please stand by
      type: "LOAD_USERS"
    });
    fetch("/users")
      .then((response) => {
        return response.json();
      }).then((users) => {
        // this.setState[{users}];
        dispatch(usersLoaded(users));
      });
  };
}

export function usersLoaded(users) {
  return {
    type: "USERS_LOADED",
    value: users
  };
}
