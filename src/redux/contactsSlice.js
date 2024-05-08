import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
      },
    extraReducers: 
      builder => builder
        .addCase(fetchContacts.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload
          state.loading = false;
        })
        .addCase(fetchContacts.rejected, (state) => {
          state.error = true;
          state.loading = false;
        })
        .addCase(addContact.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.loading = false;
          state.items.push(action.payload)
        })
        .addCase(addContact.rejected, (state) => {
          state.error = true;
          state.loading = false;
        })
        .addCase(deleteContact.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.items = state.items.filter(
            (contact) => contact.id !== action.payload.id
              );
          state.loading = false;
        })
        .addCase(deleteContact.rejected, (state) => {
          state.error = true;
          state.loading = false;
        }),
})

export const contactsReducer = slice.reducer;