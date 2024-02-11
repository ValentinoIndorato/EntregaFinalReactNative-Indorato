import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import toDoReducer from "../features/Slice"
import ImageReducer from "../features/ImageSlice";
import { listTodoApi } from './services/listToDoServices';
import { ListGoalsApi } from './services/listGoalsServices';

export const store = configureStore({
  reducer: {toDo:toDoReducer, image:ImageReducer,[listTodoApi.reducerPath]: listTodoApi.reducer, [ListGoalsApi.reducerPath]: ListGoalsApi.reducer,},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(ListGoalsApi.middleware, listTodoApi.middleware),

})

setupListeners(store.dispatch)


