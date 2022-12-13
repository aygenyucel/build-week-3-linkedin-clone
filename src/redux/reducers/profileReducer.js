import { GET_EXPERIENCES, GET_PROFILE } from "../actions";

const initialState = {
  data: [],
  experiencesData: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      // return Object.assign({}, state, { data: action.payload });
      return {
        ...state,
        data: action.payload,
      };
    case GET_EXPERIENCES:
      return {
        ...state,
        experiencesData: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
