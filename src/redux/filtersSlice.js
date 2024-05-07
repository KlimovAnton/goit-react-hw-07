import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        filtersSlice: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { filtersSlice } = slice.actions;
export const filtersReducer = slice.reducer;