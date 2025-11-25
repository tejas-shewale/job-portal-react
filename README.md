# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# QuizSprint 🚀

An online examination system built with React, Supabase, Clerk for authentication, allowing students to take timed quizzes, view results and admins or instructors to manage questions, quizzes, and results.

## Table of Contents
- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture & Flow](#architecture--flow)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Setup Supabase](#setup-supabase)  
  - [Setup Clerk](#setup-clerk)  
  - [Run Locally](#run-locally)  
- [Database Schema](#database-schema)  
- [Authentication & Authorization](#authentication--authorization)  
- [Usage](#usage)  
  - [Student Flow](#student-flow)  
  - [Instructor/Admin Flow](#instructoradmin-flow)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)

## Demo
> Include a link to a live demo if you have one.  
> ![demo-screenshot](URL)

## Features
- Student registration & login (via Clerk)  
- Quiz creation, editing & deletion (by instructors/admin)  
- Timed quiz sessions with automatic scoring  
- View results and analytics  
- Secure authentication & authorization — only authorized users can access instructor/admin features  
- Responsive UI built with React  
- Real-time updates (where applicable) using Supabase  

## Tech Stack
- Frontend: React + TypeScript  
- Backend: Supabase (PostgreSQL, Auth, Storage, Functions)  
- Authentication: Clerk  
- Database: Supabase PostgreSQL  
- Hosting: (e.g., Vercel, Netlify)  
- State Management: (e.g., React Context/Redux)  
- UI Library: (e.g., TailwindCSS, Material UI)  

## Architecture & Flow
1. User signs up via Clerk (student or instructor/admin)  
2. Supabase stores user records & roles  
3. Instructors create quiz → questions stored in Supabase  
4. Students access quiz → timer starts → submit answers  
5. Backend (Supabase Functions or direct queries) grades quiz → results saved  
6. Student views results; instructor views summary/analytics  
7. Authentication and Role-based access control ensures appropriate features visible per role  

## Getting Started

### Prerequisites
- Node.js (v14+)  
- npm or yarn  
- Supabase account  
- Clerk account  

### Setup Supabase
1. Create a new project in Supabase  
2. Create the following tables (example schema shown below)  
3. Configure Row Level Security (RLS) policies  
4. Generate API keys and environment variables  

### Setup Clerk
1. Sign up at Clerk  
2. Create application (frontend)  
3. Get your `CLERK_FRONTEND_API`, `CLERK_PUBLISHABLE_KEY`, etc.  
4. Set redirect URLs to your local dev and production URLs  


