import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../interfaces";

export const updateOrderOfTasks = (tasks: Task[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};
