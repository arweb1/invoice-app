import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFormVisible: false,
    invoicesList: []
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormVisible(state, action){
            state.isFormVisible = true
        },
        hideForm(state, action){
            state.isFormVisible = false
        },
        addInvoice(state, action){
            state.invoicesList.push(action.payload)
        }
    }
})

export const formReducer = formSlice.reducer;
export const {setFormVisible, hideForm, addInvoice} = formSlice.actions;