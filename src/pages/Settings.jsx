import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useTasks } from "../contexts/TaskContext";

export default function Settings() {
    const { theme, toggleTheme } = useTheme();
    const { clearCompleted } = useTasks();

    return (
        <section className="page container">
            <h2>Settings</h2>

            <div className="settings-item">
                <span>Theme</span>
                <button className="btn btn-secondary" onClick={toggleTheme}>
                    {theme === "light" ? "Switch to Dark" : "Switch to Light"}
                </button>
            </div>

            <div className="settings-item">
                <span>Completed Tasks</span>
                <button className="btn btn-danger" onClick={clearCompleted}>Clear Completed</button>
            </div>
        </section>
    );
}