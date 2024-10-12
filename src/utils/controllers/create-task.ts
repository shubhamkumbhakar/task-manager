import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../interfaces";

export const createTask = (task: Task) => {
  const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedTasks) {
    const updatedTasks = JSON.parse(storedTasks);
    updatedTasks.push(task);
    console.log("updatedTasks", updatedTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
  }
};
