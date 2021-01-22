import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const object = {
    course: 'Half Stack application development',
    parts: {
      first: {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      second: {
        name: 'Using props to pass data',
        exercises: 7,
      },
      third: {
        name: 'State of a component',
        exercises: 14
      }
    },
    exercises: function() { return this.parts.first.exercises + this.parts.second.exercises + this.parts.third.exercises;}
  }
  
  return (
    <div>
      <h1>{object.course}</h1>
      <p>{object.parts.first.name} {object.parts.first.exercises}</p>
      <p>{object.parts.second.name} {object.parts.second.exercises}</p>
      <p>{object.parts.third.name} {object.parts.third.exercises}</p>
      <p>Total Exercises: {object.exercises()}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))