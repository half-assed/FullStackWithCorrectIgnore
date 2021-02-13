import React from 'react'

const Notification = (props) => {
    console.log("Notification props:", props)

    const notBad = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16,
        border: 1,
        borderStyle: 'solid'
    }
    const veryBad = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 16,
        border: 1,
        borderStyle: 'solid'
    }

    if (props === null || props.message === null) {
        return null
    }
    const message = props.message[0]
    const good = props.message[1]
    if (good === false) {
        //console.log("!Good")
        return (
            <div style={veryBad}>
                {message}
            </div>
        )
    }
    else {
        return (
            <div style={notBad}>
                {message}
            </div>
        )
    }

    
}

export default Notification