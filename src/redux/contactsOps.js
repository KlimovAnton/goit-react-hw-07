import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://663a12151ae792804bedf063.mockapi.io";

export const fetchContacts = createAsyncThunk('fetchAllContacts', async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});
