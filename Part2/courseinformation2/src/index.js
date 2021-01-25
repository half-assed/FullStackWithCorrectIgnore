import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
    return (
      <div>
        {courses.map((element, key) => { return <Course props={element} key={element.id}/>})}
      </div>
    )
  }

const Course = (props) => {
  console.log("Course props: ", props)
  const course = props.props
  return (
    <div>
        <Header props={course.name}/>
        <Content props={course.parts} />
        <Total props={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log("Header props: ", props)
  return (
    <h2>{props.props}</h2>
  )
}

const Content = (props) => {
    console.log("Content props: ", props)
    const array = props.props
    return <div>{array.map((element, key) => { return <Part props={element} key={element.id}/> })}</div>
}
const Part = (props) => {
  console.log("Part props: ", props)
  const imTiredofProps = props.props
  return (
    <p>{imTiredofProps.name} {imTiredofProps.exercises}</p>
  )
}

const Total = (props) => {
  console.log("Total props: ", props)
  return (
    <p>Total of <strong>{props.props.reduce((sum, element) => sum += element.exercises, 0)}</strong> exercises</p>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))