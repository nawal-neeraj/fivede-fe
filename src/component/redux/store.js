import { configureStore, combineReducers } from "@reduxjs/toolkit";
import imageReducer from "./imageReducer";
import tagReducer from "./tagReducer";

const reducer = combineReducers({
  imageReducer: imageReducer,
  tagReducer: tagReducer,
});

const store = configureStore({ reducer });

export default store;
