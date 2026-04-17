# Milestone 4

## Goal
Define the DynamoDB task item structure for TaskTrail AWS.

## What I did
- Decided the first version of the task item structure
- Identified required and optional task fields
- Matched the item design to the DynamoDB key structure

## What I learned
Designing the database is not just about creating the table. It also means deciding what each stored item should look like and why each field exists.

## Problems faced
- Needed to keep the first version simple instead of adding too many features too early
- Needed to understand how `userId` and `taskId` support the app design

## Evidence
- Created `docs/decisions/003-task-item-structure.md`
- Documented the first TaskTrail task item structure