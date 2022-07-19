import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import ReduxContext from "./contexts/ReduxContext";
// import { addTodo, completeTodo, showAll, showComplete } from "./redux/actions";

// store.subscribe(() => {
//   console.log(store.getState());
// });
// store에 변경이 있는지 구독. dispatch가 일어날 때마다 실행됨. 리턴이 구독해지이기 때문에 실행하면 구독이 해지된다.

// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("coding2"));
// store.dispatch(addTodo("coding3"));
// store.dispatch(addTodo("coding4"));

// unsubsrcibe();
// // 구독 해지. 구독만 해지했을 뿐 dispatch는 계속 일어난다.
// store.dispatch(addTodo("coding5"));

// console.log(store.getState());

// store.dispatch(addTodo("할 일"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());
// store.dispatch(showAll());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
