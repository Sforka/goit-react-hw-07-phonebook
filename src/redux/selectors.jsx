export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
