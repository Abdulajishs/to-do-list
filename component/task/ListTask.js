import {  Button, Form, ListGroup } from "react-bootstrap";

import classes from "./ListTask.module.css";
import { useContext } from "react";
import TaskContext from "@/store/task-context";

const ListTask = (props) =>{
    const  {task} = props;
    const taskCntx = useContext(TaskContext)

    const deleteHandler =()=>{
        taskCntx.removeItems(task.id)
    }
    const toggleTaskCompleted = (task) => {
        taskCntx.addComplete({...task,completed : true})
        taskCntx.removeItems(task.id)
      };
    return(
        <ListGroup.Item variant="secondary" key={task.id} className={classes.listgroup} >
            <Form.Check
            type="checkbox" 
              id={task.id}
              label={task.name}
              onChange={() => toggleTaskCompleted(task)}
            />
            <Button variant="danger" onClick={deleteHandler}>Delete</Button>
          </ListGroup.Item>
    )
}

export default ListTask;