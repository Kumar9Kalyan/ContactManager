import React from "react";
import ContactCard from "./ContactCard";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteHandler = (id) => {
    props.getDeleteContact(id);
  };

  const contactList = props.contactList.map((contact) => {
    return (
      <>
        <ContactCard
          key={contact.id}
          contact={contact}
          deleteContact={deleteHandler}
        />
      </>
    );
  });

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-6  ">Contact List</h1>

      <div className="text-large font-bold mt-6  ">{contactList}</div>
      <Link to="/add">
        <button className="mt-5 bg-blue-600 rounded-xl w-18 ml-4 cursor-pointer ">
          Add Contact
        </button>
      </Link>
    </div>
  );
};

export default ContactList;
