import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = (props) => {
    if (false)
      return <p>No feedback given</p>
    return (
      <p>{props.prompt} {props.value}</p>
    )
  }
  const Button = ({method, prompt}) => {
    return (
      <button onClick={method}>{prompt}</button>
    )
  }
  if (good == 0 && neutral==0 && bad==0) {
    return (
      <div>
      <Button value={good} method={() => setGood(good + 1)} prompt="good"/>
      <Button value={neutral} method={() => setNeutral(neutral + 1)} prompt="neutral"/>
      <Button value={bad} method={() => setBad(bad + 1)} prompt="bad"/>
      <h2>statistics</h2>
      <p>No feedback given</p>
      </div>

    )
  }
  else {
    return (
      <div>
        <Button value={good} method={() => setGood(good + 1)} prompt="good"/>
        <Button value={neutral} method={() => setNeutral(neutral + 1)} prompt="neutral"/>
        <Button value={bad} method={() => setBad(bad + 1)} prompt="bad"/>
        <h2>statistics</h2>
        <Statistics prompt="good" value={good}/>
        <Statistics prompt="neutral" value={neutral}/>
        <Statistics prompt="bad" value={bad}/>
        <Statistics prompt="all" value={good+neutral+bad}/>
        <Statistics prompt="average" value={(good-bad)/(good+bad)}/>
        <Statistics prompt="positive" value={good/(good+neutral+bad)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)