# My Workspace - Personal Productivity App

A fullstack web application that allows users to manage their notes and tasks with AI-powered assistance. Built with Next.js, MongoDB, and OpenAI integration.

## Features

### 🔐 Authentication
- Email/password signup and login
- Secure session management with NextAuth.js
- Protected routes for authenticated users
- Graceful session expiration handling

### 📝 Notes Management
- Create, edit, and delete personal notes
- Rich text content support
- AI-powered note summarization
- User-specific data isolation

### ✅ Task Management
- Add, update, and organize tasks
- Priority levels (Low, Medium, High)
- Mark tasks as complete/incomplete
- Task filtering and organization

### 🤖 AI Integration
- OpenAI-powered note summarization
- Intelligent content analysis
- Fallback handling for API failures

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Clean, intuitive interface
- Real-time state management with Zustand
- Toast notifications for user feedback

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js with Credentials Provider
- **State Management**: Zustand
- **AI Integration**: OpenAI API with Vercel AI SDK
- **UI Components**: Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)
- OpenAI API key (optional, for AI features)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd my-workspace
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Update `.env.local` with your values:
   \`\`\`env
   MONGODB_URI=mongodb://localhost:27017/my-workspace
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   OPENAI_API_KEY=your-openai-api-key-here
   \`\`\`

4. **Start MongoDB**
   - Local: `mongod`
   - Or use MongoDB Atlas cloud database

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
my-workspace/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   └── signup/           # Authentication pages
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility libraries
│   ├── auth.ts          # NextAuth configuration
│   ├── mongodb.ts       # Database connection
│   └── store.ts         # Zustand state management
├── models/               # MongoDB schemas
│   ├── User.ts
│   ├── Note.ts
│   └── Task.ts
└── types/               # TypeScript definitions
\`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login (NextAuth)

### Notes
- `GET /api/notes` - Get user notes
- `POST /api/notes` - Create new note
- `PUT /api/notes/[id]` - Update note
- `DELETE /api/notes/[id]` - Delete note
- `POST /api/notes/[id]/summarize` - AI summarization

### Tasks
- `GET /api/tasks` - Get user tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/[id]` - Update task
- `DELETE /api/tasks/[id]` - Delete task

## Database Schema

### User Model
\`\`\`javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  timestamps: true
}
\`\`\`

### Note Model
\`\`\`javascript
{
  title: String (required),
  content: String (required),
  userId: ObjectId (required, indexed),
  timestamps: true
}
\`\`\`

### Task Model
\`\`\`javascript
{
  title: String (required),
  description: String,
  priority: Enum ['low', 'medium', 'high'],
  completed: Boolean (default: false),
  userId: ObjectId (required, indexed),
  timestamps: true
}
\`\`\`

## State Management

The app uses Zustand for global state management:

- **Authentication state**: Handled by NextAuth.js sessions
- **Notes state**: Create, read, update, delete operations
- **Tasks state**: Task management with completion tracking
- **Loading states**: UI feedback during async operations

## Security Features

- **Password hashing**: bcryptjs for secure password storage
- **JWT tokens**: Secure session management
- **Route protection**: Middleware for authenticated routes
- **Data isolation**: User-specific data queries
- **Input validation**: Server-side validation for all inputs

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
\`\`\`env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/my-workspace
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-production-secret
OPENAI_API_KEY=your-openai-api-key
\`\`\`

## Development Approach

### Architecture Decisions
- **Next.js App Router**: Modern routing with server components
- **MongoDB with Mongoose**: Flexible document database with ODM
- **NextAuth.js**: Industry-standard authentication
- **Zustand**: Lightweight state management
- **Tailwind CSS**: Utility-first styling approach

### Key Implementation Details
- **User-specific data**: All queries filtered by userId
- **Optimistic updates**: Immediate UI feedback
- **Error handling**: Comprehensive error boundaries
- **Responsive design**: Mobile-first approach
- **AI integration**: Graceful fallbacks for API failures

## Testing the Application

1. **Sign up** with a new account
2. **Create notes** and test AI summarization
3. **Add tasks** with different priorities
4. **Test responsiveness** on different screen sizes
5. **Verify data persistence** across sessions

## Future Enhancements

- [ ] Real-time collaboration
- [ ] File attachments for notes
- [ ] Task due dates and reminders
- [ ] Advanced AI features (auto-categorization)
- [ ] Export functionality
- [ ] Dark mode support
- [ ] Mobile app with React Native

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
