import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddNoteForm.css";
import { Button } from "react-bootstrap";
const AddNote = () => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, id: 0, [name]: value }));
  };

  const handleAdd = () => {
    if (form.Head !== "" && form.Body !== "") {
      setForm({
        Head: "",
        Body: "",
      });
      dispatch({ type: "notex/addNote", payload: form });
    } else {
      alert("Cannot be Empty");
    }
  };

  return (
    <div>
      <div id="AddCard">
        <div className="head">
          <input
            type="text"
            className="headInput"
            placeholder="Title"
            name="Head"
            value={form.Head}
            onChange={handleForm}
          />
        </div>
        <div className="body">
          <textarea
            type="text"
            className="bodyInput"
            placeholder="Body"
            name="Body"
            value={form.Body}
            onChange={handleForm}
          />
        </div>
        <div className="add">
          <Button className="addbtn" variant="success" onClick={handleAdd}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
