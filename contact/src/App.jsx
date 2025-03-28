import { useState, useEffect } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ConatctDetails from "./components/ConatctDetails";
import api from "./api/contacts";
import EditContact from "./components/EditContact";

function App() {
  const LOCAL_STORAGE_CONATCT = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContact = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const updateContact = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    setContacts(
      contacts.map((contact) =>
        contact.id === response.data.id ? response.data : contact
      )
    );
  };

  const removeHandler = async (id) => {
    await api.delete(`contacts/${id}`);
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) {
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CONATCT, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route
              index
              Component={() => (
                <>
                  <ContactList
                    contactList={contacts}
                    getDeleteContact={removeHandler}
                  />
                </>
              )}
            />
            <Route
              path="add"
              Component={() => <AddContact addContact={addContact} />}
            />
            <Route
              path="edit"
              Component={() => <EditContact updateContact={updateContact} />}
            />
            <Route path="contact/:id" element={<ConatctDetails />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
