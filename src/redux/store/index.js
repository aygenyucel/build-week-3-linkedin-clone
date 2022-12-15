import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import usersProfileReducer from "./../reducers/usersProfileReducer";
import searchReducer from "../reducers/searchReducer";
import putProfileReducer from "../reducers/putProfileReducer";

const bigReducer = combineReducers({
  profile: profileReducer,
  usersProfile: usersProfileReducer,
  listOfProfiles: searchReducer,
  edit: putProfileReducer
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
