import { combineReducers } from "redux";
import filter from "./filterReducer";
import todos from "./todosReducer";
import users from "./users";

const reducer = combineReducers({
  todos,
  filter,
  users,
});

export default reducer;
