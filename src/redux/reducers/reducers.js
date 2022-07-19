import { combineReducers } from "redux";
import filter from "./filterReducer";
import todos from "./todosReducer";

const reducer = combineReducers({
  todos,
  filter,
});

export default reducer;
