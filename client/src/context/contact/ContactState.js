import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  GET_CONTACT,
  CLEAR_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get contacts
  const getContact = async () => {
    try {
      const res = await axios.get('/api/contacts');
      dispatch({ type: GET_CONTACT, payload: res.data.contacts });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  // Clear Contacts
  const clearContact = () => dispatch({ type: CLEAR_CONTACT });

  // Add Contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data.contact });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  };

  // Update contact
  const updateContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );
      dispatch({ type: UPDATE_CONTACT, payload: res.data.contact });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  };

  // Set Current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contact
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContact,
        clearFilter,
        getContact,
        clearContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
