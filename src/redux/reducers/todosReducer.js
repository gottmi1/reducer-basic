import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initialState = [{ text: "todo1" }];

// todos에만 관여하는 reducer
const todosReducer = (prevState = initialState, action) => {
  if (action.type === ADD_TODO) {
    return [...prevState, { text: action.text }];
  }
  if (action.type === COMPLETE_TODO) {
    return prevState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      } else {
        return todo;
      }
    });
  }
  return prevState;
};

export default todosReducer;
