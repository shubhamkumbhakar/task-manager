import { DEFAULT_TASKS, LOCAL_STORAGE_KEY } from "../constants";

export const browserLocalStorage =
  typeof window !== "undefined" ? window.localStorage : null;

export const getAllTasks = () => {
  const storedTasks = browserLocalStorage?.getItem(LOCAL_STORAGE_KEY);
  if (storedTasks) {
    return JSON.parse(storedTasks);
  } else {
    browserLocalStorage?.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(DEFAULT_TASKS)
    );
    return DEFAULT_TASKS;
  }
};
