# Milestone 5

## Goal
Plan and create the first Lambda function for TaskTrail AWS.

## What I did
- Planned the first backend Lambda function
- Chose a Get Tasks Lambda as the starting point
- Created a local Lambda handler that returns task data as JSON
- Refactored the backend into a handler, service layer, and mock data source

## What I learned
Lambda is the backend compute layer in this project. It sits between API Gateway and DynamoDB and handles the app's backend logic.

I also learned that separating the handler from the service logic makes the backend cleaner and easier to extend later.

## Problems faced
- Needed to understand what Lambda actually does before writing code
- Needed to keep the first backend step simple and local
- Needed to avoid putting too much logic into one handler file

## Evidence
- Created `docs/decisions/004-first-lambda-plan.md`
- Created `docs/decisions/005-local-service-layer.md`
- Created the first local Lambda handler in the `backend/` folder
- Created a local service layer and mock data source