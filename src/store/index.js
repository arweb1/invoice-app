import { configureStore } from "@reduxjs/toolkit";
import { formIsVisibleReducer } from "./form/form-slice";
import { themeReducer } from "./theme/theme-slice";
const store = configureStore({
    reducer: {
        theme: themeReducer,
        formVisible: formIsVisibleReducer
    },
    devTools: true
})

export default store