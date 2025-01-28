import React from "react";

// turn into an explicit return by adding curly braces after =>
const Header = (props) => {
  // bring in onSearch via props
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          // Add onChange event called callSeach and create the function above
          onChange={callSearch}
        />
      </aside>
    </header>
  );
};

export default Header;
