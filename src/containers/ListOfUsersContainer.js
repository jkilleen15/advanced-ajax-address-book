import { connect } from 'react-redux';
import ListOfUsers from "../components/ListOfUsers";
import {chooseUser} from "../actions";

function mapStateToProps(state){
  return {
    users: state.users,
    searchText: state.searchText
  }
}
function mapDispatchToProps(dispatch){
  return {
    setUser:function(user){
      dispatch(chooseUser(user));
    }
  }
}

const ListOfUsersContainer = connect(mapStateToProps,mapDispatchToProps)(ListOfUsers);
export default ListOfUsersContainer
