# Windsurf & Agentic AI Workshop - Starter Project

Welcome to the workshop! This is a full-stack web application starter built with modern technologies to help you learn how to build applications using Windsurf and Agentic AI.

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
workshop-starter/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ItemForm.tsx
│   │   │   ├── ItemList.tsx
│   │   │   └── __tests__/   # Component tests
│   │   ├── services/        # API service layer
│   │   ├── types/           # TypeScript type definitions
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── backend/                  # Express backend API
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── routes/          # API routes
│   │   ├── types/           # TypeScript type definitions
│   │   ├── __tests__/       # API tests
│   │   └── index.ts         # Server entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── jest.config.js
│
└── package.json              # Root package.json for scripts
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

**Frontend** (runs on http://localhost:3000):
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

### Items API

- **GET** `/api/items` - Get all items
- **GET** `/api/items/:id` - Get item by ID
- **POST** `/api/items` - Create new item
  ```json
  {
    "name": "Item name",
    "description": "Item description"
  }
  ```

### Health Check

- **GET** `/health` - Server health status

## 🎯 Workshop Exercises

This starter project is designed for hands-on learning. Here are some suggested exercises:

### Beginner Level
1. **Add a new field** - Add a "priority" field to items (low, medium, high)
2. **Implement filtering** - Add ability to filter items by name
3. **Add sorting** - Sort items by date or name

### Intermediate Level
4. **Implement DELETE** - Complete the delete functionality (currently a placeholder)
5. **Add UPDATE** - Implement edit functionality for items
6. **Add pagination** - Implement pagination for the item list
7. **Add search** - Implement full-text search across items

### Advanced Level
8. **Add authentication** - Implement user login/signup
9. **Add database** - Replace in-memory storage with a real database (MongoDB, PostgreSQL)
10. **Add real-time updates** - Use WebSockets for live updates
11. **Add file uploads** - Allow users to attach files to items

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

### Example Prompts
- "Add a priority field to the Item type and update all related code"
- "Write tests for the ItemForm component"
- "Implement a DELETE endpoint for items"
- "Add error handling to the API calls"
- "Refactor the item controller to use async/await"

## 🤝 Contributing

This is a workshop starter project. Feel free to:
- Add new features
- Improve existing code
- Add more tests
- Enhance documentation

## 📝 License

MIT License - feel free to use this project for learning and teaching purposes.

## 🎓 Workshop Notes

### Key Concepts Covered
- ✅ Full-stack TypeScript development
- ✅ RESTful API design
- ✅ React component architecture
- ✅ State management with hooks
- ✅ Unit testing with Jest
- ✅ Modern build tools (Vite)
- ✅ CSS with Tailwind

### Best Practices Demonstrated
- Type safety throughout the stack
- Separation of concerns (components, services, controllers)
- Error handling
- Testing at multiple levels
- Clean code structure
- Modern ES6+ JavaScript

---

**Happy Coding! 🚀**

For questions or issues during the workshop, please ask your instructor or use Windsurf to help debug!
