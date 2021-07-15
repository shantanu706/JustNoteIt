import ListNotes from "./Components/View/ListNotes";
import TopBar from "./TopBar";
import "./App.css";
import { Container } from "react-bootstrap";
import AddNote from "./Components/Form/AddNote";
function App() {
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
