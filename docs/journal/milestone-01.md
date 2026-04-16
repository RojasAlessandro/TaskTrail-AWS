# Milestone 1

## Goal
Design the initial AWS architecture before building anything.

## What I did
- Created the first architecture diagram for TaskTrail AWS
- Identified the main AWS services in the system
- Mapped the basic request flow between frontend, authentication, API, backend, database, scheduling, and monitoring

## AWS services planned in the design
- S3
- Cognito
- API Gateway
- Lambda
- DynamoDB
- EventBridge Scheduler
- CloudWatch

## What I learned
Designing the architecture first helps me understand how each AWS service fits into the project before I start deploying anything.

## Problems faced
- Still learning how the services connect together
- Needed to correct the EventBridge Scheduler flow so that it triggers Lambda instead of connecting elsewhere directly

## Evidence
- Created `docs/architecture/tasktrail-v1.drawio`
- Documented the system flow in the repository