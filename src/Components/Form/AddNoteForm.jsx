import React, { useState } from "react";
import "./AddNoteForm.css";
import { useDispatch } from "react-redux";
import { Button, FormControl, InputGroup } from "react-bootstrap";
const AddNoteForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, id: 0, [name]: value }));
  };
  // const Stroage = useSelector((state) => state.notex);
  const handleAdd = () => {
    setForm({
      Head: "",
      Body: "",
    });
    dispatch({ type: "notex/addNote", payload: form });
  };
  return (
    <div>
      <InputGroup id="TitleHead">
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          name="Head"
          type="text"
          placeholder="Title or Head of Note"
          onChange={handleForm}
          value={form.Head}
        />
      </InputGroup>
      <InputGroup id="noteBody">
        <FormControl
          as="textarea"
          aria-label="With textarea"
          name="Body"
          type="textarea"
          placeholder="Body of Note"
          onChange={handleForm}
          value={form.Body}
        />
      </InputGroup>
      <br />
      <Button variant="primary" onClick={handleAdd}>
        Add
      </Button>
      <br />
      <br />
      {/* <pre id="notes">{JSON.stringify(Stroage.noteBucket, null, 3)}</pre> */}
    </div>
  );
};

export default AddNoteForm;
