import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  'https://645777d61a4c152cf982b279.mockapi.io';

export const fetchContact = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get('/contact');
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
export const removeContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contact/${id}`, );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (newContact, thunkApi) => {
    try {
      const { data } = await axios.post('/contact',newContact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);