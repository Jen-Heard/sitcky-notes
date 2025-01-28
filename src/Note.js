import React from "react";

const Note = (props) => {
  // console.log(props);
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  };

  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };

  const clickDelete = () => {
    // call the removeNote method passed down in props and pass it props.note.id
    props.removeNote(props.note.id);
  };

  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      {/* add onClick event to the X that deletes the note; write a new event handler named clickDelete up top */}
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};

export default Note;
