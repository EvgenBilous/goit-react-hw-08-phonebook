import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6584695a4d1ee97c6bcfb104.mockapi.io';
export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      console.log('Error in fetching contacts: ', error);
    }
  }
);

export const newContact = createAsyncThunk(
  'contacts/addContact',
  async payload => {
    try {
      const response = await axios.post('/contacts', payload);
      return response.data;
    } catch (error) {
      console.log('Error in adding contact: ', error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async payload => {
    try {
      await axios.delete(`/contacts/${payload}`);
      return payload;
    } catch (error) {
      console.log('Error in removing contact: ', error);
    }
  }
);
