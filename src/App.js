import AddNoteForm from "./Components/Form/AddNoteForm";
import ListNotes from "./Components/View/ListNotes";

import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <div>
      <h1 id="AppName">Simple Note</h1>
      <Container>
        <Row >
          <Col md={6}>
            <AddNoteForm />
          </Col>
          <Col>
            <ListNotes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
