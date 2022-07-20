import React, { useRef } from "react";
// import { connect } from "react-redux";
// import { addTodo } from "../redux/actions";

export default function TodoForm({ add }) {
  const inputRef = useRef();

  function click() {
    add(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
}
// 단순한 프레젠테이션 컴포넌트, 함수를 실행하거나 컨테이너가 주는 data를 받아 보여주기만 하는 역할

// export default connect(
//   (state) => ({}),
//   (dispatch) => ({
//     add: (text) => {
//       dispatch(addTodo(text));
//     },
//   })
// )(TodoForm);
// store와 프레젠테이션 컴포넌트를 이어주는 컨테이너 컴포넌트
