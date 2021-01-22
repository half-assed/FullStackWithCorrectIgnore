import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  const Content = (props) => {
    console.log("Contents props: ", props)
    return (
      <div>
        <p>{props.props[0].name} {props.props[0].exercises}</p>
        <p>{props.props[1].name} {props.props[1].exercises}</p>
        <p>{props.props[2].name} {props.props[2].exercises}</p>
      </div>
    )
  }
  const Total = (props) => {
    console.log("Total props: ", props)
    return (
      <p>{props.props[0].exercises + props.props[1].exercises + props.props[2].exercises}</p>
    )
  }
  
  return (
    <div>
      <Header header={course}/>
      <Content props={parts}/>
      <Total props={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))