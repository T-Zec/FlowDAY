import React from "react";
import { useTasks } from "../contexts/TaskContext";
import { isToday } from "../utils/dateUtils";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

export default function Home() {
    const { tasks } = useTasks();

    const todayTasks = tasks.filter(
        (t) => !t.completed && (t.dueDate ? isToday(t.dueDate) : true)
    );

    return (
        <section className="page container">
            <h2>Today</h2>

            <TaskForm />
            {todayTasks.length === 0 && (
                <p className="empty-state">Nothing scheduled for today 🎉</p>
            )}

            <div className="task-list">
                {todayTasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </section>
    );
}