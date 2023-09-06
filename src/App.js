import { useState, useEffect } from "react";
import { FormInput, Header, SectionNotes } from "./components";
import index from "./styles/app.module.css";
import { getInitialData } from "./utils/data";

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <>
      <Header search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main className={index.main}>
        <FormInput updateNotes={setNotes} />
        <SectionNotes label='Notes' notes={activeNotes} setNotes={setNotes} />
        <SectionNotes label='Archived' notes={archivedNotes} setNotes={setNotes} />
      </main>
    </>
  );
}

export default App;
