import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firabase/db'
import { queryCache } from '@reduxjs/toolkit/query/react';

export const listTodoApi = createApi({
  reducerPath: 'listTodoApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ['Post', "PostUser"],

  endpoints: (builder) => ({
    getListToDo: builder.query({
      query: () => `ListToDo.json`,
    }),
    getOneToDo: builder.query({
      //query: () => `ListToDo.json`,
       //query:(id)=>`ListToDo/${id}.json`,
       query:(done)=>`ListToDo.json?orderBy="done"&equalTo=${done}` ,
      providesTags: ['Post'],

    }),   
   postOneToDo: builder.mutation({
      query(data) {
        const { id, ...body } = data
       
       return{ url: `ListToDo/${id}.json`,// funciona asignandole despues de la barra algo ese va ser como su id
          method: 'POST',//con el metodo post me genera la id automatica y hace el proble de un objeto dentro de otro con el metodo put no
          body:data,
        }
      //Lo que se envia debe ser un objeto al menos, si es un string solo no lo toma fire
      //PROBLEMA, cuando agrego el objeto se crea dentro de otro objeto por ende me queda
    // id(que le asigno yo):{ id(que leasigna fire){el objeto que le mando}} PREGUNTAR A CRIS
      }
      
    
      
    }),
    updateOneTodo: builder.mutation({
      query:(data)=> ({
    
          url: `ListToDo/${data.id}.json`,
          method: 'PUT',
          body:data,
        }),
        /*isSuccess: () => {
          queryCache.invalidateQueries('getOneToDo');
        },*/
        invalidatesTags: ['Post'],
        //invalidatesTags: (result, error, { id }) => [{ type: 'OneTodo', id }],//PREGUNTAR A CRIS
    }),
    deleteOneTodo: builder.mutation({
      query:(id)=> ({    
          url: `ListToDo/${id}.json`,
          method: 'DELETE',
        }),       
        invalidatesTags: ['Post'],
    }),

    //USUARIO LOGEADO
    //GET
    getUserListToDo: builder.query({      
      query: (localId) => `Users/${localId}/ListToDo.json`,
    }),
    getUserOneToDo: builder.query({      
       query:(data)=>
      `Users/${data.localId}/ListToDo.json?orderBy="done"&equalTo=${data.done}`,
      providesTags: ['PostUser'],

    }),
    //Post
    postUserOneToDo: builder.mutation({
      query:(data) =>  ({
         url: `Users/${data.localId}/ListToDo/${data.id}.json`,
          method: 'POST',
          body:data,}),
          invalidatesTags: ['PostUser'],      
    }),
    //Put
    updateUserOneTodo: builder.mutation({
      query:({id, localId,...body })=> ({    
          url: `Users/${localId}/ListToDo/${id}.json`,
          method: 'PUT',
          body:{id,...body},
        }),        
        invalidatesTags: ['PostUser'],
    }),
    //Delete
    deleteUserOneTodo: builder.mutation({
      query:(data)=> ({    
          url: `Users/${data.localId}/ListToDo/${data.id}.json`,
          method: 'DELETE',
        }),       
        invalidatesTags: ['Postuser'],
    }),   
  }),
})


export const {
   useGetListToDoQuery,
   useGetOneToDoQuery,
   usePostOneToDoMutation,
   useUpdateOneTodoMutation,
   useDeleteOneTodoMutation,
  //USUARIOS REGISTRADOS
   useGetUserListToDoQuery,
   useGetUserOneToDoQuery,
   usePostUserOneToDoMutation,
   useUpdateUserOneTodoMutation } = listTodoApi
