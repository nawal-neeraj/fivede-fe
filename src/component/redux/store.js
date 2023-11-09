import { configureStore, combineReducers } from "@reduxjs/toolkit";
import imageReducer from "./imageReducer";
import tagReducer from "./tagReducer";
import progressReducer from "./progressReducer";

const reducer = combineReducers({
  imageReducer: imageReducer,
  tagReducer: tagReducer,
  progressReducer: progressReducer,
});

const store = configureStore({ reducer });

export default store;
