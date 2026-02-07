import React from "react";
import { useTasks } from "../contexts/TaskContext";
import TaskItem from "../components/TaskItem";

export default function Completed() {
  const { tasks, clearCompleted } = useTasks();
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <section className="page container">
      <h2>Completed</h2>

      {completedTasks.length === 0 ? (
        <p className="empty-state">
          No completed tasks yet.
        </p>
      ) : (
        <>
          <div className="task-list">
            {completedTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>

          <button className="btn btn-danger" onClick={clearCompleted}>
            Clear Completed
          </button>
        </>
      )}
    </section>
  );
}
