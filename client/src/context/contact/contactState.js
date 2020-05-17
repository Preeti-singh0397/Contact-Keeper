import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  UPDATE_CONTACT
} from "../types";

const ContactState = props => {
  const initialStates = {
    contacts: [
      {
        id: 1,
        name: "preeti",
        email: "preeti@gmail.com",
        phone: "111-111-1111",
        type: "professional"
      },
      {
        id: 2,
        name: "yash",
        email: "yash@gmail.com",
        phone: "222-222-2222",
        type: "professional"
      },
      {
        id: 3,
        name: "raj",
        email: "raj@gmail.com",
        phone: "333-333-3333",
        type: "personal"
      },
      {
        id: 4,
        name: "ritu",
        email: "ritu@gmail.com",
        phone: "555-555-55555",
        type: "personal"
      }
    ],
    current: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialStates);

  //Add Contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Contact

  // Clear Contact

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
