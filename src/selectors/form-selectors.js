import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredInvoices = createSelector(
    (state) => state.form.invoicesList,
    (state) => state.form.activeFilters,
    (invoicesList, activeFilters) => {
        if(activeFilters.length === 0){
            return invoicesList
        }else{
            return invoicesList.filter(invoice => activeFilters.includes(invoice.status))
        }
    }
);