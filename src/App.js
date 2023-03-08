import React, { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ConatctAdder";

import "./Style/app.css";
import Navbar from "./components/Navbar";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allContacts = [...contacts, contactData];
    setContacts(allContacts);

    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const clearAllContact = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <Navbar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3>Contatct list:</h3>
        {contacts.map((data) => (
          <Contact key={data.id} data={data} />
        ))}

        <button onClick={clearAllContact} style={{ background: "#cc0800" }}>
          Clear All Contact
        </button>
      </div>
    </>
  );
};

export default App;
