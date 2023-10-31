import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import {v4 as uuidv4} from 'uuid'

const initialState = {
    isFormVisible: false,
    invoicesList: [
        {
            billToClientsName: 'Oleg',
            id: `${uuidv4().substr(0, 6)}`,
            createdAt: moment().format("YYYY-MM-DD"),
            status: 'Pending',
            productName: ['product', 'second prodfuct', 'second product'],
            productPrice:[20, 200, 10],
            productQty: [4, 2, 12],
            totalAmount: 600

        },
        {
            billToClientsName: 'Artem',
            id: `${uuidv4().substr(0, 6)}`,
            createdAt: moment().format("YYYY-MM-DD"),
            status: 'Paid',
            productName: ['product', 'second prodfuct', 'second product'],
            productPrice:[50, 300, 20],
            productQty: [7, 3, 2],
            totalAmount: 600
            
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
            createdAt: moment().format("YYYY-MM-DD"),
            id: `${uuidv4().substr(0, 6)}`,
            status: "Pending",
            productName: ['product', 'second prodfuct', 'second product'],
            productPrice:[20, 200, 10],
            productQty: [4, 2, 12],
            totalAmount: 600
        }
        
    ],
    activeFilters: [],
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        showForm(state, action){
            state.isFormVisible = true
        },
        hideForm(state, action){
            state.isFormVisible = false
        },
        addInvoice(state, action){
            const newInvoice = {
                ...action.payload,
                id: `${uuidv4().substr(0, 6)}`,
                createdAt: moment().format("YYYY-MM-DD"),
                status: 'Pending'
            }
            state.invoicesList.push(newInvoice)
        },
        removeInvoice(state, action){
            const invoiceIdToRemove = action.payload;
            state.invoicesList = state.invoicesList.filter(invoice => invoice.id !== invoiceIdToRemove)
        },
        toggleStatus(state, action){
            const invoiceToToggle = action.payload;
            const targetInvoice = state.invoicesList.find(invoice => invoice.id === invoiceToToggle);
            if(targetInvoice){
                targetInvoice.status = 'Paid'
            }
        },
        addFilter(state, action){
            state.activeFilters.push(action.payload)
        },
        removeFilter(state, action){
            state.activeFilters = state.activeFilters.filter(filter => filter !== action.payload)
        },
    }
})

export const formReducer = formSlice.reducer;
export const {
    showForm, 
    hideForm, 
    addInvoice, 
    removeInvoice, 
    toggleStatus, 
    addFilter,
    removeFilter,
    setTotalAmount
} = formSlice.actions;