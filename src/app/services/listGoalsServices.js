import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firabase/db'

export const ListGoalsApi = createApi({
  reducerPath: 'ListGoalsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ['Post'],

  endpoints: (builder) => ({
    getListGoals: builder.query({
      query: () => `ListGoals.json`,
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
      query(data) {
        const { id, ...body } = data //revisar pq el body no se usa
        return {
          url: `ListGoals/0.json`,
          method: 'PUT',
          body:data,
          invalidatesTags: ['Post'],

        }},
    })
  }),
})


export const { useGetListGoalsQuery,  useGetOneGoalQuery, usePostOneGoalMutation, useUpdateOneGoalMutation } = ListGoalsApi