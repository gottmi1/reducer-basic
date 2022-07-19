import React, { useRef } from "react";
import useReduxDispatch from "../Hooks/useReduxDIspatch";
import { addTodo } from "../redux/actions";

export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  function add() {
    dispatch(addTodo(inputRef.current.value));
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={add}>추가</button>
    </div>
  );
}
