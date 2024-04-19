"use client"

import { useState } from "react";
import TaskContext from "./task-context";

const TaskContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addItemsHandler =(item)=>{
    setItems(prevItem => [...prevItem,item])
  }

  const removeItemHandler = (id) =>{
    const updatedItem  = items.filter(item => item.id !== id);
    setItems(updatedItem)
  }

  const addCompleteHandler =(task) =>{
    setCompleted(prevItem => [...prevItem,task])
  }

  const taskContext = {
    items: items,
    completed : completed,
    addItems: addItemsHandler,
    removeItems: removeItemHandler,
    addComplete : addCompleteHandler,
  };

  return (
    <>
    {console.log(taskContext.items,taskContext.completed)}
      <TaskContext.Provider value={taskContext}>
        {props.children}
      </TaskContext.Provider>
    </>
  );
};

export default TaskContextProvider;
