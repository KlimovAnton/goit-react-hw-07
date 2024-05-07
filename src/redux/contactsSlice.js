import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
      },
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //           state.items.push(action.payload);
    //         },
    //         prepare: (username, phone) => {
    //           return {
    //             payload: {
    //               id: crypto.randomUUID(),
    //               name: username, 
    //               number: phone,
    //             },
    //           };
    //         },
    //       },

    //     deleteContact: (state, action) => {
    //         state.items = state.items.filter(
    //         (contact) => contact.id !== action.payload
    //           );
    //     },
    // },
    extraReducers: 
      builder => builder
        .addCase(fetchContacts.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload
          state.loading = false;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.error = true;
          state.loading = false;
        })
        ,
})

export const { addContact, deleteContact} = slice.actions;
export const contactsReducer = slice.reducer;