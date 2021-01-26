import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '01234567890', key: '01234567890'}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const clickHandler = (event) => {
    event.preventDefault()

    const index = persons.map(element => element.key).indexOf(newNumber)
    if (newName === "" || newNumber==='') {
      console.log("Fields cannot be left empty.")
    }
    else if ( index !== -1) {
      alert(`${newNumber} is the number of ${persons[index].name}`)
    }
    else {
      setPersons(persons.concat({name: newName, number: newNumber, key: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  }

  const onChangeHandlerName = (event) => {
    return (
      setNewName(event.target.value)
    )
  }
  const onChangeHandlerNumber = (event) => {
    return (
      setNewNumber(event.target.value)
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>name: <input value={newName} onChange={onChangeHandlerName}/></div>
        <div>number: <input value={newNumber} onChange={onChangeHandlerNumber}/></div>
        <div><button type="submit" value={""} onClick={clickHandler}>add</button></div>
      </form>
      
      <h2>Numbers</h2>
      <div>{persons.map((element, key) => <p key={element.number}>{element.name} - {element.number}</p>)}</div>
    </div>
  )
}

export default App