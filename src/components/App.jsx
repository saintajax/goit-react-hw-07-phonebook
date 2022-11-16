import React from 'react';
import { Box } from './Box/Box';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { getFilteredContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <Box
      width="800px"
      display="flex"
      flexDirection="column"
      ml="auto"
      mr="auto"
      justifyContent="center"
      alignItems="center"
    >
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      ) : (
        ''
      )}
    </Box>
  );
};
