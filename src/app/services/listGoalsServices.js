import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firabase/db'

export const ListGoalsApi = createApi({
  reducerPath: 'ListGoalsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ['Post','PostUser'],

  endpoints: (builder) => ({
    getListGoals: builder.query({
      query: () => `ListGoals.json`,
      providesTags: ['Post'],
    }),
    getOneGoal: builder.query({
      query:(id)=>`ListGoals.json?orderBy="id"&equalTo=${id}`,
      providesTags: ['Post'],

    }),
   postOneGoal: builder.mutation({
      query:(data)=>( {
        
          url: `ListGoals/10.json`,// funciona asignandole despues de la barra algo ese va ser como su id
          method: 'POST',
          body:data
      }),
   
    }),
    updateOneGoal: builder.mutation({
      query:(data)=> ({    
        url: `ListGoals/${data.id}.json`,
        method: 'PUT',
        body:data,
      }),             
      invalidatesTags: ['Post'],  
    }),
    //USUARIOS REGISTRADOS
    //GET
    getUserListGoals: builder.query({      
      query: (localId) => `Users/${localId}/ListGoals.json`,
    }),
    getUserOneGoal: builder.query({
      query:({ localId, id, ...body })=>     
        `Users/${localId}/ListGoals.json?orderBy="id"&equalTo=${id}`,
        providesTags: ['PostUser'],
    }),
    updateUserOneGoal: builder.mutation({
      query:({ localId, id, ...body })=>( { 
        url: `Users/${localId}/ListGoals/${id}.json`,
        method: 'PUT',
        body:{id, ...body}, }),                   
      invalidatesTags: ['PostUser'], 
    }),
  }),
})


export const { 
  useGetListGoalsQuery,
  useGetOneGoalQuery,
  usePostOneGoalMutation,
  useUpdateOneGoalMutation,
  //USUARIOS REGISTRADOS
  useGetUserListGoalsQuery,
  useGetUserOneGoalQuery,
  useUpdateUserOneGoalMutation } = ListGoalsApi