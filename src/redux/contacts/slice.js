import { createSlice } from '@reduxjs/toolkit';
import { getContacts, newContact, removeContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(newContact.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
      })

      .addCase(removeContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      })

      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(getContacts.rejected, handleRejected)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.error.message;
};
const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};
export const { changeFilter } = contactsSlice.actions;
