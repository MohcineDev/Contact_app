import { useState } from 'react';
import AddContact from './AddContact';
import DisplayContacts from './DisplayContacts'
import './App.css'

function App() {

  const [Contacts, setContacts] = useState([
    {
      id: 0,
      name: 'Mouhcine',
      email: 'mouhcinedev@gmail.com',
      tel: '+212 00001111'
    }
  ])

  const addContact = (contact) => {
    setContacts([...Contacts, contact])
  }

  const deleteContact = (contact) => {
    const newContacts = Contacts.filter(item => item.id !== contact.id)
    setContacts(newContacts)
  }

  return (
    <>
      <AddContact addContact={addContact} />
      <div className="wrapper" >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Tel</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            <DisplayContacts Contacts={Contacts} deleteContact={deleteContact} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
