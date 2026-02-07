import React from "react";
import { useTasks } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const { tasks } = useTasks();

    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <p>No tasks yet.</p>
                <small>Add somethings you want to get done today 👆</small>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}