import React, { useState } from "react";

import "./AddNoteForm.css";
import { useSelector, useDispatch } from "react-redux";
const AddNoteForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev,'id': 0, [name]: value }));
  };
  const Stroage = useSelector((state) => state.notex);
  const handleAdd = () => {
    setForm({
      Head:"",
      Body:"",
    });
    dispatch({ type: "notex/addNote", payload: form });
  };
  return (
    <div>
      <input
        name="Head"
        id="TitleHead"
        type="text"
        placeholder="Title or Head of Note"
        onChange={handleForm}
        value={form.Head}
      />
      <br />
      <textarea
        name="Body"
        id="noteBody"
        type="textarea"
        placeholder="Body of Note"
        onChange={handleForm}
        value={form.Body}
      />
      <br />
      <button id="AddButton" onClick={handleAdd}>
        Add
      </button>
      <br />
      <br />
      <pre id="notes">{JSON.stringify(Stroage.noteBucket, null, 3)}</pre>
    </div>
  );
};

export default AddNoteForm;
