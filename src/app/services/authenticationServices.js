import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import{ authentication_url,api_key } from '../../firabase/db'

export const authenticationApi = createApi({

    reducerPath: 'authenticationApi',
    baseQuery: fetchBaseQuery({ baseUrl: authentication_url }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query:(auth)=>( {              
                url: `accounts:signUp?key=${api_key}`,
                method: 'POST',
                body:auth
            }),
        }),
            login: builder.mutation({
                query:({...auth})=>( {              
                    url: `accounts:signInWithPassword?key=${api_key}`,
                    method: 'POST',
                    body:auth
                }),
            })
    })


})
export const{useSignUpMutation,useLoginMutation} = authenticationApi