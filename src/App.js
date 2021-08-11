import ListNotes from "./Components/View/ListNotes";
import TopBar from "./TopBar";
import "./App.css";
import { Container } from "react-bootstrap";
import AddNote from "./Components/Form/AddNote";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadState } from "./localStorage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(loadState() !== undefined)
    dispatch({ type: "notex/loadNotes", payload: loadState() });
  }, [dispatch])
  return (
    <div>
      <TopBar />
      <AddNote />
      <Container>
        <ListNotes />
      </Container>
    </div>
  );
}

export default App;
