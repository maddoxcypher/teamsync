# TeamSync - B2B Project Management Platform

TeamSync is a robust project management platform built with modern web technologies, designed to help teams collaborate efficiently and manage projects effectively.

## 🌟 Features

- **Workspace Management**
  - Create and manage multiple workspaces
  - Invite team members with custom invite codes
  - Role-based access control (Owner, Admin, Member)

- **Project Management**
  - Create and organize projects within workspaces
  - Custom project emojis and descriptions
  - Project analytics and progress tracking

- **Task Management**
  - Create and assign tasks
  - Priority levels and status tracking
  - Due date management
  - Task analytics

- **Team Collaboration**
  - Member management with role-based permissions
  - Real-time updates
  - Workspace activity tracking

## 🛠 Tech Stack

### Frontend
- React 18.3
- TypeScript
- Vite
- TanStack Query (React Query)
- Tailwind CSS
- Radix UI Components
- Zod for validation
- Zustand for state management

### Backend
- Node.js
- Express
- TypeScript
- MongoDB with Mongoose
- Passport.js for authentication
- Cookie-session for session management
- Zod for validation

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:

2. Install dependencies:

3. Create a `.env` file with the following variables:

4. Seed the database with initial roles:

5. Start the development server:

5. Start the development server:

## 🔐 Authentication

The application supports two authentication methods:
- Local authentication (email/password)
- Google OAuth2.0

## 👥 Role-Based Permissions

- **Owner**: Full access to workspace management and all features
- **Admin**: Can manage projects, tasks, and workspace settings
- **Member**: Can create and edit tasks, view workspace content


## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
