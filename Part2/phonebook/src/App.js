import React, { useState } from 'react'

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

  const clickHandler = (event) => {
    event.preventDefault()

    const index = persons.map(element => element.key).indexOf(newNumber)
    if (newName === "" || newNumber==='') {
      console.log("Fields cannot be left empty.")
    }
    else if ( index !== -1) {
      alert(`Two contacts can't share the number: ${newNumber} is already the number of ${persons[index].name}`)
    }
    else {
      setPersons(persons.concat({name: newName, number: newNumber, key: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  }

  const onChangeHandlerName = (event) => (setNewName(event.target.value))
  const onChangeHandlerNumber = (event) => (setNewNumber(event.target.value))
  const onChangeHandlerFilter = (event) => (setFilter(event.target.value))

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter names containing: <input value={filter} onChange={onChangeHandlerFilter}/>
        </div>
      </form>
      <h3>Add new contact</h3>
      <form>
        <div>name: <input value={newName} onChange={onChangeHandlerName}/></div>
        <div>number: <input value={newNumber} onChange={onChangeHandlerNumber}/></div>
        <div><button type="submit" value={""} onClick={clickHandler}>add</button></div>
      </form>
      
      <h2>Numbers</h2>
      <div>{persons.filter(element => element.name.toLowerCase().includes(filter.toLowerCase())).map((element, key) => <p key={element.number}>{element.name} - {element.number}</p>)}</div>
    </div>
  )
}

export default App