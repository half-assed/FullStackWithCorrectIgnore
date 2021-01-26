import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [formContent, setFormContent] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: formContent,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length +1
    }
    setNotes(notes.concat(noteObject))
    setFormContent('')
    
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setFormContent(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={formContent}           // this is the default value of the form
          onChange={handleNoteChange}   // handler for when the form value changes
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))