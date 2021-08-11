import { Card, Typography } from "@material-ui/core";
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import "./NoteView.css";
const NoteCard = () => {
  const NoteStore = useSelector((state) => state.notex);
  const dispatch = useDispatch();
  const handleDelete = (itemDel) => {
    dispatch({ type: "notex/deleteNote", payload: itemDel });
  };

  return (
    <div>
      <Row lg={2} xs={1}>
        {NoteStore.noteBucket.map((item) => {
          return (
            <Col>
              <div id="CardsGrid">
                <Card
                  style={{
                    overflow: "hidden",
                    background: "#E0E0E0",
                    borderRadius: "10pt",
                  }}
                >
                  <Typography id="CardTitle">{item.Head}</Typography>
                  <Typography id="CardText">{item.Body}</Typography>
                  <Row>
                    <Col xs={2}>
                      <Button
                        variant="danger"
                        onClick={(e) => handleDelete(item.id)}
                      >
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </Col>
                    <Col />
                    <Col xs={9}>
                      <Button variant="success">
                        <div className="time">{item.date}</div>
                      </Button>
                    </Col>
                  </Row>
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
