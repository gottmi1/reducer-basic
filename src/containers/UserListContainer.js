// import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import {
  getUsersPromise,
  // getUsersFailure,
  // getUsersStart,
  // getUsersSuccess,
  getUsersThunk,
} from "../redux/actions";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  console.log(users);

  // const start = useCallback(() => {
  //   dispatch(getUsersStart());
  // }, [dispatch]);

  // const success = useCallback(
  //   (data) => {
  //     dispatch(getUsersSuccess(data));
  //   },
  //   [dispatch]
  // );
  // const failure = useCallback(
  //   (error) => {
  //     dispatch(getUsersFailure(error));
  //   },
  //   [dispatch]
  // ); 컴포넌트에서 옮겨온 로직을 사용하기 때문에 이제 이건 필요없음

  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get("https://api.github.com/users");
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (error) {
  //     dispatch(getUsersFailure(error));
  //   }
  // }, [dispatch]);

  const getUsers = useCallback(() => {
    dispatch(getUsersPromise());
  }, [dispatch]);
  return <UserList users={users} getUsers={getUsers} />;
}
