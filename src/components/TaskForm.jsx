import React, { useState } from "react";
import { useTasks } from "../contexts/TaskContext";

export default function TaskForm() {
    const { addTask } = useTasks();
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim()) return;

        addTask({ 
            title,
            dueDate: dueDate ? new Date(dueDate).getTime() : null,
        });

        setTitle("");
        setDueDate("");
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input 
            className="input task-input" type="text" 
            placeholder="What needs to be done?"
            value={title} onChange={(e) => setTitle(e.target.value)}
            />

            <input 
            className="input" type="date"
            value={dueDate} onChange={(e) => setDueDate(e.target.value)}
            />

            <button className="btn btn-primary">Add</button>
        </form>
    );
}