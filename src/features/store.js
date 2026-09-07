import { configureStore } from '@reduxjs/toolkit';
import postReducer from "./Post/postSlice"

export const store = configureStore({
  reducer: { post: postReducer },
})