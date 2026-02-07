import React, { useState, useRef, useEffect } from "react";
import { useTasks } from "../contexts/TaskContext";
import { isOverdue, formatDate } from "../utils/dateUtils";

export default function TaskItem({ task }) {
    const { toggleComplete, removeTask, updateTask } = useTasks();
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(task.title);
    const inputRef = useRef(null);

    // Auto focus when entering edit mode
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    function startEdit() {
        setDraft(task.title);
        setIsEditing(true);
    }

    function saveEdit() {
        if (!draft.trim()) {
            removeTask(task.id);
            return;
        }
        updateTask(task.id, { title: draft });
        setIsEditing(false);
    }

    function cancelEdit() {
        setDraft(task.title);
        setIsEditing(false);
    }

    function handleKey(e) {
        if (e.key === "Enter") saveEdit();
        if (e.key === "Escape") cancelEdit();
    }
    

    return (
        <div className={`task-item 
            ${task.completed ? "completed" : ""}
            ${!task.completed && isOverdue(task.dueDate) ? "overdue" : ""}
        `}>
            <label className="task-left">
                <input type="checkbox" checked={task.completed} 
                onChange={() => toggleComplete(task.id)}
                />

                {isEditing ? (
                    <input ref={inputRef} className="task-edit-input" value={draft}
                    onChange={(e) => setDraft(e.target.value)} onBlur={saveEdit} onKeyDown={handleKey}
                    />
                ) : (
                    <div className="task-text">
                        <span className="task-title">{task.title}</span>

                        {task.dueDate && (
                            <small className="task-date">{formatDate(task.dueDate)}</small>
                        )}
                    </div>
                )
            }            
            </label>

            <div className="task-actions">
                <button className="task-edit-btn" onClick={startEdit} aria-label="Edit task">✎</button>
                <button className="task-delete-btn" onClick={() => removeTask(task.id)} aria-label="Delete task">✕</button>
            </div>            
        </div>
    );
}