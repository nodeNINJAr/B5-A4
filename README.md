# 📚 Library Management Website

A modern, responsive, and user-friendly web application for managing library operations such as tracking books, members, and lending activity. Built with **React**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**, this project provides a solid foundation for creating a comprehensive library management system.

---

## 📑 Table of Contents

- [📚 Library Management Website](#-library-management-website)
  - [📑 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🛠 Tech Stack](#-tech-stack)
  - [🚀 Installation](#-installation)
    - [Prerequisites](#prerequisites)
    - [Setup Steps](#setup-steps)
- [Clone the repository](#clone-the-repository)
- [Install dependencies](#install-dependencies)
- [Start development server](#start-development-server)
- [📘 Usage](#-usage)
- [📂 Scripts](#-scripts)
- [⚙️ Configuration](#️-configuration)
- [🧪 Development Notes](#-development-notes)
- [🐞 Troubleshooting](#-troubleshooting)
- [👥 Contributors](#-contributors)

---

## ✨ Features

- 📖 Add, edit, delete books and members
- 🔍 Search and filter books by title, author, or genre
- 🔄 Issue and return books with due date tracking
- 🧑‍💼 Manage members and their borrowing history
- 📊 Dashboard for activity overview and statistics
- ✅ Form validation with `react-hook-form`
- 🧩 Modular and scalable code structure
- 💡 Minimal UI design using Tailwind CSS & DaisyUI

---

## 🛠 Tech Stack

| Technology             | Purpose                            |
|------------------------|------------------------------------|
| React 19               | UI library                         |
| TypeScript             | Static typing                      |
| Redux Toolkit          | State management                   |
| React Router v7        | Client-side routing                |
| Tailwind CSS           | Utility-first CSS framework        |
| DaisyUI                | Component library for Tailwind     |
| Lucide React           | Icon set                           |
| Vite                   | Fast development/build tooling     |
| ESLint + TypeScript    | Code linting and quality control   |

---

## 🚀 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm or yarn package manager

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/nodeNINJAr/B5-A4
cd library-management

# Install dependencies
npm install

# Start development server
npm run dev
Visit http://localhost:5173 to view the application.

 
#  📘 Usage

After running the app:

Go to the dashboard to view the library system

Add new books and register members

Issue or return books with date tracking

Filter/search through the catalog easily

View real-time statistics on lending activity

Note: This is a frontend-only app. Backend/database integration is required for full production use.

#  📂 Scripts
Command	Description
npm run dev	Starts Vite dev server (localhost)
npm run build	Builds app using TypeScript and Vite
npm run lint	Runs ESLint across the project files
npm run preview	Previews the production build locally

#  ⚙️ Configuration
TailwindCSS: Configured via tailwind.config.js

Vite: Configurations are set in vite.config.ts

ESLint: Linting rules defined in .eslintrc using TypeScript, React, and Hooks plugins

DaisyUI: Easily customizable theme via Tailwind config

#  🧪 Development Notes
Uses React 19's latest features

Redux Toolkit simplifies state logic and store setup

DaisyUI is used for consistent and clean UI components

Type safety ensures robust and maintainable code

Form handling via react-hook-form ensures validation UX

#  🐞 Troubleshooting
Issue	Solution
Tailwind styles not applying	Check tailwind.config.js and ensure postcss is setup
Build fails	Run npm run lint to catch any TypeScript/ESLint errors
Routing not working	Ensure correct usage of react-router components

#  👥 Contributors
Mehedi Hasan 
