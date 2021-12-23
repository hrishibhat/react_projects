import React, { useState } from 'react'
import ContactTable from './tables/ContactTable'
import AddContactForm from './forms/AddContactForm'


function App() {

  const ContactData = [
    {id:1, name: 'Hrishi', email: 'hrishibhat@gmail.com' },
    {id:2, name: 'Ananya', email: 'rao.ananya0@gmail.com' },
    {id:3, name: 'John', email: 'example@gmail.com' }
  ]

  const [contacts, setContact] = useState(ContactData)

  const addContact = (contact) => {
    contact.id = contacts.length + 1;
    setContact([...contacts, contact])
  }


  return (
    <div className="container">
      <h1>Contacts CRUD App</h1>
        <div className="flex-row">
          <div className="flex-large"><h2>Add Contact</h2>
          <AddContactForm addContact = {addContact} />
          </div>
          <div className="flex-large"><h2>View Contacts</h2>
          <ContactTable contacts={contacts} />
          </div>
        </div>

    </div>
  );
}

export default App;
