import React from "react";
import { useTasks } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const { tasks } = useTasks();    
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}