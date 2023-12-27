import { createSlice } from '@reduxjs/toolkit'
export const toDoSlice = createSlice({
    name:"addToDo",
    initialState:{value:[
        "Rendir seminario",
        "Tesis",
        "Viaje a Mendoza",
        "",
      ]},
    reducers:{
         onAddItem:(state, action)=> {
           state.value.push(action.payload)
           

      
      },
       onHandlerDelete:(state, action, index)=>{
        state.value.splice(action.payload,1)
       
      } }// Como hago si necesito pasar varias props y no solo action
})
export const { onAddItem, onHandlerDelete, } = toDoSlice.actions
export default toDoSlice.reducer

