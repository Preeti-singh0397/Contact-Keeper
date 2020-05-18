import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      return filterContacts(e.target.value);
    } else {
      return clearFilter();
    }
  };

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Search Contact...."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
