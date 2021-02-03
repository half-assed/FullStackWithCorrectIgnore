import React from 'react'

const Contacts = (props) => {
    console.log("Contacts props: ", props)
    return (
        <div>{props.persons.filter(element => element.name.toLowerCase().includes(props.myFilter.toLowerCase()))
            .map((element) => <p key={element.number}>{element.name} - {element.number}</p>)}</div>
    )
}

export default Contacts