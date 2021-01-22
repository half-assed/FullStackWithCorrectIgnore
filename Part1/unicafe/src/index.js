import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = ({text, value}) => {
    return (
      <tr><td>{text}</td><td>{value}</td></tr>
    )
  }
  const Button = ({method, text}) => {
    return (
      <button onClick={method}>{text}</button>
    )
  }
  if (good === 0 && neutral===0 && bad===0) {
    return (
      <div>
        <Button value={good} method={() => setGood(good + 1)} text="good"/>
        <Button value={neutral} method={() => setNeutral(neutral + 1)} text="neutral"/>
        <Button value={bad} method={() => setBad(bad + 1)} text="bad"/>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <Button value={good} method={() => setGood(good + 1)} text="good"/>
        <Button value={neutral} method={() => setNeutral(neutral + 1)} text="neutral"/>
        <Button value={bad} method={() => setBad(bad + 1)} text="bad"/>
        <h2>statistics</h2>
        <table>
        <tbody>
          <Statistics text="good" value={good}/>
          <Statistics text="neutral" value={neutral}/>
          <Statistics text="bad" value={bad}/>
          <Statistics text="all" value={good+neutral+bad}/>
          <Statistics text="average" value={(good-bad)/(good+bad)}/>
          <Statistics text="positive" value={good/(good+neutral+bad)}/>        
        </tbody>
      </table>

      </div>
    )
  }
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)