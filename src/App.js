import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import UserDetailContainer from "./containers/UserDetailContainer";
// import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import SearchBox from "./components/SearchBox";
import { connect } from "react-redux";
import {loadUsers} from "./actions";

// this changed to class component from functional
  // we need to use componentDidMount - built in - only for class components

class App extends Component {
  constructor(){
    super();
    this.state = {users: []};
  }

// this code executes when everything is good to go/successfully loaded
  componentDidMount() {
    this.props.loadUsers();
    /*
    fetch("/users")
      .then((response) => {
        return response.json();
      }).then((users) => {
        this.setState[{users}];
      });
      */
  }

// removed <ListOfUsersContainer />
// as soon as App is ready, make fetch,
// when data is done
  render(){
    return (
      <div>
        <SearchBox />
        <ListOfUsersContainer />
        <UserDetailContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadUsers:function(user){
      dispatch(loadUsers(user));
    }
  }
}

export default connect(null,mapDispatchToProps)(App);

// export default App;
