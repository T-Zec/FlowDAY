export function isToday(timestamp) {
    if (!timestamp) return false;

    const today = new Date();
    const date = new Date(timestamp);

    return (
        today.getFullYear() === date.getFullYear() &&
        today.getMonth() === date.getMonth() &&
        today.getDate() === date.getDate()
    );
}

export function isOverdue(timestamp) {
    if (!timestamp) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const taskDate = new Date(timestamp);
    taskDate.setHours(0, 0, 0, 0);

    return taskDate < today;
}

export function formatDate(timestamp) {
    if (!timestamp) return "";

    const date = new Date(timestamp);
    return date.toLocaleDateString(undefined, {month: "short", day: "numeric",});
}

export function sortTasks(tasks) {
    return [...tasks].sort((a, b) => {
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }

        if (a.dueDate && b.dueDate) {
            return a.dueDate - b.dueDate;
        }

        if (a.dueDate) return -1;
        if (b.dueDate) return 1;

        return a.createdAt - b.createdAt;
    });
}