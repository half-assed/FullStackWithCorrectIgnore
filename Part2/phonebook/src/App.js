import React, { useEffect, useState } from 'react'
import Contacts from './components/Contacts.js'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter.js'
import axios from 'axios'

const App = () => {
  const [persons, setPersons]     = useState([])
  const [newName, setNewName]     = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter]       = useState('')

  useEffect(() => {
    // console.log("Effect triggered")
    const promise = axios.get('http://localhost:3001/persons')
    console.log("Promise", promise)
    promise.then((response) => {
      return setPersons(response.data)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setter={setFilter}/>
      <h3>Add new contact</h3>
      <PersonForm persons={persons} newName={newName} newNumber={newNumber} setP={setPersons} setNa={setNewName} setNu={setNewNumber}/>      
      <h2>Numbers</h2>
      <Contacts persons={persons} myFilter={filter} setPersons={setPersons}/>
    </div>
  )
}

export default App