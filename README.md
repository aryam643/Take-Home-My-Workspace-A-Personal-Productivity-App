# My Workspace – Personal Productivity App

A fullstack web application that allows users to manage their notes and tasks with AI-powered assistance. Built with Next.js, MongoDB, and Groq AI integration.

## Features

### 🔐 Authentication

* Email/password signup and login
* Secure session management with NextAuth.js
* Protected routes for authenticated users
* Graceful session expiration handling

### 📝 Notes Management

* Create, edit, and delete personal notes
* Rich text content support
* **Groq AI-powered note summarization**
* User-specific data isolation

### ✅ Task Management

* Add, update, and organize tasks
* Priority levels (Low, Medium, High)
* Mark tasks as complete/incomplete
* Task filtering and organization

### 🤖 AI Integration

* Groq AI-based note summarization
* Intelligent content analysis using `llama3` or `mixtral` models
* Fallback handling for API/network failures

### 🎨 Modern UI/UX

* Responsive design with Tailwind CSS
* Clean, intuitive interface
* Real-time state management with Zustand
* Toast notifications for user feedback

---

## Tech Stack

| Layer          | Tool                               |
| -------------- | ---------------------------------- |
| Frontend       | Next.js 15 (App Router), React 19  |
| Styling        | Tailwind CSS                       |
| Backend        | Next.js API Routes                 |
| Database       | MongoDB with Mongoose ODM          |
| Authentication | NextAuth.js (Credentials Provider) |
| State Mgmt     | Zustand                            |
| AI Assistant   | **Groq AI API** via `@groq/client` |
| UI Components  | Radix UI primitives                |

---

## Getting Started

### Prerequisites

* Node.js 18+
* MongoDB (local or MongoDB Atlas)
* Groq API key (for AI features)

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd my-workspace
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Update `.env.local`:

```env
MONGODB_URI=mongodb://localhost:27017/my-workspace
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GROQ_API_KEY=your-groq-api-key
```

4. **Start MongoDB**

* Local: `mongod`
* Or use MongoDB Atlas

5. **Run the development server**

```bash
npm run dev
```

6. Open browser:
   [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```bash
my-workspace/
├── app/                    # Next.js App Router
│   ├── api/                # API routes
│   ├── dashboard/          # Dashboard pages
│   └── signup/             # Authentication pages
├── components/             # React components
│   ├── auth/               # Authentication components
│   ├── dashboard/          # Dashboard components
│   └── ui/                 # Reusable UI components
├── lib/                    # Utility libraries
│   ├── auth.ts             # NextAuth config
│   ├── mongodb.ts          # DB connection
│   └── store.ts            # Zustand store
├── models/                 # Mongoose models
│   ├── User.ts
│   ├── Note.ts
│   └── Task.ts
└── types/                  # TypeScript interfaces
```

---

## API Endpoints

### Authentication

* `POST /api/auth/signup` – Register
* `POST /api/auth/signin` – Login (NextAuth)

### Notes

* `GET /api/notes`
* `POST /api/notes`
* `PUT /api/notes/[id]`
* `DELETE /api/notes/[id]`
* `POST /api/notes/[id]/summarize` – **Summarize with Groq AI**

### Tasks

* `GET /api/tasks`
* `POST /api/tasks`
* `PUT /api/tasks/[id]`
* `DELETE /api/tasks/[id]`

---

## Database Schema

### User Model

```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  timestamps: true
}
```

### Note Model

```javascript
{
  title: String,
  content: String,
  userId: ObjectId,
  timestamps: true
}
```

### Task Model

```javascript
{
  title: String,
  description: String,
  priority: Enum ['low', 'medium', 'high'],
  completed: Boolean (default: false),
  userId: ObjectId,
  timestamps: true
}
```

---

## State Management (Zustand)

* Authentication state (session + user info)
* Notes state (CRUD)
* Tasks state (CRUD, toggle complete)
* Loading + toast notifications

---

## Security

* Password hashing with bcrypt
* JWT sessions with NextAuth
* Protected routes via middleware
* User-specific data isolation
* Input validation

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repo to [Vercel](https://vercel.com)
3. Add the following env vars:

```env
MONGODB_URI=your-mongodb-atlas-uri
NEXTAUTH_URL=https://your-vercel-app.vercel.app
NEXTAUTH_SECRET=your-secret
GROQ_API_KEY=your-groq-api-key
```

4. Deploy — Vercel auto-detects Next.js

---

## Development Approach

* App Router & server components (Next.js 15)
* AI assistant via Groq API
* Zustand for minimal state logic
* MongoDB + Mongoose for scalable schema
* Auth with session + credential provider
* Responsive + mobile-first design

---

## Testing

* Sign up & login flows
* Notes CRUD + summarization
* Task CRUD + complete toggle
* UI responsiveness
* Data persists after refresh

---

## Future Enhancements

* [ ] Real-time collaboration (WebSockets)
* [ ] Task reminders & calendar view
* [ ] File uploads for notes
* [ ] Better AI model switching (Mixtral, Llama3)
* [ ] Export notes/tasks
* [ ] Dark mode
* [ ] Mobile app (React Native)

---

## License

MIT License

---
