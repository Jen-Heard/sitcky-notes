import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const keepSearchMatches = (note) => note.doesMatchSearch == true;
  const searchMatches = props.notes.filter(keepSearchMatches);

  const renderNote = (note) => (
    // pass the removeNote function to Note as props. go to Note.js to complete
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );

  const noteElements = searchMatches.map(renderNote);

  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
