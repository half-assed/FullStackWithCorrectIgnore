import React from 'react'

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
export default Course