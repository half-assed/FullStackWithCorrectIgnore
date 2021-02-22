import React, { useEffect, useState } from 'react'
import Contacts from './components/Contacts.js'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter.js'
import axios from 'axios'

/*
  In order for this version to work, you need to remember to run the json server by opening a second terminal cd/Gits/FullStackWithCorrectIgnore/Part2/phonebook and execute: npm server run
*/

const App = () => {
  const [persons, setPersons]     = useState([])
  const [newName, setNewName]     = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter]       = useState('')
  const [notificationMessage, setNotificationMessage]     = useState([null, null])

  useEffect(() => {
    // console.log("Effect triggered")
    const promise = axios.get('/api/persons')
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
      <PersonForm persons={persons} newName={newName} newNumber={newNumber} setP={setPersons} setNa={setNewName} setNu={setNewNumber} message={notificationMessage} setMessage={setNotificationMessage}/>      
      <h2>Numbers</h2>
      <Contacts persons={persons} myFilter={filter} setPersons={setPersons}/>
    </div>
  )
}

export default App