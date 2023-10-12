import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

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
            const newInvoice = {
                ...action.payload,
                createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
            }
            state.invoicesList.push(newInvoice)
        }
    }
})

export const formReducer = formSlice.reducer;
export const {setFormVisible, hideForm, addInvoice} = formSlice.actions;