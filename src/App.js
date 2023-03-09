import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("Effect started");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("Response fulfilled");
      setNotes(response.data);
    });
  }, []);

  console.log("There are ", notes.length, "notes");

  return <>Test</>;
}

export default App;
