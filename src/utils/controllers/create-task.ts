import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../interfaces";
import { browserLocalStorage } from "./get-tasks";

export const createTask = (task: Task) => {
  const storedTasks = browserLocalStorage?.getItem(LOCAL_STORAGE_KEY);
  if (storedTasks) {
    const updatedTasks = JSON.parse(storedTasks);
    updatedTasks.push(task);
    browserLocalStorage?.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(updatedTasks)
    );
  }
};
