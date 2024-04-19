"use client";
import React from "react";

const TaskContext = React.createContext({
  items: [],
  completed: [],
  addItems: () => {},
  removeItems: () => {},
  addComplete: () => {},
});

export default TaskContext;
