import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import usersProfileReducer from "./../reducers/usersProfileReducer";

const bigReducer = combineReducers({
  profile: profileReducer,
  usersProfile: usersProfileReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
