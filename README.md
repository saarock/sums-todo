# Todo App

A Todo application built with **React**, **TypeScript**, and **Vite**, configured for fast development and strong type safety.

---

## Features

- **React + TypeScript + Vite**:  
  Modern frontend stack for building fast, type-safe React apps with instant hot reload.

- **Fast Refresh**:  
  Enabled through official Vite plugins (`@vitejs/plugin-react` or `@vitejs/plugin-react-swc`) for smooth developer experience.

- **Advanced ESLint Configuration**:  
  Type-aware linting rules to catch bugs and enforce best practices, including:
  - Recommended and strict TypeScript rules.
  - Stylistic rules for consistent code formatting.

- **React-Specific Lint Plugins**:  
  Integration of `eslint-plugin-react-x` and `eslint-plugin-react-dom` to enforce React best practices.

- **Task Management Features**:
  - Add, edit, and delete tasks with live updates.
  - Filter tasks by status: **All**, **Completed**, and **Pending**.
  - Toggle task completion status with visual feedback.
  - **Task Statistics**: Displays the count of total tasks, pending tasks, and completed tasks dynamically.
  - Responsive design with separate desktop and mobile navigation menus.
  - Dark mode toggle with theme persistence saved in localStorage.

---

## How to Run the App Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   npm install
   npm run dev
