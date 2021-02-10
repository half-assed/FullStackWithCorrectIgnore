import React from 'react'
import axios from 'axios'

const PersonForm = (props) => {
    // console.log("PersonForm props: ", props)
    const clickHandler = (event) => {
      event.preventDefault()
  
      const index = props.persons.map(element => element.key).indexOf(props.newNumber)
      if (props.newName === "" || props.newNumber==='') {
        console.log("Fields cannot be left empty.")
      }
      else if ( index !== -1) {
        alert(`Two contacts can't share the number: ${props.newNumber} is already the number of ${props.persons[index].name}`)
      }
      else {
        axios.post(
          `http://localhost:3001/persons`,  // persons is an element(/container) in the db.json file, 3001 is the port defined for json-server when installed with: npx json-server --port 3001 --watch db.json
          {name: props.newName, number: props.newNumber, key: props.newNumber})
          .then(response => {
          props.setP(props.persons.map(person => person.key !== props.newNumber ? person : response.data))
          props.setNa('')
          props.setNu('')
        })

        
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