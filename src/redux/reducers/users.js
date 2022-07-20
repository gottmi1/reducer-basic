import {
  GET_USERS_FAILURE,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from "../actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = initialState, action) {
  if (action.type === GET_USERS_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_USERS_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  return state;
}
