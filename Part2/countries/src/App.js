import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [states, setStates] = useState([])
  const [input, setInput] = useState('')
  const [matches, setMatches] = useState([])

  useEffect(function() {
    const promise = axios.get("https://restcountries.eu/rest/v2/all");
    promise.then((promise) => { return (setStates(promise.data.map(element => element))) } )
  }, [])

  //console.log("Afganistan: ", states[0])

  const changeHandler = (event) => {
    setInput(event.target.value)
    setMatches(states.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase()))
      .map((element, key) => <p key={element.alpha3code}>{element.name}</p>))
  }

  const Display = (props) => {
    console.log("Matches", matches)
    if (matches.length === 1) {
      console.log("Only one match")
      console.log("children: ", matches[0].props.children)
      const selected = states.find(element => element.name === matches[0].props.children)
      console.log("Selected: ", selected)
      console.log("Flag: ", selected.flag)
      
      return (
        <div>
          <p>Country: {selected.name}</p>
          <p>capital: {selected.capital}</p>
          <p>population: {selected.population}</p>
          <h2>languages</h2>
          <ul>
            {selected.languages.map(element => <li>{element.name}</li>)}
          </ul>
          <img src={selected.flag} alt="Country flag"/>
        </div>
      )
    }
    if (matches.length > 10) {
      console.log("More than 10 matches")
      return <p>Too many matches, continue typing</p>
    }
    return props.props
  }

  
  return (
    <div>
      <form>
        <div>
          find countries: <input value={input} onChange={(event) => changeHandler(event)}/>
        </div>
      </form>
      {}
      <Display props={matches}/>
    </div>
  )
}

export default App;
