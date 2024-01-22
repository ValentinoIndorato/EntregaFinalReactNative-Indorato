import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from "../features/Slice"
import ImageReducer from "../features/ImageSlice";

export const store = configureStore({
  reducer: {toDo:toDoReducer, image:ImageReducer},

})
