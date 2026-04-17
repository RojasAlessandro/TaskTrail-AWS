# 005 - Local Service Layer Before DynamoDB Integration

## Goal
Introduce a simple service layer for the TaskTrail backend before connecting Lambda to real DynamoDB access.

## Why this was done
At first, the Lambda handler returned mock task data directly from inside one file.

To make the backend structure cleaner and easier to grow, I separated the code into:
- a Lambda handler
- a task service
- a mock data source

## Structure
- `backend/get-tasks-handler.js` -> Lambda entry point
- `backend/services/task-service.js` -> backend task retrieval logic
- `backend/data/mock-tasks.js` -> temporary mock task data

## Why this design was chosen
This makes the backend easier to understand and prepares the project for future DynamoDB integration.

Later, the service layer can be updated to read from DynamoDB instead of mock data without changing the overall request flow too much.