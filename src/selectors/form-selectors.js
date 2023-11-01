import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredInvoices = createSelector(
    (state) => state.form.invoicesList,
    (state) => state.form.activeFilters,
    (invoicesList, activeFilters) => {
        if (activeFilters.length === 0) {
            return invoicesList
        } else {
            return invoicesList.filter(invoice => activeFilters.includes(invoice.status))
        }
    }
);

export const selectInvoices = state => state.form.invoicesList

export const selectProductPrices = createSelector(
    [selectInvoices],
    (invoices) => {
        return invoices.map((invoice) => invoice.productPrice);
    }
);

export const selectProductQty = createSelector(
    [selectInvoices],
    (invoices) => {
        return invoices.map((invoice) => invoice.productQty);
    }
);