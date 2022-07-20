import { useEffect } from "react";
import axios from "axios";

export default function UserList({ users, getUsers }) {
  // api호출을 didmount단계에서 해야 함
  useEffect(() => {
    // useEffect는 async로 사용할 수 없으므로 안에 async펑션을 하나 더 선언해 줘야 함.
    // async function getUsers() {
    //   try {
    //     start();
    //     const res = await axios.get("https://api.github.com/users");
    //     success(res.data);
    //   } catch (error) {
    //     failure(error);
    //   }
    // } 컴포넌트가 뷰만 담당할 수 있도록 로직을 컨테이너로 옮겨줬다.
    getUsers();
  }, [getUsers]);

  if (users.length === 0) {
    return <p>정보가 없습니다</p>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
}
