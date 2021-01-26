import React from 'react'

const Filter = (props) => {
    // console.log("Filter props: ", props)
    const onChangeHandlerFilter = (event) => (props.setter(event.target.value))
    return (
        <form>
          <div>
            filter names containing: <input value={props.filter} onChange={onChangeHandlerFilter}/>
          </div>
      </form>
    )
  }

export default Filter