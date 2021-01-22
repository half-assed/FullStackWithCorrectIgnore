import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = ({g,n,b}) => {
    if (g == 0 && n == 0 && b == 0)
      return <p>No feedback given</p>
    return (
      <div>
        <p>good {g}</p>
        <p>neutral {n}</p>
        <p>bad {b}</p>
        <p>all {g + b + n}</p>
        <p>average {(g - n)/(g+b)}</p>
        <p>positive {g/(g+n+b)}</p>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      <Statistics g={good} n={neutral} b={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)