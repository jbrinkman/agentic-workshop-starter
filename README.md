# Agentic Workshop Starter

A clean, modern full-stack web application template built with React, TypeScript, Express, and Tailwind CSS. This starter provides a solid foundation with all the tooling configured, ready for you to build upon during the workshop.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library
- **Jest + React Testing Library** - Unit testing

### Backend
- **Node.js + Express** - Web server framework
- **TypeScript** - Type-safe JavaScript
- **CORS** - Cross-origin resource sharing
- **Jest + Supertest** - API testing

### Code Quality
- **ESLint** - Code linting and quality checks
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific rules

## 📁 Project Structure

```
agentic-labs/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── __tests__/       # Component tests
│   │   │   └── App.test.tsx
│   │   ├── services/        # API service layer
│   │   │   └── api.ts       # API client functions
│   │   ├── types/           # TypeScript type definitions
│   │   │   └── index.ts     # Shared types
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   ├── index.css        # Global styles
│   │   └── setupTests.ts    # Test configuration
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── jest.config.js
│
├── backend/                  # Express backend API
│   ├── src/
│   │   ├── routes/          # API routes
│   │   │   └── api.ts       # API endpoints
│   │   ├── types/           # TypeScript type definitions
│   │   │   └── index.ts     # Shared types
│   │   ├── __tests__/       # API tests
│   │   │   └── api.test.ts
│   │   └── index.ts         # Server entry point
│   ├── .env.example         # Environment variables template
│   ├── package.json
│   ├── tsconfig.json
│   ├── nodemon.json
│   └── jest.config.js
│
├── package.json              # Root package.json for scripts
├── agentic-labs.code-workspace  # VS Code workspace settings
├── LICENSE                   # MIT License
├── README.md                 # This file
├── QUICKSTART.md            # Quick start guide
├── LINTING.md               # Linting and formatting guide
└── WORKSHOP_GUIDE.md        # Workshop instructions
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to this directory**

2. **Install all dependencies** (root, frontend, and backend):
   ```bash
   npm run install:all
   ```

   Or install individually:
   ```bash
   # Root dependencies
   npm install

   # Frontend dependencies
   cd frontend && npm install

   # Backend dependencies
   cd ../backend && npm install
   ```

3. **Set up environment variables**:
   ```bash
   cd backend
   cp .env.example .env
   ```

## 🏃 Running the Application

### Development Mode

Run both frontend and backend concurrently:
```bash
npm run dev
```

Or run them separately:

**Backend** (runs on http://localhost:3001):
```bash
npm run dev:backend
```

**Frontend** (runs on http://localhost:5173):
```bash
npm run dev:frontend
```

### Production Build

Build both frontend and backend:
```bash
npm run build
```

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Run Tests Separately

**Backend tests**:
```bash
npm run test:backend
```

**Frontend tests**:
```bash
npm run test:frontend
```

### Watch Mode
```bash
# Backend
cd backend && npm run test:watch

# Frontend
cd frontend && npm run test:watch
```

### Coverage Reports
```bash
# Backend
cd backend && npm run test:coverage

# Frontend
cd frontend && npm run test:coverage
```

## 🔍 Code Quality

### Linting

Check code quality with ESLint:
```bash
npm run lint              # Check both frontend and backend
npm run lint:fix          # Auto-fix issues
```

### Formatting

Format code with Prettier:
```bash
npm run format            # Format all code
npm run format:check      # Check if code is formatted
```

**See [LINTING.md](./LINTING.md) for detailed documentation on ESLint and Prettier.**

## 📚 API Endpoints

### Example Endpoints

- **GET** `/api/hello` - Simple hello message from the API
  ```json
  {
    "message": "Hello from the API!"
  }
  ```

### Health Check

- **GET** `/health` - Server health status
  ```json
  {
    "status": "ok",
    "timestamp": "2025-12-01T13:00:00.000Z"
  }
  ```

## 🎯 What's Included

This baseline starter includes:

- ✅ **Clean Welcome Page** - Modern, responsive UI with Tailwind CSS
- ✅ **API Connectivity** - Frontend connects to backend and displays API status
- ✅ **Full TypeScript Setup** - Type safety across the entire stack
- ✅ **Testing Framework** - Jest configured for both frontend and backend
- ✅ **Code Quality Tools** - ESLint and Prettier pre-configured
- ✅ **Hot Reload** - Fast development with Vite and Nodemon
- ✅ **Modern Icons** - Lucide React icon library included

## 🎯 Workshop Exercises

This is a clean baseline ready for you to build upon. During the workshop, you'll add features such as:

### Example Features to Build
1. **Task Management** - Create, read, update, and delete tasks
2. **Data Persistence** - Add a database (MongoDB, PostgreSQL, or SQLite)
3. **User Authentication** - Implement login and signup
4. **Real-time Updates** - Use WebSockets for live data
5. **File Uploads** - Allow users to attach files
6. **Search & Filter** - Add advanced data filtering
7. **Pagination** - Handle large datasets efficiently
8. **API Documentation** - Add Swagger/OpenAPI docs

## 🎨 Customization

### Styling
- Tailwind CSS classes are used throughout
- Modify `frontend/tailwind.config.js` to customize the theme
- Update `frontend/src/index.css` for global styles

### API Configuration
- Backend port: `backend/.env` (PORT variable)
- Frontend proxy: `frontend/vite.config.ts` (proxy configuration)

## 🐛 Troubleshooting

### Port Already in Use
If you get a port conflict error:
- Change the backend port in `backend/.env`
- Update the proxy in `frontend/vite.config.ts` to match

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules frontend/node_modules backend/node_modules
npm run install:all
```

### TypeScript Errors
```bash
# Rebuild TypeScript
npm run build
```

## 📖 Learning Resources

### Using Windsurf
- Ask Windsurf to explain any code you don't understand
- Use Windsurf to implement new features
- Let Windsurf help you write tests
- Ask Windsurf to refactor code

### Example Prompts for Windsurf
- "Create a Task type with id, title, description, and completed fields"
- "Add a POST endpoint to create new tasks"
- "Build a TaskList component to display tasks"
- "Add error handling to the API calls"
- "Write tests for the new task endpoints"
- "Add a database connection using Prisma"

## 🤝 Contributing

This is a workshop starter project. Feel free to:
- Add new features
- Improve existing code
- Add more tests
- Enhance documentation

## 📝 License

MIT License - feel free to use this project for learning and teaching purposes.

## 🎓 What You'll Learn

### Key Concepts
- ✅ Full-stack TypeScript development
- ✅ RESTful API design and implementation
- ✅ React component architecture
- ✅ State management with hooks
- ✅ Unit testing with Jest
- ✅ Modern build tools (Vite)
- ✅ Styling with Tailwind CSS
- ✅ Working with Agentic AI tools

### Best Practices
- Type safety throughout the stack
- Separation of concerns (components, services, routes)
- Error handling and validation
- Testing at multiple levels
- Clean, maintainable code structure
- Modern ES6+ JavaScript/TypeScript

---

**Happy Coding! 🚀**

For questions or issues during the workshop, please ask your instructor or use Windsurf to help debug!
