import { createSlice, type PayloadAction } from "@reduxjs/toolkit";




interface AlertState {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
}
// 
const initialState: AlertState = {
  message: '',
  type: 'info',
  visible: false,
};

// 
const alertSlice = createSlice({
    name:"alert",
    initialState,
    reducers:{
       showAlert:(state, action:PayloadAction<{ message: string; type?: 'success' | 'error' | 'info' }>)=>{
           state.message = action.payload.message;
           state.type = action.payload.type || "info";
           state.visible = true
       },
       hideAlert:(state)=>{
          state.visible=false;
          state.message="";
       }

    }
})



export const {showAlert,hideAlert} = alertSlice.actions;

export default alertSlice.reducer;