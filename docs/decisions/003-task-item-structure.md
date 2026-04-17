# 003 - Task Item Structure for DynamoDB

## Goal
Define the structure of a single task item for the TaskTrail AWS project.

## DynamoDB keys
- Partition key: `userId`
- Sort key: `taskId`

This means tasks are grouped by user, and each task is uniquely identified within that user's task list.

## Task item structure (v1)
Each task item will use this structure:

```json
{
  "userId": "user-123",
  "taskId": "task-001",
  "title": "Finish AWS README update",
  "description": "Update Milestone 4 progress and notes",
  "status": "todo",
  "createdAt": "2026-04-19T12:30:00Z",
  "updatedAt": "2026-04-19T12:30:00Z",
  "dueDate": "2026-04-25",
  "priority": "medium"
}
```

## Field Explanations
- `userId` -> identifies the owner of the task
- `taskId` -> unique identifier for the task
- `title` -> short task name shown in the UI
- `description` -> optional longer task details
- `status` -> current task state (`todo`, `in_progress`, `done`)
- `createdAt` -> when the task was created
- `updatedAt` -> when the task was last changed
- `dueDate` -> optional deadline for the task
- `priority` -> optional importance level (`low`, `medium`, `high`)

## Why this design was chosen
This structure is simple, readable, and suitable for a beginner serverless task-tracking app.

It supports the core task features first without overcomplicating the data model too early.

Using `userId` and `taskId` also matches how the DynamoDB table was defined in CDK.