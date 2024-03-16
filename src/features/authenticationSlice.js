import { createSlice } from '@reduxjs/toolkit'
const initialState={
    value:{
        email:null,
        idToken:null,
        localId:null,
    }
}
export const authenticationSlice = createSlice({
    name:"authentication",
    initialState,
    reducers:{
         setUser:(state, action)=> {
            state.value={
                email:       action.payload.email ,
        idToken:action.payload.idToken,
        localId:action.payload.localId,
            }       
      },
      clearUser:(state, action)=> {
        state.value={
            email:action.payload.email ,
            idToken:action.payload.idToken,
            localId:action.payload.localId,

        }
        }}
})
export const { setUser,clearUser  } = authenticationSlice.actions
export default authenticationSlice.reducer