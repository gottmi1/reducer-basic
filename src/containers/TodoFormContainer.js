import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/actions";

const TodoFormContiner = connect(
  (state) => ({}),
  (dispatch) => ({
    add: (text) => {
      dispatch(addTodo(text));
    },
  })
)(TodoForm);

export default TodoFormContiner;
