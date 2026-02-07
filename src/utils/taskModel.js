export function createTask({ title, note = "", dueDate = null}) {
    return {
        id: crypto.randomUUID(),
        title,
        note,
        dueDate,
        completed: false,
        createdAt: Date.now()
    };
}