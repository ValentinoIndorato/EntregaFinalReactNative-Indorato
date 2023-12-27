import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from "../features/Slice"
export const store = configureStore({
  reducer: {toDo:toDoReducer},
})
