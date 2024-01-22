import { createSlice } from '@reduxjs/toolkit'
export const ImageSlice = createSlice({
    name:"Image",
    initialState:{
      value:null
    },
    reducers:{
         onAddImage:(state, action)=> {
           state.value=action.payload
           console.log(state)

      
      },
        }
})
export const { onAddImage,  } = ImageSlice.actions
export default ImageSlice.reducer