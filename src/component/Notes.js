import React, { useState } from "react";
import SingleNote from "./SingleNote";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [currNote, setCurrNote] = useState("");

  function updateCurrNote(event) {
    setCurrNote(event.target.value);
  }

  function addNotes(event) {
    const newNoteArray = [...notes, currNote];
    setNotes(newNoteArray);
  }

  return (
    <>
      <input onChange={updateCurrNote} type="text" />
      <button onClick={addNotes}>Submit</button>
      <ul>
        {notes.map((note, index) => {
          return (
            <li key={index}>
              <SingleNote note={note} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Notes;
