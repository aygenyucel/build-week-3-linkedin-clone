import { GET_PROFILE } from "../actions";

const initialState = {
  data: ["me"],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return Object.assign({}, state, {data: action.payload});
    default:
      return state;
  }
};

export default profileReducer;