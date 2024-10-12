export type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
  dueDate: string;
};

export type FormDataError = {
  title?: string;
  description?: string;
  dueDate?: string;
};

export type Status = "pending" | "in-progress" | "completed" | undefined;
