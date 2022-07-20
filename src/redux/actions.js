export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const completeTodo = (index) => {
  return {
    type: COMPLETE_TODO,
    index,
  };
};

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export const showAll = () => {
  return { type: SHOW_ALL };
};
export const showComplete = () => {
  return { type: SHOW_COMPLETE };
};

// users type

// 깃헙 API 호출을 시작하는 타입, 로딩이 시작 됨
export const GET_USERS_START = "GET_USERS_START";

// API호출이 정상적으로 이루어진 경우, 로딩이 끝나고 data를 세팅
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

// API 호출이 실패한 경우, 로딩이 끝나고 에러를 세팅
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}
export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data: data,
    error: null,
  };
}
export function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    error,
  };
}
