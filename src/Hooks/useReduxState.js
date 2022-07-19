import { useContext, useEffect, useState } from "react";
import ReduxContext from "../contexts/ReduxContext";

function useReduxState() {
  const store = useContext(ReduxContext);
  // context로부터 store를 가져옴
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    // Didmount에서 실행
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    // willUnmount에서 실행
    return () => {
      unsubscribe();
    };
  }, [store]);

  return state;
}

export default useReduxState;
