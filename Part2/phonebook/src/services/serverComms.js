import axios from 'axios'

const getAll = (props) => {
    console.log(props)
    return axios.get(`http://localhost:3001/persons`) // persons is an element(/container) in the db.json file, 3001 is the port defined for json-server when installed with: npx json-server --port 3001 --watch db.json
        .then(response => response.data )
}

const create = (props) => {
    console.log("Server Create props: ", props)
    return axios.post(`http://localhost:3001/persons`, {name: props[0], number: props[1]})
        .then(response => response.data )
}

const update = (props) => {
    console.log("Server Update props: ", props)
    return axios.put(`http://localhost:3001/persons/${props[0]}`, {name: props[1], number: props[2]})
        .then(response => response.data)
}

export default {getAll, create, update}