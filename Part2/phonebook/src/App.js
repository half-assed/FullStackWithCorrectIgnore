import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', key: 'Arto Hellas'}
  ]) 
  const [ newName, setNewName ] = useState('')

  const clickHandler = (event) => {
    event.preventDefault()
    const name = event.target.value

    if (name === "") {
      console.log("The name field is empty.")
    }
    else if (persons.map(element => element.key).indexOf(name) !== -1) {
      alert(`${name} is already added to phonebook`)
    }
    else {
      console.log(name)
      setPersons(persons.concat({name: name, key: name}))
      setNewName('')
    }
  }

  const onChangeHandler = (event) => {
    return (
      setNewName(event.target.value)
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={onChangeHandler}/>
        </div>
        <div>

          <button type="submit" value={newName} onClick={clickHandler}>add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <div>{persons.map((element, key) => <p key={key}>{element.name}</p>)}</div>
    </div>
  )
}

export default App