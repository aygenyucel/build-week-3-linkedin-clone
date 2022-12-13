import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import searchReducer from "../reducers/searchReducer";

const bigReducer = combineReducers({
  profile: profileReducer,
  listOfProfiles: searchReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
