# 🌐 Job Portal – React + Supabase + Clerk + Shadcn UI

A modern **Job Portal Web Application** where Recruiters can post and manage jobs, and Candidates can browse, save, and apply for jobs.

This project is built using **Vite + React (v19)** for fast frontend development, **Supabase** for database, authentication, and file storage, **Clerk** for JWT-based user authentication, and **Shadcn UI** for clean and beautiful UI components.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF)
![Shadcn UI](https://img.shields.io/badge/Shadcn%2FUI-Components-000000)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)

---

## ⭐ Features Overview

### 👤 Authentication (Clerk)
- Supports **Email/Password** and **Google Login**
- Uses **JWT** for secure session management
- User identity stored via Clerk (recruiters & candidates share same system)

### 🏢 Recruiter Features
- ➕ **Create new job posts**
- 🏢 **Add new companies** (name + logo upload)
- ⚙️ **Manage job listings** (edit, delete, open/close)
- 📄 **View applications** for each job
- 🔄 **Update application status** (Pending → Hired/Rejected)
- 🧾 **Manage all applications** created by them

### 👨‍💼 Candidate Features
- 🔍 **Browse all active jobs**
- 📄 **View job details** with rich descriptions
- ⭐ **Save jobs** (wishlist)
- 📨 **Apply for jobs** using a drawer form
- **Application form includes:**
  - Resume link
  - Skills
  - Experience
  - Education

### 📦 Core Application Features
- ✅ Fully **Responsive UI**
- 🔐 **JWT Authentication** via Clerk
- 🎨 **Shadcn UI** for components
- 📝 **Rich text editing** using MDEditor
- 📋 **Form handling** with React Hook Form + Zod validation
- 🔄 **Real-time updates** using Supabase
- 🔒 **RLS (Row Level Security)** for secure queries
- 📤 **Company logo upload** using Supabase Storage

---

## 🛠️ Tech Stack

### Frontend
| Technology | Description |
|------------|-------------|
| ⚛️ **React (Vite) v19** | Fast and modern frontend framework |
| 🎨 **Tailwind CSS** | Utility-first CSS framework |
| 🧱 **Shadcn UI** | Beautiful and accessible component library |
| 🔐 **Clerk Authentication** | JWT-based user authentication |
| 📋 **React Hook Form** | Performant form library |
| ✔️ **Zod** | TypeScript-first schema validation |
| 📝 **@uiw/react-md-editor** | Markdown editor component |

### Backend
| Technology | Description |
|------------|-------------|
| 🗂️ **Supabase PostgreSQL** | Database and backend services |
| 🔐 **RLS (Row Level Security)** | Database-level access control |
| 📦 **Supabase Storage** | File storage for logos and resumes |
| 🔄 **Supabase REST + Realtime APIs** | Backend API layer |

---

## 🗄️ Database Schema (Supabase)

### Companies Table
| Column | Type |
|--------|------|
| `id` | bigint (PK) |
| `name` | text |
| `logo_url` | text |

### Jobs Table
| Column | Type |
|--------|------|
| `id` | bigint (PK) |
| `recruiter_id` | text (Clerk User ID) |
| `title` | text |
| `description` | text |
| `requirements` | text |
| `location` | text |
| `company_id` | bigint (FK → companies) |
| `isOpen` | boolean |

### Applications Table
| Column | Type |
|--------|------|
| `id` | bigint (PK) |
| `job_id` | bigint (FK → jobs) |
| `candidate_id` | text (Clerk User ID) |
| `status` | text (pending/hired/rejected) |
| `resume` | text |
| `skills` | text |
| `experience` | text |
| `education` | text |
| `name` | text |

### Saved Jobs Table
| Column | Type |
|--------|------|
| `id` | bigint (PK) |
| `user_id` | text (Clerk User ID) |
| `job_id` | bigint (FK → jobs) |

---

## 🔐 Important RLS Policies

### Jobs
- ✅ Only the **recruiter who created the job** can update/delete it.

### Applications
- ✅ **Recruiter** can update application status only for their jobs.
- ✅ **Candidate** can insert new applications.

---

## ▶️ Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Supabase account** ([sign up here](https://supabase.com))
- **Clerk account** ([sign up here](https://clerk.com))

### 1. Clone the repository

```bash
git clone https://github.com/tejas-shewale/job-portal-react.git
cd job-portal-react
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up Supabase

1. Create a new project at [Supabase](https://supabase.com)
2. Create the database tables using the schema above
3. Set up **Row Level Security (RLS)** policies:
   - Enable RLS on all tables
   - Create policies for recruiter and candidate access
4. Set up **Supabase Storage** bucket for company logos
5. Copy your **Project URL** and **Anon Key**

### 4. Set up Clerk

1. Create an account at [Clerk](https://clerk.com)
2. Create a new application
3. Enable **Email/Password** and **Google OAuth**
4. Copy your **Publishable Key** and **Secret Key**

### 5. Create `.env` file

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CLERK_SECRET_KEY=your_clerk_secret_key
```

### 6. Start development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will open at `http://localhost:5173`

---

## 📁 Project Structure

```
job-portal-react/
├── public/
│   └── assets/
├── src/
│   ├── api/
│   │   └── apiJobs.js
│   ├── components/
│   │   ├── ui/                    # Shadcn UI components
│   │   ├── JobCard.jsx
│   │   ├── ApplicationCard.jsx
│   │   ├── ApplyJobDrawer.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── JobListing.jsx
│   │   ├── JobPage.jsx
│   │   ├── MyJobs.jsx
│   │   ├── PostJob.jsx
│   │   ├── SavedJobs.jsx
│   │   └── Onboarding.jsx
│   ├── layouts/
│   │   ├── Header.jsx
│   │   └── AppLayout.jsx
│   ├── lib/
│   │   └── supabase.js           # Supabase client
│   ├── hooks/
│   │   └── useFetch.js
│   ├── utils/
│   │   └── supabase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── components.json
└── README.md
```

---

## 🎯 Usage

### For Recruiters

1. **Sign up/Login** with Clerk authentication
2. **Onboard as Recruiter** during first login
3. **Create a company** with name and logo
4. **Post new jobs** with details and requirements
5. **Manage job listings** (edit, delete, open/close)
6. **View applications** and update status
7. **Track all applications** in one place

### For Candidates

1. **Sign up/Login** with Clerk authentication
2. **Onboard as Candidate** during first login
3. **Browse jobs** on the job listing page
4. **View job details** with full descriptions
5. **Save jobs** to your wishlist
6. **Apply for jobs** with resume and details
7. **Track your applications** status

---

## 🔮 Future Enhancements

- 👥 **Role-based dashboards** with analytics
- 📤 **Resume upload** to Supabase Storage
- 🔍 **Advanced job filtering** (category, salary, experience)
- 🤖 **Job recommendations** using AI
- 📅 **Interview scheduling** module
- 📊 **Application analytics** for recruiters
- 🔔 **Email notifications** for status updates
- 💬 **Chat system** between recruiters and candidates

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---


## 👨‍💻 Author

**Tejas Shewale**

- 🔗 GitHub: [@tejas-shewale](https://github.com/tejas-shewale)
- 🔗 LinkedIn: www.linkedin.com/in/tejas-shewale


---

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/)
- [Clerk](https://clerk.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

---


## 🐛 Issues

If you encounter any issues, please [open an issue](https://github.com/tejas-shewale/job-portal-react/issues) on GitHub.

---

⭐ **If you found this project helpful, please give it a star!**

---

Made with ❤️ by [Tejas Shewale](https://github.com/tejas-shewale)
