import React, { useContext, Fragment, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/ContactContext';
import Spinner from '../layout/Spinner';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContact, loading } = contactContext;

  useEffect(() => {
    getContact();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Fragment>
          {filtered !== null
            ? filtered.map((contact) => (
                <ContactItem contact={contact} key={contact._id} />
              ))
            : contacts.map((contact) => (
                <ContactItem contact={contact} key={contact._id} />
              ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
