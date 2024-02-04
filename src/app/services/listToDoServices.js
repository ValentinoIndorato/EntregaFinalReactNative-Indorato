import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firabase/db'

export const listTodoApi = createApi({
  reducerPath: 'listTodoApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getListToDo: builder.query({
      query: () => "product.json",
    }),
    getOneToDo: builder.query({
        query:(id)=>`product/${id}.json`,
    })
  }),
})


export const { useGetListToDoQuery,  useGetOneToDoQuery } = listTodoApi