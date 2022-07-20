import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
// 미들웨어 설정. 미들웨어는 펑션임
// function middleware1(store) {
//   console.log("middleware1", 0);
//   return (next) => {
//     console.log("middleware1", 1, next);
//     return (action) => {
//       console.log("middleware1", 2);
//       // 1. 먼저 실행
//       const returnValue = next(action);
//       // next로 middleware2로 넘어가고 3번 실행 후 middleware2의 returnValue를 여기로 보내줌
//       console.log("middleware1", 3);
//       // 4. 3번에서 여기로 돌아옴
//       return returnValue;
//       // 최종적으로 실행되는 놈
//     };
//   };
// }
// function middleware2(store) {
//   console.log("middleware2", 0);
//   return (next) => {
//     console.log("middleware2", 1, next);
//     return (action) => {
//       console.log("middleware2", 2);
//       // 2. 1번 다음에 실행
//       const returnValue = next(action);
//       // 마지막 미들웨어의 next가 실행되면 실제로 dispatch가 됨
//       console.log("middleware2", 3);
//       // 3. 2번 다음에 이게 찍히고 returnValue를 다시 middleware1으로 돌려줌
//       return returnValue;
//     };
//   };
// }

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, promise))
);
// 두 번째 인자로 인핸서가 들어갈 수 있음 applyMiddleware를 사용함

export default store;
