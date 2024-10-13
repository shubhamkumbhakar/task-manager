"use client";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "./modal-wrapper";
import TaskForm from "./task-form";
import { getAllTasks } from "@/utils/controllers/get-tasks";
import Button from "./buttons/button";
import TaskCard from "./task-card";
import { deleteTask } from "@/utils/controllers/delete-task";
import { Status, Task } from "@/utils/interfaces";
import { updateTask } from "@/utils/controllers/update-task";
import { createTask } from "@/utils/controllers/create-task";
import DeleteConfirmation from "./delete-confirmation";
import { updateOrderOfTasks } from "@/utils/controllers/update-order";
import FilterSelector from "./filter-selector";
import Search from "./search";
import SortSelector from "./sort-selector";
import { EMPTY_TASK } from "@/utils/constants";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showTaskFormModal, setShowTaskFormModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<Task | null>(null);
  const [dragSourceIndex, setDragSourceIndex] = useState(-1);
  const [dragTargetIndex, setDragTargetIndex] = useState(-1);
  const [selectedFilter, setSelectedFilter] = useState<
    "in-progress" | "completed" | "pending" | undefined
  >(undefined);
  const [selectedSorting, setSelectedSorting] = useState<
    "date-asc" | "date-desc" | undefined
  >(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateNewTask = (task: Task) => {
    createTask(task);
    refreshData();
    setShowTaskFormModal(false);
  };

  const handleUpdateTask = (taskId: number, updatedTask: Task) => {
    updateTask(taskId, updatedTask);
    refreshData();
    setEditingTask(null);
    setShowTaskFormModal(false);
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
    refreshData();
    setShowDeleteConfirm(null);
  };

  const handleToggleComplete = (task: Task) => {
    const taskId = task.id;
    const newStatus =
      task.status === "completed"
        ? "pending"
        : task.status === "pending"
        ? "in-progress"
        : "completed";

    updateTask(taskId, { ...task, status: newStatus });
    refreshData();
  };

  const handleDragStart = (index: number) => {
    setDragSourceIndex(index);
  };

  const handleDragEnter = (index: number) => {
    if (index !== dragSourceIndex) {
      setDragTargetIndex(index);

      // Reorder tasks
      const newTasks = [...tasks];
      const [draggedTask] = newTasks.splice(dragSourceIndex, 1);
      newTasks.splice(index, 0, draggedTask);

      setTasks(newTasks);
      setDragSourceIndex(index);
    }
  };

  const handleDragEnd = () => {
    setDragSourceIndex(-1);
    setDragTargetIndex(-1);
    updateOrderOfTasks(tasks);
  };

  const handleFormDataChange = (formData: Task) => {
    if (editingTask) {
      setEditingTask(formData);
    }
  };

  const handleSubmitForm = (formData: Task) => {
    if (editingTask) {
      handleUpdateTask(editingTask.id, formData);
    } else {
      handleCreateNewTask(formData);
    }
  };

  const refreshData = useCallback(() => {
    let tasks = getAllTasks();
    if (selectedFilter) {
      tasks = tasks.filter((task: Task) => task.status === selectedFilter);
    }
    if (searchQuery) {
      tasks = tasks.filter(
        (task: Task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedSorting) {
      tasks = tasks.sort((a: Task, b: Task) => {
        if (selectedSorting === "date-asc") {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        } else {
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        }
      });
    }
    setTasks(tasks);
  }, [selectedFilter, searchQuery, selectedSorting]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header and new task button */}
          <div className="flex flex-col lg:flex-row justify-between w-full py-2 gap-4">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Task Dashboard
            </h1>
            <Button
              onClick={() => {
                setEditingTask(null);
                setShowTaskFormModal(true);
              }}
            >
              + Add New Task
            </Button>
          </div>

          <div className="h-8" />

          {/* Search */}
          <div className="w-full">
            <Search
              searchQuery={searchQuery}
              onSearch={(query: string) => setSearchQuery(query)}
            />
          </div>

          <div className="h-8" />

          {/* Filter Selector */}
          <div className="w-full flex gap-4 justify-end">
            <SortSelector
              selectedSorting={selectedSorting}
              onSelectSorting={(selectedSorting: any) =>
                setSelectedSorting(selectedSorting)
              }
            />
            <FilterSelector
              selectedFilter={selectedFilter}
              onSelectFilter={(selectedFilter: Status) =>
                setSelectedFilter(selectedFilter)
              }
            />
          </div>

          <div className="h-8" />

          {/* Tasks Grid */}
          {tasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task: any, index: number) => {
                return (
                  <TaskCard
                    key={task.id}
                    index={index}
                    task={task}
                    onEdit={() => {
                      if (editingTask?.id !== task.id) {
                        setEditingTask(task);
                      }
                      setShowTaskFormModal(true);
                    }}
                    onDelete={() => setShowDeleteConfirm(task)}
                    onToggleComplete={() => handleToggleComplete(task)}
                    onDragStart={() => handleDragStart(index)}
                    onDragEnter={() => handleDragEnter(index)}
                    onDragEnd={handleDragEnd}
                    isDragTarget={dragTargetIndex === index}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-500">No tasks found.</div>
          )}
        </div>
      </div>

      <Modal
        isOpen={showTaskFormModal}
        onClose={() => {
          setShowTaskFormModal(false);
        }}
      >
        <TaskForm
          task={editingTask || { ...EMPTY_TASK, id: getAllTasks().length + 1 }}
          onChange={handleFormDataChange}
          onSubmit={handleSubmitForm}
          onCancel={() => {
            setShowTaskFormModal(false);
          }}
          type={editingTask ? "update" : "create"}
        />
      </Modal>

      <Modal
        isOpen={Boolean(showDeleteConfirm)}
        onClose={() => setShowDeleteConfirm(null)}
      >
        <DeleteConfirmation
          confirmationMessage={`Are you sure you want to delete "${showDeleteConfirm?.title}" ?`}
          onConfirm={() => handleDeleteTask(showDeleteConfirm!.id)}
          onCancel={() => setShowDeleteConfirm(null)}
        />
      </Modal>
    </>
  );
};

export default TaskDashboard;
