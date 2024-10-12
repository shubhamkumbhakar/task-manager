import { DEFAULT_TASKS, LOCAL_STORAGE_KEY } from "../constants";

export const getAllTasks = () => {
  const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedTasks) {
    return JSON.parse(storedTasks);
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_TASKS));
    return DEFAULT_TASKS;
  }
};
