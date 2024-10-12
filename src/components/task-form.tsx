import { FormDataError, Task } from "@/utils/interfaces";
import { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset";
  onClick?: (e: any) => void;
};

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
}: ButtonProps) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        (variants as any)[variant]
      } px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
    >
      {children}
    </button>
  );
};

const FormInput = ({ label, error, ...props }: any) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      className={`w-full text-black px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 
        ${
          error
            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
            : "border-gray-300"
        }`}
      {...props}
    />
    {error && <p className="text-sm text-red-600">{error}</p>}
  </div>
);

const TaskForm = ({
  task,
  onChange,
  onSubmit,
  onCancel,
}: {
  task: Task;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
  onCancel: (e: any) => void;
}) => {
  const [formData, setFormData] = useState<Task>(task);
  const [errors, setErrors] = useState<FormDataError>({});
  const [now] = useState(new Date());

  const validateForm = () => {
    const errors: FormDataError = {};

    if (!formData.title.trim()) {
      errors.title = "Title is required";
    }

    if (!formData.dueDate) {
      errors.dueDate = "Due date is required";
    } else {
      const selectedDate = new Date(formData.dueDate);

      if (selectedDate < now) {
        errors.dueDate = "Due date cannot be in the past";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
    onChange(updatedFormData);
    // Clear error when user starts typing
    if ((errors as any)[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-black">
        {task ? "Edit Task" : "Create New Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          error={errors.title}
          placeholder="Enter task title"
        />

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className={`w-full text-black px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 
              ${errors.description ? "border-red-300" : "border-gray-300"}`}
            placeholder="Enter task description"
          />
          {errors.description && (
            <p className="text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <FormInput
          label="Due Date"
          name="dueDate"
          type="datetime-local"
          value={formData.dueDate}
          onChange={handleChange}
          error={errors.dueDate}
          data-testid="date-input"
        />

        <div className="flex space-x-4 pt-4">
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            {task ? "Update Task" : "Create Task"}
          </Button>
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
