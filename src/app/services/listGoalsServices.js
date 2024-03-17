import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firabase/db'

export const ListGoalsApi = createApi({
  reducerPath: 'ListGoalsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ['Post'],

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
    getUserListGoals: builder.query({
      
      query: (localId) => `Users/${localId}/ListGoals.json`,
    }),
  }),
})


export const { useGetListGoalsQuery,  useGetOneGoalQuery, usePostOneGoalMutation, useUpdateOneGoalMutation, useGetUserListGoalsQuery } = ListGoalsApi