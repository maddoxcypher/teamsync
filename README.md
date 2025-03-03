# TeamSync - B2B Project Management Platform

## 📝 Abstract

TeamSync is a comprehensive B2B project management solution built with modern web technologies. It enables organizations to streamline their project workflows, manage tasks efficiently, and foster team collaboration through an intuitive interface. The platform implements role-based access control, real-time analytics, and seamless workspace management to enhance team productivity.

## 🎯 Core Features

### Workspace Management
- **Multi-Workspace Support**: Create and manage multiple isolated workspaces
- **Custom Invite System**: Generate and manage invite codes for team members
- **Role-Based Access**: Granular permissions with Owner, Admin, and Member roles
- **Workspace Analytics**: Track workspace metrics and team performance

### Project Management
- **Project Organization**
  - Create projects with custom emojis and descriptions
  - Organize projects within workspaces
  - Project-specific analytics and progress tracking
  - Real-time project status updates

### Task Management System
- **Task Creation & Assignment**
  - Create tasks with priorities and due dates
  - Assign tasks to team members
  - Track task status and progress
  - Task filtering and search capabilities

- **Task Analytics**
  - Overview of total tasks
  - Tracking of overdue tasks
  - Completion rate analysis
  - Priority-based task distribution

### Team Collaboration
- **Member Management**
  - Role-based permissions system
  - Activity tracking
  - Real-time updates
  - Team performance metrics

## 🔧 Technical Implementation

### Data Models

#### Project Schema
- Name (required)
- Description (optional)
- Emoji (custom project identifier)
- Workspace reference
- Created by
- Timestamps

#### Task Schema
- Title (required)
- Description (optional)
- Status (TODO, IN_PROGRESS, DONE)
- Priority (LOW, MEDIUM, HIGH, URGENT)
- Due date
- Assigned to
- Project reference
- Task code (unique identifier)

### Analytics Implementation
- **Project Analytics**: 
  - Task completion rates
  - Overdue task tracking
  - Team performance metrics
  - Real-time progress updates

- **Workspace Analytics**:
  - Overall project health
  - Team productivity metrics
  - Resource utilization
  - Timeline tracking

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
