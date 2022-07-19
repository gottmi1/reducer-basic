import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

// const TodoListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

// 초기 형태 connect(config)(TodoList), connect()로 만든 함수를 두번째 ()로 바로 실행

function TodoListContainer() {
  // 얘가 하는일 : 컴포넌트와 store와 연결 후 store의 state를 꺼내, 필요한걸 props로 넣어주는 역할.
  const todos = useSelector((state) => state.todos);
  return <TodoList todos={todos} />;
}

export default TodoListContainer;
