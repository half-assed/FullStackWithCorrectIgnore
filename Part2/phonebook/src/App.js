import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const clickHandler = (event) => {
    event.preventDefault()
    console.log("Event: ", event)
    if (event.target.value !== "") {
      updatePersons(event.target.value)
      setNewName('')
      console.log(persons)
    }  
    else {
      console.log("name field was empty, no person added")
    }
    
  }
  const updatePersons = (props) => {
    console.log("updatePersons props: ", props)
    setPersons(persons.concat({name: props}))
  }
  const updateField = (event) => { // the props of the event handlers always contains the event. 
    setNewName(event.target.value)
  }
  // clickHandler's event is currently refering the button, so the value is not ready

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={updateField}/>
        </div>
        <div>

          <button type="submit" value={newName} onClick={clickHandler}>add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <div>{persons.map((element, key) => <p key={element.name}>{element.name}</p>)}</div>
    </div>
  )
}

export default App