import React from 'react'

const Notification = ({message}) => {
    const iHateStudyingThroughLongWindedExamples = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16,
        border: 1,
        borderStyle: 'solid'
    }

    if (message === null) {
        return null
    }
    console.log("Notification message:", message)
    return (
        <div style={iHateStudyingThroughLongWindedExamples}>
            {message}
        </div>
    )
}

export default Notification