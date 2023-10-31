import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./form/form-slice";
import { themeReducer } from "./theme/theme-slice";
const store = configureStore({
    reducer: {
        theme: themeReducer,
        form: formReducer,
    },
    devTools: true
})

export default store