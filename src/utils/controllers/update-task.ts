import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../interfaces";
import { browserLocalStorage } from "./get-tasks";

export const updateTask = (taskId: number, task: Task) => {
  const storedTasks = browserLocalStorage?.getItem(LOCAL_STORAGE_KEY);
  if (storedTasks) {
    const newTasks = JSON.parse(storedTasks);

    const updateTaskIndex = newTasks.findIndex(
      (task: Task) => task.id === taskId
    );
    if (updateTaskIndex >= 0) {
      newTasks[updateTaskIndex] = task;
    }

    browserLocalStorage?.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
};
