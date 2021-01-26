import React, { useState } from 'react'
import Contacts from './components/Contacts.js'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setter={setFilter}/>
      <h3>Add new contact</h3>
      <PersonForm persons={persons} newName={newName} newNumber={newNumber} setP={setPersons} setNa={setNewName} setNu={setNewNumber}/>      
      <h2>Numbers</h2>
      <Contacts persons={persons} myFilter={filter}/>
    </div>
  )
}

export default App