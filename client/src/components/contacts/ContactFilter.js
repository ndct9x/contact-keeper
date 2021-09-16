import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {
  const context = useContext(ContactContext);
  const text = useRef('');
  useEffect(() => {
    if (context.filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = (event) => {
    if (text.current.value !== '') {
      context.filterContact(event.target.value);
    } else {
      context.clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        placeholder='Filter contact ...'
        onChange={onChange}
        type='text'
      />
    </form>
  );
};

export default ContactFilter;
