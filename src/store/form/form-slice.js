import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import {v4 as uuidv4} from 'uuid'

const initialState = {
    isFormVisible: false,
    invoicesList: [
        {
            billToClientsName: 'Oleg',
            id: `${uuidv4().substr(0, 6)}`,
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
            status: 'Pending'
        },
        {
            billToClientsName: 'Artem',
            id: `${uuidv4().substr(0, 6)}`,
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
            status: 'Paid'
        },
        
    ]
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
                id: `${uuidv4().substr(0, 6)}`,
                createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
                status: 'Pending'
            }
            state.invoicesList.push(newInvoice)
        }
    }
})

export const formReducer = formSlice.reducer;
export const {setFormVisible, hideForm, addInvoice} = formSlice.actions;