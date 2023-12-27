export const selectContacts = state => {
  return state.contacts.items;
};
export const selectFilter = state => {
  return state.contacts.filter;
};

export const selectIsLoading = state => {
  return state.contacts.isLoading;
};

export const selectError = state => {
  return state.contacts.error;
};
