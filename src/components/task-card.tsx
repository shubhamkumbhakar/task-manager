import { Task } from "@/utils/interfaces";
import IconButton from "./buttons/icon-button";
import CalendarIcon from "./icons/calender";
import CompleteIcon from "./icons/complete";
import DeleteIcon from "./icons/delete";
import EditIcon from "./icons/edit";
import StatusIcon from "./icons/status";

// Custom Badge Component
const Badge = ({ children, variant }: any) => {
  const variants = {
    pending: "bg-yellow-100 text-yellow-800",
    "in-progress": "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        // @ts-ignore
        variants[variant] || ""
      }`}
    >
      {children}
    </span>
  );
};

type ScreenProps = {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onToggleComplete: () => void;
  className?: string;
  onDragStart: (e: any, index: number) => void;
  onDragEnter: (e: any, index: number) => void;
  onDragEnd: () => void;
  index: number;
  isDragTarget: boolean;
};

const TaskCard = ({
  task,
  onEdit,
  onDelete,
  onToggleComplete,
  className = "",
  onDragStart,
  onDragEnter,
  onDragEnd,
  index,
  isDragTarget,
}: ScreenProps) => {
  const handleActionClick = (e: any, action: any) => {
    e.stopPropagation(); // Prevent card click event
    action();
  };

  if (isDragTarget) {
    return (
      <div
        draggable
        onDragStart={(e) => onDragStart(e, index)}
        onDragEnter={(e) => onDragEnter(e, index)}
        onDragEnd={onDragEnd}
        onDragOver={(e) => e.preventDefault()}
        className={`bg-black/10 rounded-lg p-6 ${className}`}
      ></div>
    );
  }

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnter={(e) => onDragEnter(e, index)}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
      className={`flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl p-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>
        <StatusIcon status={task.status} />
      </div>

      <div className="h-6" />

      <div className="">
        <p className="text-gray-600">{task.description}</p>
      </div>

      <div className="h-6" />

      <div className="flex flex-col space-y-4 flex-1 justify-end">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <CalendarIcon />
          <span>
            Due:{" "}
            {new Date(task.dueDate).toLocaleString("en-US", {
              hour12: true,
            })}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <Badge variant={task.status}>
            {task.status
              .replace("-", " ")
              .replace(/\b\w/g, (l: any) => l.toUpperCase())}
          </Badge>

          <div className="flex space-x-2">
            <IconButton
              onClick={(e: any) => handleActionClick(e, onEdit)}
              className="text-blue-600 hover:text-blue-700"
              title="Edit task"
            >
              <EditIcon />
            </IconButton>

            <IconButton
              onClick={(e: any) => handleActionClick(e, onDelete)}
              className="text-red-600 hover:text-red-700"
              title="Delete task"
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              onClick={(e: any) => handleActionClick(e, onToggleComplete)}
              className={
                task.status === "completed"
                  ? "text-green-600 hover:text-green-700"
                  : "text-gray-400 hover:text-gray-600"
              }
              title={
                task.status === "completed"
                  ? "Mark as incomplete"
                  : "Mark as complete"
              }
            >
              <CompleteIcon completed={task.status === "completed"} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
