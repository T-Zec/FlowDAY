import React, { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import { sortTasks } from "../utils/dateUtils";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import TaskSearch from "../components/TaskSearch";

export default function AllTasks() {
  const { tasks } = useTasks();
  const [query, setQuery] = useState("");

  const filtered = sortTasks(
    tasks.filter((t) =>
      t.title.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <section className="page container">
      <h2>All Tasks</h2>

      <TaskForm />
      <TaskSearch value={query} onChange={setQuery} />

      {filtered.length === 0 ? (
        <p className="empty-state">
          No tasks found.
        </p>
      ) : (
        <div className="task-list">
          {filtered.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </section>
  );
}
