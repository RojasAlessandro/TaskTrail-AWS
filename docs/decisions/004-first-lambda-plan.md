# 004 - First Lambda Function Plan

## Goal
Plan the first backend Lambda function for the TaskTrail AWS project.

## Chosen first Lambda
The first Lambda function will be a **Get Tasks** function.

## Why this function was chosen first
This is a good first backend step because reading task data is simpler than creating, updating, or deleting data.

It also helps me understand how the frontend, API Gateway, Lambda, and DynamoDB will connect later.

## Planned responsibility
The first Lambda function will:
- receive a request for a user's tasks
- identify the user
- return a JSON response containing task data

## Planned request flow
1. Frontend sends a request
2. API Gateway receives the request
3. API Gateway triggers Lambda
4. Lambda reads task data
5. Lambda returns a JSON response
6. Frontend displays the tasks

## Local-first approach
Before connecting to real AWS services, I will first create the Lambda locally and make it return mock task data.

This helps me understand the backend flow without needing deployment yet.