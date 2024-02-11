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
      query(data) {
        const { id, ...body } = data
       
       return{ url: `ListToDo/${id}.json`,// funciona asignandole despues de la barra algo ese va ser como su id
          method: 'PUT',//con el metodo post me genera la id automatica y hace el proble de un objeto dentro de otro con el metodo put no
          body:data,
        }
      //Lo que se envia debe ser un objeto al menos, si es un string solo no lo toma fire
      //PROBLEMA, cuando agrego el objeto se crea dentro de otro objeto por ende me queda
    // id(que le asigno yo):{ id(que leasigna fire){el objeto que le mando}} PREGUNTAR A CRIS
      }
      
    
      
    }),
    updateOneTodo: builder.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `ListToDo/${id}.json`,
          method: 'PUT',
          body:data,
        }},
        //invalidatesTags: (result, error, { id }) => [{ type: 'OneTodo', id }],//PREGUNTAR A CRIS
    })
  }),
})


export const { useGetListToDoQuery,  useGetOneToDoQuery, usePostOneToDoMutation, useUpdateOneTodoMutation } = listTodoApi