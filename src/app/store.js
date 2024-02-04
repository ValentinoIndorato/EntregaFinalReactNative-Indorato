import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import toDoReducer from "../features/Slice"
import ImageReducer from "../features/ImageSlice";
import { listTodoApi } from './services/listToDoServices';

export const store = configureStore({
  reducer: {toDo:toDoReducer, image:ImageReducer,[listTodoApi.reducerPath]: listTodoApi.reducer, },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(listTodoApi.middleware),

})

setupListeners(store.dispatch)


