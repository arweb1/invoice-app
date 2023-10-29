import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action){
            state.theme = action.payload;
            if (action.payload === 'light') {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
            } else {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
            }
        }
    }
})

export const {setTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;