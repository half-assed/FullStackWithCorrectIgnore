import React from 'react'
import server from '../services/serverComms'

const PersonForm = (props) => {
    // console.log("PersonForm props: ", props)
    const clickHandler = (event) => {
      event.preventDefault()
  
      console.log("Person form props.persons: ", props.persons)
      const index = props.persons.map(element => element.name).indexOf(props.newName)
      console.log("Index is:", index)
      if (props.newName === "" || props.newNumber==='') {
        alert("Fields cannot be left empty.")
      }
      else if ( index !== -1) {
        if (window.confirm(`${props.persons[index].name} is already added to phonebook, replace the old number with a new one?`)) {
          const person = props.persons[index]
          console.log("props.persons[index] (person):", props.persons[index])
          server.update([person.id, person.name, props.newNumber])
            .then(data => props.setP(props.persons.map(person => person.name !== props.newName ? person : data)))
          props.setNa('')
          props.setNu('')
        }
      }
      else {
        console.log("server", server)
        server.create([props.newName, props.newNumber]).then(data => props.setP(props.persons.concat(data)))
        props.setNa('')
        props.setNu('')
      }
    }
    const onChangeHandlerName = (event) => (props.setNa(event.target.value))
    const onChangeHandlerNumber = (event) => (props.setNu(event.target.value))

    return (
        <form>
            <div>name: <input value={props.newName} onChange={onChangeHandlerName}/></div>
            <div>number: <input value={props.newNumber} onChange={onChangeHandlerNumber}/></div>
            <div><button type="submit" value={""} onClick={clickHandler}>add</button></div>
      </form>
    )
  }

  export default PersonForm