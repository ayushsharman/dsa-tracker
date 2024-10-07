# DSA Tracker

A simple and efficient platform for tracking Data Structures and Algorithms (DSA) questions with category tags and completion status.

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

The **DSA Tracker** is a web-based application designed to help users manage and track their progress on DSA questions. The application allows users to categorize questions, mark them as done, and filter them based on categories such as sorting, dynamic programming, graphs, etc. It serves as a personal DSA question bank where users can organize their study plan efficiently.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/DSA-Tracker.git
   ```
2. Navigate into the project directory:
   ```bash
   cd DSA-Tracker/backend/
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables (see `.env.example` for guidance).
5. Run the development server:
   ```bash
   npm run dev
   ```

## Routes

### Authentication
- `/login` - User login page
- `/register` - User registration page

### Main Application
- `/dashboard` - Dashboard showing an overview of progress (e.g., total questions added, completed, etc.)
- `/questions` - List of all added DSA questions
- `/questions/new` - Add a new DSA question
- `/questions/:id` - View and edit a specific question's details
- `/categories` - Manage problem categories (e.g., Arrays, Dynamic Programming, Greedy Algorithms)

## Features

1. **User Authentication** - Secure login and registration to keep track of user-specific question banks.
2. **Add DSA Questions** - Users can add questions by providing details like the title, description, difficulty level, and associated tags (e.g., Sorting, Trees).
3. **Mark Questions as Done** - Users can mark questions as completed or reset them as unsolved.
4. **Tagging System** - Each question can be tagged with categories (like arrays, dynamic programming, graphs, etc.) for easy filtering and organization.
5. **Progress Tracking** - The application provides an overview of how many questions have been solved and which areas are being focused on.
6. **Responsive Design** - Optimized for different device sizes, from mobile phones to desktops.

## API Endpoints

### Authentication
- `POST /api/auth/login` - Logs in a user
- `POST /api/auth/register` - Registers a new user
- `POST /api/auth/logout` - Logs out the user

### DSA Questions
- `GET /api/questions` - Fetch all questions added by the user
- `POST /api/questions` - Add a new DSA question
- `GET /api/questions/:id` - Fetch a specific question by its ID
- `PUT /api/questions/:id` - Update the details of a specific question
- `PUT /api/questions/:id/mark-done` - Mark a question as done
- `PUT /api/questions/:id/mark-undone` - Reset the question's status to undone
- `DELETE /api/questions/:id` - Delete a specific question

## Technologies Used

- **Frontend**: React.ts
- **Backend**: Node.ts with Express.ts
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: Tailwind CSS
- **Deployment**: TBD

## Contributing

If you would like to contribute to the **DSA Tracker**, please follow the guidelines in our [CONTRIBUTING.md](CONTRIBUTING.md) file. Contributions of all kinds, whether bug fixes, new features, or documentation updates, are welcome!

## GitHub Workflow

### Branch Naming Convention
- **Feature branches**: `feature/add-question-feature`
- **Bug fix branches**: `fix/question-status-issue`
- **Documentation branches**: `docs/update-readme`

### Commit Message Format
We follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Commit types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

**Example**: `feat(questions): add feature to mark question as done`

### Pull Request Process
1. Ensure your code follows project coding standards.
2. Update the documentation if needed.
3. Submit your Pull Request (PR) for review.
4. At least two reviewers must approve before merging.

For more detailed guidelines, refer to our [CONTRIBUTING.md](CONTRIBUTING.md).