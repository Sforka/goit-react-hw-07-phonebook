import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import contactsReducer from './contactsSlice';



export const Store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});
