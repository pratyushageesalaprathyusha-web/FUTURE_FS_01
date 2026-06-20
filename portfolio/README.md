# Geesala Prathyusha — Personal Portfolio

A full-stack, production-ready personal portfolio for an aspiring AI & Data Engineer.
Built with **React (Vite) + Tailwind CSS + Framer Motion** on the frontend and
**Node.js + Express + MongoDB + Nodemailer** on the backend.

```
portfolio/
├── frontend/   React + Vite + Tailwind app
└── backend/    Express + MongoDB API
```

## Features

- Glassmorphism, AI-themed, dark/light mode portfolio UI
- Animated hero with typing effect, particle background, scroll progress bar
- Skills with filterable animated progress bars
- Experience timeline, project showcase, certifications, achievements
- Resume viewer/downloader
- Contact form → Express API → MongoDB storage → email notification (Nodemailer)
- SEO meta tags, Open Graph tags, JSON-LD structured data, sitemap.xml, robots.txt
- Fully responsive, mobile-first

## 1. Prerequisites

- Node.js 18+
- A MongoDB Atlas cluster (or local MongoDB)
- A Gmail account with an **App Password** (or any SMTP provider supported by Nodemailer)

## 2. Backend setup

```bash
cd backend
cp .env.example .env     # then fill in MONGO_URI, EMAIL_USER, EMAIL_PASS, etc.
npm install
npm run dev               # starts on http://localhost:5000
```

### Backend environment variables (`backend/.env`)

| Variable | Description |
|---|---|
| `PORT` | API port (default 5000) |
| `MONGO_URI` | MongoDB Atlas connection string |
| `CLIENT_ORIGIN` | Comma-separated allowed frontend origin(s) for CORS |
| `EMAIL_SERVICE` | Nodemailer service, e.g. `gmail` |
| `EMAIL_USER` | Sender email address |
| `EMAIL_PASS` | Sender app password |
| `EMAIL_TO` | Address that receives contact form notifications |

## 3. Frontend setup

```bash
cd frontend
cp .env.example .env     # set VITE_API_URL to your backend URL
npm install
npm run dev               # starts on http://localhost:5173
```

Add your real resume as `frontend/public/resume.pdf` (replaces the placeholder note)
so the "Download Resume" / "View Resume" buttons work.
Optionally add `frontend/public/og-image.png` for social share previews.

## 4. Build for production

```bash
cd frontend
npm run build      # outputs static files to frontend/dist
```

## 5. Deployment

**Frontend → Vercel**
1. Push the repo to GitHub.
2. Import the project in Vercel, set the root directory to `frontend`.
3. Add environment variable `VITE_API_URL` pointing to your deployed backend URL.
4. Deploy.

**Backend → Render**
1. Create a new Web Service on Render, root directory `backend`.
2. Build command: `npm install` — Start command: `npm start`.
3. Add the environment variables listed above (`MONGO_URI`, `EMAIL_USER`, etc.).
4. Set `CLIENT_ORIGIN` to your deployed Vercel URL.
5. Deploy.

**Database → MongoDB Atlas**
1. Create a free cluster, a database user, and allow network access (0.0.0.0/0 for simplicity, or Render's IPs).
2. Copy the connection string into `MONGO_URI`.

## 6. API Reference

| Method | Route | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit a contact form message (validated, stored, emailed) |
| `GET` | `/api/contact` | List all stored contact submissions |

## Tech Stack

React 18 · Vite · Tailwind CSS · Framer Motion · React Icons · Axios · React Toastify ·
Node.js · Express · MongoDB · Mongoose · Nodemailer · express-rate-limit
