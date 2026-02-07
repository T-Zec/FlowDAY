import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { createTask } from "../utils/taskModel";

const TaskContext = createContext();

export function useTasks() {
    return useContext(TaskContext);
}

export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useLocalStorage("flowday-tasks", []);

    function addTask({ title, note = "", dueDate = null}) {
        const newTask = createTask({title, note, dueDate});
        setTasks((prev) => [...prev, newTask]);
    }

    function removeTask(id) {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    }

    function toggleComplete(id) {
        setTasks((prev) => 
            prev.map((t) => (t.id === id ? { ...t, completed : !t.completed} : t)));
    }

    function updateTask(id, updates) {
        setTasks((prev) => 
            prev.map((t) => (t.id === id ? { ...t, ...updates } : t)));
    }

    function clearCompleted() {
        setTasks((prev) => prev.filter((t) => !t.completed));
    }

    const value = {
        tasks,
        addTask,
        removeTask,
        toggleComplete,
        updateTask,
        clearCompleted,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}