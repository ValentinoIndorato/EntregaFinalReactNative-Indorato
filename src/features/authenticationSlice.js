import { createSlice } from '@reduxjs/toolkit'
const initialState={
    value:{
        email:null,
        idToken:null
    }
}
export const authenticationSlice = createSlice({
    name:"authentication",
    initialState,
    reducers:{
         setUser:(state, action)=> {
            state.value={
                email:       action.payload.email ,
        idToken:action.payload.idToken
            }       
      },
      clearUser:(state, action)=> {
        state.value={
            email:       action.payload.email ,
            idToken:action.payload.idToken
        }
        }}
})
export const { setUser,clearUser  } = authenticationSlice.actions
export default authenticationSlice.reducer