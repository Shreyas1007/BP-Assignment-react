import React from "react";
import emojipedia from "../emojipedia.js";
import Entry from "./Entry";

function createEntry(emojipe) {
  return (
    <Entry
      key={emojipe.id}
      id={emojipe.id}
      emoji={emojipe.emoji}
      name={emojipe.name}
      info={emojipe.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
