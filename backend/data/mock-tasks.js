const mockTasks = [
  {
    userId: "user-123",
    taskId: "task-001",
    title: "Finish AWS README update",
    description: "Update milestone progress and notes",
    status: "todo",
    createdAt: "2026-04-19T12:30:00Z",
    updatedAt: "2026-04-19T12:30:00Z",
    dueDate: "2026-04-25",
    priority: "medium"
  },
  {
    userId: "user-123",
    taskId: "task-002",
    title: "Review CDK stack structure",
    description: "Understand bin and lib folders",
    status: "in_progress",
    createdAt: "2026-04-19T13:00:00Z",
    updatedAt: "2026-04-19T14:00:00Z",
    dueDate: "2026-04-26",
    priority: "high"
  },
  {
    userId: "user-999",
    taskId: "task-003",
    title: "Different user's task",
    description: "This should not appear for user-123",
    status: "todo",
    createdAt: "2026-04-19T15:00:00Z",
    updatedAt: "2026-04-19T15:00:00Z",
    dueDate: "2026-04-27",
    priority: "low"
  }
];

module.exports = { mockTasks };