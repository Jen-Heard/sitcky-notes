import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      },
    ],

    searchText: "search",
  };

  addNote = () => {
    // create a new note
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };

    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  onType = (editMeId, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        return note;
      }
    });
    this.setState({
      notes: updatedNotes,
      searchText: newSearchText,
    });
  };
  // delete function; filter and return the notes that don't match the ID of the note we want to delete
  removeNote = (noteId) => {
    const updatedNotes = this.state.notes.filter((note) => note.id !== noteId);
    this.setState({ notes: updatedNotes });
  };
  // to capture the state of our note and save it in local storage
  componentDidUpdate() {
    const stringifiedNotes = JSON.stringify(this.state.notes);
    // setItem is a function
    localStorage.setItem("savedNotes", stringifiedNotes);
  }
  // check to see if there's anything in the local storage saved notes from the last time, and render if so
  componentDidMount() {
    const stringifiedNotes = localStorage.getItem("savedNotes");
    // if something is stored, we want to parse it back into the list
    if (stringifiedNotes) {
      const savedNotes = JSON.parse(stringifiedNotes);
      this.setState({ notes: savedNotes });
    }
  }

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          addNote={this.addNote}
          searchText={this.state.searchText}
        />
        {/* pass the new removeNote funtion down to NotesList.js to activate. got to NoteList.js to continue */}
        <NotesList
          removeNote={this.removeNote}
          onType={this.onType}
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default App;
