import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import usersProfileReducer from "./../reducers/usersProfileReducer";
import searchReducer from "../reducers/searchReducer";

const bigReducer = combineReducers({
  profile: profileReducer,
  usersProfile: usersProfileReducer,
  listOfProfiles: searchReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
