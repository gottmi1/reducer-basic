import { SHOW_COMPLETE, SHOW_ALL } from "../actions";

const initialState = "ALL";
// filter에만 관여하는 ruducer
const filterReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLET";
  }
  if (action.type === SHOW_ALL) {
    return "ALL";
  }
  return prevState;
};

export default filterReducer;
