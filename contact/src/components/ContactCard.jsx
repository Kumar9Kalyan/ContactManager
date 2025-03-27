import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { contact } = props;
  const deleteContact = (id) => {
    props.deleteContact(id);
  };

  return (
    <div key={contact.id} className="flex flex-row justify-center mt-4">
      <Link to={`/contact/${contact.id}`} state={{ contact }}>
        <div className="mr-4">{contact.name}</div>
        <div>{contact.email}</div>
      </Link>

      <button
        onClick={() => deleteContact(contact.id)}
        className="bg-red-600 rounded-2xl w-15 ml-4 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
