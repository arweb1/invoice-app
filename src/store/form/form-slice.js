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
            console.log(action);
            console.log('1')
            // state.invoicesList.push(action)
        }
    }
})

export const formReducer = formSlice.reducer;
export const {setFormVisible, hideForm, addInvoice} = formSlice.actions;