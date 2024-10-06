# DSA Tracker

A comprehensive platform for managing the DSA questions you've solved and will be solving.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Setup](#setup)
3. [Routes](#routes)
4. [Features](#features)
5. [API Endpoints](#api-endpoints)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [GitHub Workflow](#github-workflow)


## Project Overview

DSA Tracker is a web application designed to streamline remote work management. It includes features for task management, meeting scheduling, expense tracking, and document management.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run the development server: `npm run dev`

## Routes

### Authentication
- `/login` - User login page
- `/register` - New user registration

### Main Application
- `/dashboard` - Main dashboard (DSA Tracker)
- `/tasks` - Task management
- `/meetings` - Meeting scheduling and management
- `/expenses` - Expense tracking
- `/documents` - Document management
- `/calendar` - Calendar view
- `/profile` - User profile management

### Task Management
- `/tasks/new` - Create a new task
- `/tasks/:id` - View/edit a specific task

### Meeting Management
- `/meetings/new` - Create a new meeting
- `/meetings/:id` - View/edit a specific meeting
- `/meetings/:id/join` - Join a meeting

### Expense Tracking
- `/expenses/new` - Add a new expense
- `/expenses/:id` - View/edit a specific expense

### Document Management
- `/documents/new` - Upload a new document
- `/documents/:id` - View/edit a specific document

### Session Tracking
- `/sessions/start` - Start a new work session
- `/sessions/:id` - View details of a specific session

## Features

1. User Authentication
2. Task Management
3. Meeting Scheduling and Video Conferencing
4. Expense Tracking
5. Document Management
6. Calendar Integration
7. Session Tracking (Pomodoro-style)
8. Responsive Design for various devices

## API Endpoints

### Authentication
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/logout`

### Tasks
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Meetings
- `GET /api/meetings`
- `POST /api/meetings`
- `GET /api/meetings/:id`
- `PUT /api/meetings/:id`
- `DELETE /api/meetings/:id`

### Expenses
- `GET /api/expenses`
- `POST /api/expenses`
- `GET /api/expenses/:id`
- `PUT /api/expenses/:id`
- `DELETE /api/expenses/:id`

### Documents
- `GET /api/documents`
- `POST /api/documents`
- `GET /api/documents/:id`
- `PUT /api/documents/:id`
- `DELETE /api/documents/:id`

### Sessions
- `POST /api/sessions/start`
- `PUT /api/sessions/:id/stop`
- `GET /api/sessions/:id`

## Technologies Used

- Frontend: React.js
- Backend: Node.js with Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Real-time updates: Socket.io
- Video Conferencing: WebRTC
- Styling: Tailwind CSS


## Contributing

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on our code of conduct, and the process for submitting pull requests.

## GitHub Workflow

### Branch Naming Convention
- Feature branches: `feature/short-feature-description`
- Bug fix branches: `fix/short-bug-description`
- Documentation branches: `docs/short-doc-description`

### Commit Message Format
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Each commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example: `feat(auth): add user registration endpoint`

### Pull Request Process
1. Ensure your code adheres to the project's coding standards.
2. Update the README.md with details of changes to the interface, if applicable.
3. You may merge the Pull Request once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

For more detailed guidelines, please refer to our [CONTRIBUTING.md](CONTRIBUTING.md) file.