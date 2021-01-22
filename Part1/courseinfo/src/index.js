import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = ({header}) => {
    return (
      <h1>{header}</h1>
    )
  }

  const Content = ({p1, p2, p3, e1, e2, e3}) => {
    return (
      <div>
        <p>
          {p1} {e1}
        </p>
        <p>
          {p2} {e2}
        </p>
        <p>
          {p3} {e3}
        </p>
      </div>
    )
  }

  const Total = ({e1, e2, e3}) => {
    return (
      <p>Number of exercises {e1 + e2 + e3}</p>
    )
  }

  return (
    <div>
      <Header header={course}/>
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))