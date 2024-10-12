import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../interfaces";

export const deleteTask = (taskId: number) => {
  const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedTasks) {
    const updatedTasks = JSON.parse(storedTasks).filter(
      (task: Task) => task.id !== taskId
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
  }
};
