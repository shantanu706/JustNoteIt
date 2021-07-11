import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
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
      <Row lg={2}>
        {NoteStore.noteBucket.map((item) => {
          return (
            <Col>
              <div id="CardsGrid">
                <Card>
                  <Card.Title id="CardTitle">{item.Head}</Card.Title>
                  <Card.Text id="CardText">{item.Body}</Card.Text>
                  <Button
                    variant="danger"
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
