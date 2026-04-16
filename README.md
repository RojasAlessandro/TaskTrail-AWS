# TaskTrail AWS

## Project Goal
TaskTrail AWS is my personal software engineering project to learn core AWS services by building a small serverless task-tracking application.

The goal is not just to make the app work, but to understand:
- cloud architecture
- infrastructure as code
- backend APIs
- authentication
- storage
- event-driven workflows
- deployment and monitoring

---

## Planned AWS Services
- **S3** -> frontend/static hosting
- **API Gateway** -> expose backend API endpoints
- **Lambda** -> backend logic
- **DynamoDB** -> store task data
- **Cognito** -> user authentication
- **EventBridge Scheduler** -> reminders / scheduled actions
- **CloudWatch** -> logs and monitoring
- **AWS CDK** -> infrastructure as code

---

## Project Structure
```text
TaskTrail-AWS/
├── README.md
├── .gitignore
├── docs/
│   ├── architecture/
│   ├── journal/
│   └── decisions/
├── backend/
├── frontend/
└── infrastructure/
```

## Folder Purpose
- **docs/** -> project documentation, reflections, and architecture notes
- **docs/architecture/** -> diagrams of the AWS system design
- **docs/journal/** -> milestone-by-milestone progress logs
- **docs/decisions/** -> technical decision records and why choices were made
- **backend/** -> Lambda handler code and backend-related logic
- **frontend/** -> simple frontend app or static website
- **infrastructure/** -> AWS CDK code for defining cloud resources

---

## High-Level Architecture
The app will eventually follow this flow:

1. User opens the frontend
2. Frontend may use **Cognito** for login
3. Frontend sends requests to **API Gateway**
4. API Gateway triggers **Lambda**
5. Lambda reads/writes task data in **DynamoDB**
6. Logs and metrics are sent to **CloudWatch**
7. Scheduled reminders or background jobs can be triggered by **EventBridge Scheduler**
8. Static frontend assets may be hosted with **S3**

---

## Learning Objectives
By building this project, I want to learn how to:
- design a simple cloud architecture
- provision infrastructure using AWS CDK
- build a serverless backend with Lambda and API Gateway
- store and retrieve NoSQL data with DynamoDB
- manage authentication with Cognito
- schedule events and reminders with EventBridge Scheduler
- monitor logs and troubleshoot issues with CloudWatch
- document software engineering decisions clearly on GitHub

---

## Milestones

### Milestone 0 - Project Setup
- [x] Create project folder
- [x] Initialize Git repository
- [x] Create README.md
- [x] Add `.gitignore`
- [x] Create docs, backend, frontend, and infrastructure folders
- [x] Add initial journal and decision files

### Milestone 1 - Architecture Design
- [x] Create architecture diagram
- [x] List the purpose of each AWS service
- [x] Document the request flow
- [x] Save diagram in `docs/architecture`

### Milestone 2 - Infrastructure Setup
- [ ] Install AWS CLI
- [ ] Install AWS CDK
- [ ] Initialize CDK project in `infrastructure/`
- [ ] Understand the generated CDK project structure
- [ ] Make first infrastructure commit

### Milestone 3 - First AWS Resources
- [ ] Create first CDK stack
- [ ] Add an S3 bucket or DynamoDB table
- [ ] Deploy first safe test resource
- [ ] Learn how `cdk synth`, `cdk diff`, and `cdk deploy` work

### Milestone 4 - Database Layer
- [ ] Create DynamoDB table for tasks
- [ ] Decide task item structure
- [ ] Learn partition key design
- [ ] Document why DynamoDB was chosen

### Milestone 5 - Backend API
- [ ] Create Lambda function
- [ ] Connect Lambda to API Gateway
- [ ] Add first test route
- [ ] Return a simple JSON response
- [ ] Document how requests flow through the backend

### Milestone 6 - Task CRUD
- [ ] Add create task endpoint
- [ ] Add get tasks endpoint
- [ ] Add update task endpoint
- [ ] Add delete task endpoint
- [ ] Connect CRUD logic to DynamoDB

### Milestone 7 - Frontend
- [ ] Create simple frontend UI
- [ ] Show tasks on screen
- [ ] Add form for creating tasks
- [ ] Connect frontend to API Gateway
- [ ] Document how frontend and backend communicate

### Milestone 8 - Authentication
- [ ] Create Cognito user pool
- [ ] Add sign up / login flow
- [ ] Protect task endpoints by user
- [ ] Understand how identity ties to stored task data

### Milestone 9 - Scheduling and Monitoring
- [ ] Add EventBridge Scheduler for reminders or cleanup jobs
- [ ] Add CloudWatch logging
- [ ] Inspect Lambda logs
- [ ] Document debugging steps and common errors

### Milestone 10 - Deployment and Reflection
- [ ] Review deployed resources
- [ ] Clean up unused resources
- [ ] Reflect on what was learned from each AWS service
- [ ] Summarize the full journey in GitHub

---

## Documentation Plan
I will document this project through:
- milestone journals
- architecture diagrams
- decision logs
- commit history
- code comments
- GitHub README updates

---

## Engineering Decisions to Record
Examples of decisions I want to capture:
- Why I used CDK instead of manual console setup
- Why DynamoDB was chosen over a relational database
- Why I used Lambda instead of a traditional server
- How I structured task data
- How I handled authentication and authorization
- How I kept the project within free-tier-friendly limits

---

## Tools I Plan to Use
- **VS Code** for development
- **GitHub** for version control and project history
- **AWS Toolkit for VS Code** for AWS integration
- **Draw.io / diagrams.net** for architecture diagrams
- **AWS CLI** for configuration
- **AWS CDK (TypeScript)** for infrastructure as code

---

## Notes on Cost Safety
This project is intended to be built carefully and gradually.

Before deploying resources, I should:
- enable AWS billing alerts
- set up a budget
- review the AWS Free Tier
- delete resources that I no longer need
- avoid creating unnecessary always-on services

---

## Current Status
- [x] Repository structure created
- [x] README completed
- [x] Initial documentation added
- [x] Architecture diagram started
- [ ] CDK initialized
- [ ] First AWS resource deployed

---

## Reflection
This project is intentionally being built step by step so I can understand each AWS service instead of rushing through everything at once.

The aim is not just to finish an app, but to build real cloud engineering understanding along the way.