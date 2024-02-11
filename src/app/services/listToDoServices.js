import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firabase/db'

export const listTodoApi = createApi({
  reducerPath: 'listTodoApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getListToDo: builder.query({
      query: () => `ListToDo.json`,
    }),
    getOneToDo: builder.query({
      query: () => `ListToDo.json`,
       // query:(id)=>`product/${id}.json`,
    }),
   postOneToDo: builder.mutation({
      query:(data)=>( {
        
          url: `ListToDo/10.json`,// funciona asignandole despues de la barra algo ese va ser como su id
          method: 'POST',
          body:data
      //Lo que se envia debe ser un objeto al menos, si es un string solo no lo toma fire
      }),
   
    }),
    updateOneTodo: builder.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `ListToDo/0.json`,
          method: 'PUT',
          body:data,
        }},
        //invalidatesTags: (result, error, { id }) => [{ type: 'OneTodo', id }],//PREGUNTAR A CRIS
    })
  }),
})


export const { useGetListToDoQuery,  useGetOneToDoQuery, usePostOneToDoMutation, useUpdateOneTodoMutation } = listTodoApi