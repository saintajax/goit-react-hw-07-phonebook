export const getContacts = state => state.contacts;
export const getContactsFilter = state => state.filter;

export const getFilteredContacts = state => {
  if (!state.contacts.filter) {
    return state.contacts.contacts;
  } else {
    const normFilter = state.contacts.filter.toLowerCase();
    const filteredContacts = state.contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
    return filteredContacts;
  }
};
