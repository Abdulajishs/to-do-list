"use client";

import { useContext, useRef, useState } from "react";
import { Button, Card, Collapse, Container, ListGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListTask from "./ListTask";
import classes from "./NewTaskForm.module.css";
import TaskContext from "@/store/task-context";

export default function NewTaskForm() {
  const [open, setOpen] = useState(false);
  const taskCntx = useContext(TaskContext);
  const nameRef = useRef("");
  const descriptionRef = useRef("");

  const addTaskHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const newTask = { id: Date.now(), name, description, completed: false };

    taskCntx.addItems(newTask)
    setOpen(false);

    nameRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const cancelHandler = () => {
    setOpen(false);
  };
  
  return (
    <Container className={classes.card}>
      <h1>Today</h1>
      <ListGroup>
        {taskCntx.items.map((task) => (
          <ListTask
            key={task.id}
            task={task}
          />
        ))}
      </ListGroup>
      <Card.Body>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Add task
        </Button>
        <Collapse in={open}>
          <Form onSubmit={addTaskHandler}>
            <Form.Control type="text" placeholder="Task name" ref={nameRef} />
            <Form.Control
              type="text"
              placeholder="Description"
              ref={descriptionRef}
            />
            <div>
              <Button variant="light" onClick={cancelHandler}>
                Cancel
              </Button>
              <Button variant="warning" type="submit">
                Add task
              </Button>
            </div>
          </Form>
        </Collapse>
      </Card.Body>
    </Container>
  );
}
