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
        {
            billFromCity: "Харьков",
            billFromCountry: "Украина",
            billFromPostCode: "71108",
            billFromStreet: "пушка 79/1",
            billToCity: "Kyiv",
            billToClientsEmail: "agaevrweb@gmail.com",
            billToClientsName: "Ruslan Ahaiev",
            billToCountry: "Украина",
            billToPostCode: "02144",
            billToStreetAdress : "sofii rusovoy 5b",
            invoiceDate: "2023-10-12",
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
            id: `${uuidv4().substr(0, 6)}`,
            status: "Pending",
        }
        
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