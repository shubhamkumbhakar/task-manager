import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../interfaces";
import { browserLocalStorage } from "./get-tasks";

export const deleteTask = (taskId: number) => {
  const storedTasks = browserLocalStorage?.getItem(LOCAL_STORAGE_KEY);
  if (storedTasks) {
    const updatedTasks = JSON.parse(storedTasks).filter(
      (task: Task) => task.id !== taskId
    );
    browserLocalStorage?.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(updatedTasks)
    );
  }
};
