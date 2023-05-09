import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  fetchContact,
} from '../service/contactData';

 const contactsSlice = createSlice({
   name: 'contacts',
   initialState: {
     contact: [],
     isLoading: false,
     error: null,
   },
   reducers: {},
   extraReducers: {
     [fetchContact.pending]: state => {
       state.isLoading = true;
     },
     [fetchContact.fulfilled](state, payload) {
       state.contact = payload;
       state.isLoading = false;
       state.error = null;
     },
     [fetchContact.rejected](state, action) {
       state.isLoading = false;
       state.error = action;
     },
     [removeContact.pending]: state => {
       state.isLoading = true;
     },
     [removeContact.fulfilled](state, { payload }) {
       state.isLoading = false;
       const index = state.contact.findIndex(
         contact => contact.id === payload.id
       );
       state.contact.splice(index, 1);
       state.error = null;
     },
     [removeContact.rejected](state, action) {
       state.isLoading = false;
       state.error = action;
     },
     [addContact.pending]: state => {
       state.isLoading = true;
     },
     [addContact.fulfilled](state, { payload }) {
       state.contact = [...state.contact, payload];
       state.isLoading = false;
       state.error = null;
     },
     [addContact.rejected](state, action) {
       state.isLoading = false;
       state.error = action;
     },
     
   }
 });
export const contactsReducer = contactsSlice.reducer;