# 🚀 AI Career Coach (Sensei)

An **AI-powered career preparation platform** built to help users confidently prepare for job opportunities through **personalized industry insights, AI resume building, mock interviews, and cover letter generation**.

This project demonstrates a **production-grade full-stack architecture** with real-world features like authentication, background jobs, AI integration, database persistence, and deployment.

---

## ✨ Features

### 🔐 Authentication & User Management
- Secure login and signup using **Clerk**
- Session-based authentication
- Protected routes using **Next.js Middleware**
- Server-side user validation

---

### 🧭 User Onboarding
- Collects user preferences such as:
  - Industry
  - Experience level
  - Skills
- Stores onboarding data in the database
- Uses onboarding data to personalize AI responses

---

### 📊 Personalized Dashboard
- Displays AI-generated industry insights
- Shows skill trends and career-related information
- Data is tailored based on user onboarding details

---

### 🤖 AI Industry Insights
- Uses **Gemini AI API** to generate:
  - Industry trends
  - In-demand skills
  - Career growth insights
- Insights are refreshed weekly
- Background jobs managed using **Inngest Cron Functions**
- AI responses are cached in the database for performance

---

### 📄 AI Resume Builder
- Create resumes using structured input forms
- Markdown-based resume editor for flexibility
- AI-powered resume optimization
- ATS-friendly content suggestions
- Export resume as **PDF**

---

### 🧠 Mock Interview Preparation
- AI-generated interview questions based on:
  - User role
  - Industry
  - Experience level
- Supports different question categories
- Stores user answers and interview attempts
- AI-generated feedback and scoring

---

### 📈 Interview Performance Analytics
- Tracks performance over multiple mock interviews
- Displays strengths and improvement areas
- Visualizes progress using charts

---

### ✉️ AI Cover Letter Generator
- Generates personalized cover letters using:
  - Resume data
  - Job descriptions
- Editable content
- Ready for job applications

---

## 🛠️ Tech Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**

### Backend
- **Next.js Server Actions**
- **API Routes**
- **Prisma ORM**

### Database
- **PostgreSQL (Neon)**

### Authentication
- **Clerk**

### AI Integration
- **Gemini AI API**

### Background Jobs
- **Inngest (Cron Jobs)**

### Deployment
- **Vercel**

---

## ⚙️ Application Flow

1. User signs up or logs in
2. Completes onboarding process
3. User data is stored in PostgreSQL using Prisma
4. Dashboard loads personalized AI insights
5. User builds resumes, practices interviews, or generates cover letters
6. Gemini AI processes prompts and returns structured responses
7. Results are saved and visualized
8. Weekly background jobs update industry insights automatically

---

## 🔒 Security & Best Practices
- Server-side validation using **Zod**
- Secure environment variables
- Protected server actions
- AI API keys are never exposed to the client
- Type-safe database queries using Prisma

---

## 🚀 Deployment
- Deployed on **Vercel**
- Environment variables configured securely
- Prisma migrations handled during deployment
- Optimized for performance and scalability

---

## 🎯 Why This Project?

This project simulates a **real-world SaaS product** by combining:
- Authentication & authorization
- AI workflows
- Background jobs
- Database design
- Performance optimization
- Production deployment

It is ideal for demonstrating **Full-Stack + AI Engineering skills** in interviews.

---

## 🔮 Future Enhancements
- Voice-based mock interviews
- Real-time interview simulations
- Resume version comparison
- Job recommendation engine
- Multi-language support

---

## 📌 Author
Built with ❤️ to showcase modern full-stack and AI engineering skills.
