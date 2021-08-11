import React from "react";
import { Card, Fab, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddNoteForm.css";
const AddNote = () => {
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };
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
    }
  };

  return (
    <div>
      <div className="add-button" onClick={handleClick}>
        <Fab variant="extended">
          {flag ? <CloseIcon /> : <EditIcon />}
          <b style={{ margin: "10pt" }}>{flag ? "Close" : "Add Note"}</b>
        </Fab>
      </div>
      {flag ? (
        <div className="card-position">
          <Card
            className="add-card"
            style={{
              overflow: "hidden",
              background: "#E0E0E0",
              borderRadius: "6pt",
            }}
          >
            <div id="NoteHeadField">
              <input
                className="add-note-head"
                placeholder="Heading"
                value={form.Head}
                name="Head"
                onChange={handleForm}
              />
            </div>
            <div id="NoteHeadField">
              <textarea
                className="note-body"
                placeholder="Body"
                multiple
                rows="5"
                value={form.Body}
                name="Body"
                onChange={handleForm}
              />
            </div>
            <div id="NoteHeadField">
              <Button variant="contained" color="primary" onClick={handleAdd}>
                Add
              </Button>
            </div>
          </Card>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default AddNote;
