export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo.text}</li>;
      })}
    </ul>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// const TodoListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

// // 초기 형태 connect(config)(TodoList), connect()로 만든 함수를 두번째 ()로 바로 실행

// export default TodoListContainer;
