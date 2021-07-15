import { Card, Button, Typography } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
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
      <Row lg={2} style={{ width: "68vw" }}>
        {NoteStore.noteBucket.map((item) => {
          return (
            <Col>
              <div id="CardsGrid">
                <Card
                  style={{
                    overflow: "hidden",
                    background: "#171717",
                    borderRadius: "10pt",
                  }}
                >
                  <Typography id="CardTitle">{item.Head}</Typography>
                  <Typography id="CardText">{item.Body}</Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ margin: "10pt", width: "10vw" }}
                    onClick={(e) => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default NoteCard;
