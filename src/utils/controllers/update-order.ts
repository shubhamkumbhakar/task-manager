import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../interfaces";
import { browserLocalStorage } from "./get-tasks";

export const updateOrderOfTasks = (tasks: Task[]) => {
  browserLocalStorage?.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};
