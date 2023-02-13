import { createSlice, CreateSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const cakeSlice=createSlice({
    name:'cake',
    initialState:{
        noOfcakes:10
    },
    reducers:{
        ordered:(state)=>{
            state.noOfcakes-1
        },
        restocked:(state,action)=>{
            state.noOfcakes=state.noOfcakes+action.payload
        }
    }
})

export const {ordered,restocked}=cakeSlice.actions;
export default cakeSlice.reducer