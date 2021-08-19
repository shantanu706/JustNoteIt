import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NoteView.css";
const NoteCard = () => {
  const NoteStore = useSelector((state) => state.notex);
  const dispatch = useDispatch();
  const handleDelete = (itemDel) => {
    dispatch({ type: "notex/deleteNote", payload: itemDel });
  };

  return (
    <div>
      {NoteStore.noteBucket.map((item) => {
        return (
          <div id="CardsGrid">
            <div className="CardTitle">{item.Head}</div>
            <div className="CardText">{item.Body}</div>
            <Button onClick={() => handleDelete(item.id)}>🗑️</Button>
          </div>
        );
      })}
    </div>
  );
};

export default NoteCard;
