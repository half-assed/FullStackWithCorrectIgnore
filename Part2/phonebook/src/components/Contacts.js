import axios from 'axios'
import React from 'react'

const Contacts = (props) => {
    //console.log("Contacts props: ", props)
    return (
        <div>{props.persons.filter(element => element.name.toLowerCase().includes(props.myFilter.toLowerCase()))
            .map((element) => <p>{element.name} - {element.number} <button onClick={() => deleter(element)}>delete</button></p>)}</div>
    )
    function deleter (element) {
        console.log("Deleter props: ", element)
        if (window.confirm(`Delete ${element.name}?`)) {
            axios.delete(`/api/persons/${element.id}`)
        }
        props.setPersons(props.persons.filter(person => {if (person.id !== element.id) return person}))
    } 
}

export default Contacts