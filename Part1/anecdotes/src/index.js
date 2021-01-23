import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length-1).fill(0))

  const random = () => {
      // return Math.floor(Math.random * anecdotes.length)
      // comment out multiple lines with Shift+Alt+A
/*       console.log("Random")
      console.log(Math.random() * anecdotes.length)
      console.log(Math.floor(Math.random() * anecdotes.length))
      console.log("-----") */
      // so Math.random requires () to be called, probably because it is a named method and not written in React
      return Math.floor(Math.random() * anecdotes.length)
  }
  const vote = () => {
    // you should not use props here because vote, being a helper method of App, has direct access to the selected variable
    const array = [...votes]
    console.log(array)
    array[selected] = array[selected] + 1
    console.log(array)
    return array
  }

  const Button = ({method, text}) => {
    return (
      <button onClick={method}>{text}</button>
    )
  }

  return (
    <div>
      {console.log(selected)}
      {console.log(votes)}
      <p>{props.anecdotes[selected]}</p>
      <p>
        <Button text="vote"   method={() => setVotes(vote(selected))} />
        <Button text="random" method={() => setSelected(random)}      />
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)