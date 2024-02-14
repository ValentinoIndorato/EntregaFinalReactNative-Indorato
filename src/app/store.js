import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import toDoReducer from "../features/Slice"
import ImageReducer from "../features/ImageSlice";
import { listTodoApi } from './services/listToDoServices';
import { ListGoalsApi } from './services/listGoalsServices';
import { authenticationApi } from './services/authenticationServices';
import authenticationReducer from "../features/authenticationSlice";
export const store = configureStore({
  reducer: {
    toDo:toDoReducer,
    image:ImageReducer,
    authentication:authenticationReducer,
    [listTodoApi.reducerPath]: listTodoApi.reducer, 
    [ListGoalsApi.reducerPath]: ListGoalsApi.reducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    ListGoalsApi.middleware, 
    listTodoApi.middleware,
    authenticationApi.middleware
    ),

})

setupListeners(store.dispatch)


