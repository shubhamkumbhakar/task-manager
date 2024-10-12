import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../interfaces";

export const updateTask = (taskId: number, task: Task) => {
  const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedTasks) {
    const newTasks = JSON.parse(storedTasks);

    const updateTaskIndex = newTasks.findIndex(
      (task: Task) => task.id === taskId
    );
    if (updateTaskIndex >= 0) {
      newTasks[updateTaskIndex] = task;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
};
