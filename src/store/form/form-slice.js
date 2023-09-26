import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFormVisible: false
}

const formIsVisibleSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormVisible(state, action){
            state.isFormVisible = true
        },
        hideForm(state, action){
            state.isFormVisible = false
        }
        
    }
})

export const formIsVisibleReducer = formIsVisibleSlice.reducer;
export const {setFormVisible, hideForm} = formIsVisibleSlice.actions;