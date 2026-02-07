import React from "react";

export default function TaskSearch({ value, onChange }) {
    return (
        <input 
            className="input task-search" type="text"
            placeholder="Search tasks..."
            value={value} onChange={(e) => onChange(e.target.value)}
        />
    );
}