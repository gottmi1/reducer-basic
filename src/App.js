import "./App.css";
// import { useContext, useEffect, useState } from "react";
// import { addTodo } from "./redux/actions";
// import ReduxContext from "./contexts/ReduxContext";
// import store from "./redux/store";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContiner from "./containers/TodoFormContainer";
// import useReduxState from "./Hooks/useReduxState";
// import useReduxDispatch from "./Hooks/useReduxDIspatch";

function App() {
  // const state = useReduxState(); TodoList로 컴포넌트화 시켰으니 제외시킴
  // const dispatch = useReduxDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer />
        <TodoFormContiner />
        {/* {JSON.stringify(state)} */}
      </header>
    </div>
  );
}

export default App;
