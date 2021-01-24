import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return <Course course={course} />
}
const Header = (props) => {
  console.log("Header props: ", props)
  return (
    <h1>{props.props}</h1>
  )
}
const Content = (props) => {
  console.log("Content props: ", props)
  return (
    <div>
      <Part props={props.props[0]}/>
      <Part props={props.props[1]}/>
      <Part props={props.props[2]}/>
    </div>
  )
}
const Part = (props) => {
  console.log("Part props: ", props)
  return (
    <p>{props.props.name} {props.props.exercises}</p>
  )
}
const Total = (props) => {
  console.log("Total props: ", props)
  return (
    <p>Total Exercises: {props.props.reduce((sum, element) => sum += element.exercises, 0)}</p>
  )
}
const Course = (props) => {
  console.log("Course props: ", props)
  return (
    <div>
      <Header props={props.course.name}/>
      <Content props={props.course.parts}/>
      <Total props={props.course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))