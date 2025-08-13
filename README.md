# B2B Next.js Application Boilerplate

A comprehensive boilerplate for building modern B2B applications with Next.js, TypeScript, Redux, authentication, and a complete UI component system.

## 🚀 Quick Start

\`\`\`bash
# Clone or create new project
npx create-next-app@latest my-b2b-app --typescript --tailwind --eslint --app
cd my-b2b-app

# Install dependencies (see detailed steps below)
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
\`\`\`

## 📋 Complete Manual Setup Guide

### Step 1: Initialize Next.js Project

\`\`\`bash
# Create the project with all required flags
npx create-next-app@latest my-b2b-app --typescript --tailwind --eslint --app --src-dir
cd my-b2b-app

# Create additional directory structure
mkdir -p src/{redux,providers,constants,config}
mkdir -p src/redux/{features,api}
mkdir -p src/redux/features/auth
mkdir -p src/components/ui
mkdir -p src/hooks
mkdir -p types
mkdir -p hooks
mkdir -p components/{ui,theme-provider}
mkdir -p providers
mkdir -p redux/{features,api}
mkdir -p redux/features/auth
mkdir -p lib
\`\`\`

### Step 2: Install All Required Dependencies

#### Core UI & Styling Dependencies
\`\`\`bash
# Radix UI Components (Complete Set)
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar
npm install @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress
npm install @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select
npm install @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot
npm install @radix-ui/react-tabs @radix-ui/react-tooltip

# Styling & Theme Utilities
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate
npm install next-themes lucide-react react-icons
\`\`\`

#### State Management & Data Fetching
\`\`\`bash
# Redux Toolkit with Persistence
npm install @reduxjs/toolkit react-redux redux-persist
npm install redux-persist/integration/react

# RTK Query for API calls
npm install @reduxjs/toolkit/query/react
\`\`\`

#### Authentication & Security
\`\`\`bash
# JWT and Authentication
npm install jwt-decode server-only
npm install gapi-script  # For Google OAuth
\`\`\`

#### Forms & Validation
\`\`\`bash
# Form Handling
npm install react-hook-form @hookform/resolvers zod
\`\`\`

#### Data Processing & Export
\`\`\`bash
# Table Management
npm install @tanstack/react-table

# File Processing & Export
npm install html2canvas jspdf jspdf-autotable xlsx
npm install react-image-file-resizer sharp

# Date Utilities
npm install date-fns dayjs react-day-picker
\`\`\`

#### Additional Features
\`\`\`bash
# Animations & UI Enhancements
npm install framer-motion cmdk sonner
npm install embla-carousel-react embla-carousel-autoplay

# Phone Number & Country Support
npm install react-phone-number-input libphonenumber-js
npm install country-data-list react-circle-flags

# Utilities
npm install uuid axios
\`\`\`

#### Development Dependencies
\`\`\`bash
# TypeScript Types
npm install -D @types/node @types/react @types/react-dom
npm install -D @types/jest @types/react-phone-number-input @types/uuid

# Testing Framework
npm install -D @testing-library/react @testing-library/jest-dom
npm install -D jest jest-environment-jsdom babel-jest identity-obj-proxy

# Development Tools
npm install -D ts-node
\`\`\`

### Step 3: Create Configuration Files

#### TypeScript Configuration (`tsconfig.json`)
\`\`\`json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
\`\`\`

#### Tailwind Configuration (`tailwind.config.js`)
\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
\`\`\`

#### Next.js Configuration (`next.config.mjs`)
\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'your-api-domain.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'your-domain.com'],
    },
  },
};

export default nextConfig;
\`\`\`

#### Jest Configuration (`jest.config.js`)
\`\`\`javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
\`\`\`

#### Jest Setup (`jest.setup.js`)
\`\`\`javascript
import '@testing-library/jest-dom'
\`\`\`

### Step 4: Create Core Files

#### Package.json Scripts
\`\`\`json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
\`\`\`

#### Environment Variables (`.env.example`)
\`\`\`bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
NEXT_PUBLIC_JWT_EXPIRY=7d

# Google OAuth (Optional)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id

# Database (if using)
DATABASE_URL=your-database-connection-string

# File Upload (if using)
NEXT_PUBLIC_MAX_FILE_SIZE=5242880
\`\`\`

### Step 5: Create Essential Files Structure

You'll need to create these key files (content provided in the boilerplate):

#### Core Configuration
- `src/config/index.ts` - API endpoints and app configuration
- `src/constants/index.ts` - Application constants
- `types.ts` - Global TypeScript types

#### Redux Setup
- `src/redux/store.ts` - Redux store with persistence
- `src/redux/hooks.ts` - Typed Redux hooks
- `src/redux/features/auth/authSlice.ts` - Authentication state
- `src/redux/api/baseApi.ts` - RTK Query base API
- `src/redux/features/auth/authApi.ts` - Authentication API endpoints

#### Providers
- `src/providers/ReduxProvider.tsx` - Redux provider wrapper
- `src/providers/PersistGateWrapper.tsx` - Redux persist gate
- `src/components/theme-provider.tsx` - Theme provider for dark/light mode

#### Utilities
- `src/lib/utils.ts` - Utility functions (cn, etc.)
- `src/lib/session.ts` - Session management utilities
- `src/lib/signin.ts` - Authentication server actions
- `src/hooks/useSession.tsx` - Session management hook

#### UI Components
- `src/components/ui/button.tsx` - Button component
- `src/components/ui/card.tsx` - Card component
- Additional UI components as needed

#### Middleware
- `middleware.ts` - Authentication and route protection

### Step 6: Set Up Global Styles

#### Global CSS (`src/app/globals.css`)
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
\`\`\`

### Step 7: Development Workflow

\`\`\`bash
# Start development
npm run dev

# Run tests
npm run test

# Build for production
npm run build

# Start production server
npm run start
\`\`\`

## 📁 Complete Project Structure

\`\`\`
my-b2b-app/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   └── theme-provider.tsx
│   ├── config/
│   │   └── index.ts
│   ├── constants/
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useSession.tsx
│   │   └── usePermissions.ts
│   ├── lib/
│   │   ├── session.ts
│   │   ├── signin.ts
│   │   └── utils.ts
│   ├── providers/
│   │   ├── PersistGateWrapper.tsx
│   │   └── ReduxProvider.tsx
│   └── redux/
│       ├── api/
│       │   ├── adminApi.ts
│       │   ├── baseApi.ts
│       │   ├── flightApi.ts
│       │   └── usersApi.ts
│       ├── features/
│       │   └── auth/
│       │       ├── authApi.ts
│       │       └── authSlice.ts
│       ├── hooks.ts
│       └── store.ts
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── theme-provider.tsx
├── hooks/
│   └── useSession.ts
├── lib/
│   ├── session.ts
│   └── utils.ts
├── providers/
│   ├── PersistGateWrapper.tsx
│   └── ReduxProvider.tsx
├── redux/
│   ├── api/
│   │   ├── adminApi.ts
│   │   ├── baseApi.ts
│   │   └── flightApi.ts
├── features/
│   └── auth/
│       ├── authApi.ts
│       └── authSlice.ts
├── hooks.tsx
├── store.ts
├── types.ts
├── middleware.ts
├── .env.example
├── .env.local
├── jest.config.js
├── jest.setup.js
├── next.config.mjs
├── package.json
├── tailwind.config.js
└── tsconfig.json
\`\`\`

## 🎨 Features Included

### Authentication System
- JWT-based authentication with automatic token refresh
- Google OAuth integration ready
- Protected routes with middleware
- Session management with Redux persistence
- Server-side session validation

### Role-Based Permissions System
- Role-based access control
- Permission mapping for user roles
- Middleware checks permissions for protected routes
- Component-level checks for conditional rendering

### State Management
- Redux Toolkit with RTK Query
- Redux Persist for state persistence
- Typed hooks for type safety
- Modular API slice structure

### UI Components
- Complete Radix UI component library
- Dark/light theme support
- Responsive design with Tailwind CSS
- Custom design system with CSS variables

### Development Tools
- TypeScript for type safety
- Jest and React Testing Library for testing
- ESLint for code quality
- Hot reload development server

### File Processing
- PDF generation and export
- Excel file export capabilities
- Image processing and optimization
- File upload utilities

## 🔐 Authentication & Authorization System

### How Authentication Works

This boilerplate uses JWT-based authentication with automatic token refresh and role-based access control.

#### Authentication Flow
1. User submits login credentials
2. Server validates and returns JWT tokens (access + refresh)
3. Tokens are stored in Redux state and persisted to localStorage
4. Middleware automatically adds tokens to API requests
5. Protected routes check authentication status
6. Tokens are automatically refreshed when expired

#### Login Implementation Example

\`\`\`tsx
// pages/login.tsx
import { useAppDispatch } from '@/redux/hooks'
import { signInUser } from '@/lib/signin'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  
  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await signInUser(email, password)
      if (result.success) {
        // User is automatically logged in via Redux
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Login form UI */}
    </form>
  )
}
\`\`\`

#### Using Authentication in Components

\`\`\`tsx
// components/UserProfile.tsx
import { useAppSelector } from '@/redux/hooks'
import { useSession } from '@/hooks/useSession'

export default function UserProfile() {
  const { user, isAuthenticated } = useAppSelector(state => state.auth)
  const { session } = useSession()
  
  if (!isAuthenticated) {
    return <div>Please log in</div>
  }
  
  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Role: {user?.role}</p>
      <p>Permissions: {session?.permissions?.join(', ')}</p>
    </div>
  )
}
\`\`\`

### Role-Based Permissions System

#### How Permissions Work

1. **User Roles**: Each user has a role (admin, manager, user, etc.)
2. **Permission Mapping**: Roles are mapped to specific permissions
3. **Route Protection**: Middleware checks permissions for protected routes
4. **Component-Level**: Components can check permissions for conditional rendering

#### Permission Types
\`\`\`typescript
// types.ts
export interface UserPermissions {
  canViewDashboard: boolean
  canManageUsers: boolean
  canEditSettings: boolean
  canViewReports: boolean
  canExportData: boolean
  canDeleteRecords: boolean
}

export interface AuthUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'manager' | 'user' | 'viewer'
  permissions: UserPermissions
}
\`\`\`

#### Using Permissions in Components

\`\`\`tsx
// components/AdminPanel.tsx
import { useAppSelector } from '@/redux/hooks'

export default function AdminPanel() {
  const { user } = useAppSelector(state => state.auth)
  
  if (!user?.permissions.canManageUsers) {
    return <div>Access denied</div>
  }
  
  return (
    <div>
      <h2>Admin Panel</h2>
      {user.permissions.canDeleteRecords && (
        <button className="bg-red-500 text-white px-4 py-2">
          Delete Records
        </button>
      )}
    </div>
  )
}
\`\`\`

#### Permission Hook Example

\`\`\`tsx
// hooks/usePermissions.ts
import { useAppSelector } from '@/redux/hooks'

export function usePermissions() {
  const { user } = useAppSelector(state => state.auth)
  
  return {
    canView: (resource: string) => {
      return user?.permissions[`canView${resource}`] || false
    },
    canEdit: (resource: string) => {
      return user?.permissions[`canEdit${resource}`] || false
    },
    canDelete: (resource: string) => {
      return user?.permissions[`canDelete${resource}`] || false
    },
    hasRole: (role: string) => {
      return user?.role === role
    }
  }
}

// Usage in component
function MyComponent() {
  const { canEdit, hasRole } = usePermissions()
  
  return (
    <div>
      {canEdit('Users') && <EditButton />}
      {hasRole('admin') && <AdminSettings />}
    </div>
  )
}
\`\`\`

### Private Route Protection

#### Middleware-Level Protection

The `middleware.ts` file automatically protects routes:

\`\`\`typescript
// middleware.ts - Key features
import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/utils'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value
  const { pathname } = request.nextUrl
  
  // Public routes that don't need authentication
  const publicRoutes = ['/login', '/signup', '/forgot-password']
  
  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard', '/admin', '/profile']
  
  // Admin-only routes
  const adminRoutes = ['/admin', '/users/manage']
  
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    // Verify token and check permissions
    const session = await decrypt(token)
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    // Check admin routes
    if (adminRoutes.some(route => pathname.startsWith(route))) {
      if (session.user.role !== 'admin') {
        return NextResponse.redirect(new URL('/unauthorized', request.url))
      }
    }
  }
  
  return NextResponse.next()
}
\`\`\`

#### Component-Level Route Protection

\`\`\`tsx
// components/ProtectedRoute.tsx
import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { NextRequest, NextResponse } from 'next/server'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: string
  requiredPermission?: string
}

export default function ProtectedRoute({ 
  children, 
  requiredRole, 
  requiredPermission 
}: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAppSelector(state => state.auth)
  const router = useRouter()
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }
    
    if (requiredRole && user?.role !== requiredRole) {
      router.push('/unauthorized')
      return
    }
    
    if (requiredPermission && !user?.permissions[requiredPermission]) {
      router.push('/unauthorized')
      return
    }
  }, [isAuthenticated, user, requiredRole, requiredPermission])
  
  if (!isAuthenticated) {
    return <div>Loading...</div>
  }
  
  return <>{children}</>
}

// Usage
function AdminPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminDashboard />
    </ProtectedRoute>
  )
}
\`\`\`

## 🎯 Demo Examples & Usage Patterns

### 1. Complete Authentication Flow

\`\`\`tsx
// app/login/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signInUser } from '@/lib/signin'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const result = await signInUser(email, password)
      if (result.success) {
        router.push('/dashboard')
      } else {
        alert('Login failed: ' + result.message)
      }
    } catch (error) {
      alert('Login error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
\`\`\`

### 2. Dashboard with Role-Based Content

\`\`\`tsx
// app/dashboard/page.tsx
'use client'
import { useAppSelector } from '@/redux/hooks'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const { user, isAuthenticated } = useAppSelector(state => state.auth)
  
  if (!isAuthenticated) {
    return <div>Please log in</div>
  }
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.name}!
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Always visible */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <p>Role: {user?.role}</p>
          <p>Email: {user?.email}</p>
        </Card>
        
        {/* Manager and Admin only */}
        {(user?.role === 'manager' || user?.role === 'admin') && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Team Management</h2>
            <Button>View Team</Button>
          </Card>
        )}
        
        {/* Admin only */}
        {user?.role === 'admin' && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
            <Button variant="destructive">Manage Users</Button>
          </Card>
        )}
        
        {/* Permission-based */}
        {user?.permissions.canViewReports && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Reports</h2>
            <Button>View Reports</Button>
          </Card>
        )}
      </div>
    </div>
  )
}
\`\`\`

### 3. API Integration with RTK Query

\`\`\`typescript
// redux/api/usersApi.ts
import { baseApi } from './baseApi'
import type { AuthUser, UserPermissions } from '@/types'

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all users
    getUsers: builder.query<AuthUser[], { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 } = {}) => 
        `/users?page=${page}&limit=${limit}`,
      providesTags: ['User'],
    }),
    
    // Get single user
    getUser: builder.query<AuthUser, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    
    // Create user
    createUser: builder.mutation<AuthUser, Partial<AuthUser>>({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'],
    }),
    
    // Update user
    updateUser: builder.mutation<AuthUser, { id: string; data: Partial<AuthUser> }>({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),
    
    // Delete user
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    
    // Update user permissions
    updateUserPermissions: builder.mutation<UserPermissions, { 
      id: string; 
      permissions: UserPermissions 
    }>({
      query: ({ id, permissions }) => ({
        url: `/users/${id}/permissions`,
        method: 'PUT',
        body: permissions,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useUpdateUserPermissionsMutation,
} = usersApi
\`\`\`

\`\`\`tsx
// components/UsersList.tsx
import { useGetUsersQuery, useDeleteUserMutation } from '@/redux/api/usersApi'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function UsersList() {
  const { data: users, isLoading, error } = useGetUsersQuery()
  const [deleteUser] = useDeleteUserMutation()
  
  const handleDelete = async (userId: string) => {
    if (confirm('Are you sure?')) {
      try {
        await deleteUser(userId).unwrap()
        alert('User deleted successfully')
      } catch (error) {
        alert('Failed to delete user')
      }
    }
  }
  
  if (isLoading) return <div>Loading users...</div>
  if (error) return <div>Error loading users</div>
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Users Management</h2>
      {users?.map((user) => (
        <Card key={user.id} className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm">Role: {user.role}</p>
            </div>
            <div className="space-x-2">
              <Button variant="outline">Edit</Button>
              <Button 
                variant="destructive"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
\`\`\`

### 4. Form Handling with Validation

\`\`\`tsx
// components/CreateUserForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCreateUserMutation } from '@/redux/api/usersApi'
import { Button } from '@/components/ui/button'

const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['admin', 'manager', 'user', 'viewer']),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type UserFormData = z.infer<typeof userSchema>

export default function CreateUserForm() {
  const [createUser, { isLoading }] = useCreateUserMutation()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  })
  
  const onSubmit = async (data: UserFormData) => {
    try {
      await createUser(data).unwrap()
      alert('User created successfully')
      reset()
    } catch (error) {
      alert('Failed to create user')
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name')}
          placeholder="Full Name"
          className="w-full p-3 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <select {...register('role')} className="w-full p-3 border rounded">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="user">User</option>
          <option value="viewer">Viewer</option>
        </select>
        {errors.role && (
          <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
        )}
      </div>
      
      <div>
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Creating...' : 'Create User'}
      </Button>
    </form>
  )
}
\`\`\`

### 5. Theme Switching

\`\`\`tsx
// components/ThemeToggle.tsx
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
\`\`\`

## 🔧 Advanced Configuration

### Custom API Endpoints

\`\`\`typescript
// src/config/index.ts
export const API_ENDPOINTS = {
  // Authentication
  auth: {
    signin: '/auth/signin',
    signup: '/auth/signup',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
  
  // User Management
  users: {
    list: '/users',
    create: '/users',
    update: (id: string) => `/users/${id}`,
    delete: (id: string) => `/users/${id}`,
    profile: '/users/profile',
    permissions: (id: string) => `/users/${id}/permissions`,
  },
  
  // Business Logic (customize for your app)
  products: {
    list: '/products',
    create: '/products',
    update: (id: string) => `/products/${id}`,
    delete: (id: string) => `/products/${id}`,
  },
  
  // Reports & Analytics
  reports: {
    dashboard: '/reports/dashboard',
    export: '/reports/export',
    analytics: '/reports/analytics',
  },
}
\`\`\`

### Environment Variables Setup

\`\`\`bash
# .env.local (copy from .env.example)

# Required - API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

# Required - JWT Configuration  
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
NEXT_PUBLIC_JWT_EXPIRY=7d

# Optional - Google OAuth
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com

# Optional - Database (if using)
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# Optional - File Upload Configuration
NEXT_PUBLIC_MAX_FILE_SIZE=5242880
NEXT_PUBLIC_ALLOWED_FILE_TYPES=jpg,jpeg,png,pdf,doc,docx

# Optional - Email Configuration (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Optional - Redis (for caching)
REDIS_URL=redis://localhost:6379

# Optional - Monitoring
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
\`\`\`

## 🚀 Deployment Guide

### Vercel Deployment (Recommended)

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Set environment variables in Vercel dashboard
# or use CLI:
vercel env add NEXT_PUBLIC_API_URL
vercel env add JWT_SECRET
\`\`\`

### Docker Deployment

\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
\`\`\`

\`\`\`yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
      - JWT_SECRET=your-secret-key
    depends_on:
      - api
      
  api:
    # Your backend API service
    image: your-api-image
    ports:
      - "8000:8000"
\`\`\`

## 📊 Testing Examples

### Component Testing

\`\`\`tsx
// __tests__/components/LoginForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import LoginForm from '@/components/LoginForm'

const MockedLoginForm = () => (
  <Provider store={store}>
    <LoginForm />
  </Provider>
)

describe('LoginForm', () => {
  test('renders login form', () => {
    render(<MockedLoginForm />)
    
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })
  
  test('shows validation errors', async () => {
    render(<MockedLoginForm />)
    
    const submitButton = screen.getByRole('button', { name: /login/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument()
      expect(screen.getByText('Password is required')).toBeInTheDocument()
    })
  })
})
\`\`\`

### API Testing

\`\`\`tsx
// __tests__/api/auth.test.ts
import { signInUser } from '@/lib/signin'

// Mock fetch
global.fetch = jest.fn()

describe('Authentication API', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear()
  })
  
  test('successful login', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          user: { id: '1', name: 'John Doe', email: 'john@example.com' },
          tokens: { access: 'token123', refresh: 'refresh123' }
        }
      })
    })
    
    const result = await signInUser('john@example.com', 'password123')
    
    expect(result.success).toBe(true)
    expect(result.data.user.email).toBe('john@example.com')
  })
})
\`\`\`

## 🎯 Production Checklist

### Before Deployment

- [ ] Set all environment variables
- [ ] Update API endpoints to production URLs
- [ ] Configure authentication providers
- [ ] Set up error monitoring (Sentry)
- [ ] Configure analytics
- [ ] Test all authentication flows
- [ ] Test role-based permissions
- [ ] Verify protected routes work
- [ ] Test API integrations
- [ ] Run full test suite
- [ ] Build and test production bundle
- [ ] Set up CI/CD pipeline

### Security Checklist

- [ ] JWT secrets are secure and random
- [ ] API endpoints use HTTPS
- [ ] CORS is properly configured
- [ ] Input validation on all forms
- [ ] SQL injection protection
- [ ] XSS protection enabled
- [ ] Rate limiting implemented
- [ ] Sensitive data is encrypted
- [ ] Error messages don't leak information
- [ ] Dependencies are up to date

This comprehensive boilerplate provides everything you need to build a production-ready B2B application with modern authentication, role-based permissions, and a scalable architecture.

## 🔧 Redux Toolkit Setup & Demo Examples

### Redux Toolkit Configuration

This boilerplate uses Redux Toolkit with RTK Query for efficient state management and API calls.

#### Core Redux Setup

\`\`\`bash
# Install Redux Toolkit packages
npm install @reduxjs/toolkit react-redux redux-persist
npm install redux-persist/integration/react
\`\`\`

#### Complete API Call Examples

This boilerplate demonstrates all HTTP methods (GET, POST, PUT, PATCH, DELETE) with RTK Query:

##### GET Requests - Fetching Data
\`\`\`typescript
// GET with query parameters
const { data: banks, isLoading } = useGetAllBanksQuery([
  { name: 'page', value: '1' },
  { name: 'limit', value: '10' }
])

// GET single item
const { data: booking } = useGetFlightBookingByIdQuery('booking-123')
\`\`\`

##### POST Requests - Creating Data
\`\`\`typescript
// POST for authentication
const [signin, { isLoading }] = useSigninMutation()
const handleLogin = async () => {
  const result = await signin({ email, password }).unwrap()
}

// POST for creating records
const [createBank] = useCreateBankMutation()
const handleCreateBank = async (bankData) => {
  await createBank(bankData).unwrap()
}
\`\`\`

##### PUT Requests - Full Updates
\`\`\`typescript
// PUT for complete record updates
const [updateBank] = useUpdateBankMutation()
const handleUpdateBank = async (id, fullBankData) => {
  await updateBank({ id, bankData: fullBankData }).unwrap()
}
\`\`\`

##### PATCH Requests - Partial Updates
\`\`\`typescript
// PATCH for partial updates
const [patchBank] = usePatchBankMutation()
const handlePartialUpdate = async (id, changes) => {
  await patchBank({ id, updates: changes }).unwrap()
}
\`\`\`

##### DELETE Requests - Removing Data
\`\`\`typescript
// DELETE for removing records
const [deleteBank] = useDeleteBankMutation()
const handleDelete = async (id) => {
  await deleteBank(id).unwrap()
}
\`\`\`

### Complete Authentication Flow

#### Step 1: Login Process
\`\`\`tsx
// app/login/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { useSigninMutation } from '@/redux/features/auth/authApi'
import { setCredentials } from '@/redux/features/auth/authSlice'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [signin, { isLoading }] = useSigninMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await signin({ email, password }).unwrap()
      
      // Store user data and token in Redux
      dispatch(setCredentials({
        user: result.data.user,
        token: result.data.accessToken,
        refreshToken: result.data.refreshToken
      }))
      
      // Redirect to dashboard
      router.push('/dashboard')
    } catch (err) {
      alert('Login failed: ' + err.data?.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}
\`\`\`

#### Step 2: Signup Process
\`\`\`tsx
// app/signup/page.tsx
'use client'
import { useState } from 'react'
import { useSignupMutation } from '@/redux/features/auth/authApi'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  })
  const [signup, { isLoading }] = useSignupMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password
      }).unwrap()
      
      alert('Account created successfully! Please sign in.')
      // Redirect to login
    } catch (err) {
      alert('Signup failed: ' + err.data?.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
        placeholder="Password"
        required
      />
      <input
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData(prev => ({...prev, confirmPassword: e.target.value}))}
        placeholder="Confirm Password"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  )
}
\`\`\`

#### Step 3: Protected Dashboard
\`\`\`tsx
// app/dashboard/page.tsx
'use client'
import { useEffect } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'
import { useGetAllBanksQuery } from '@/redux/api/bankApi'

export default function DashboardPage() {
  const { user, isAuthenticated } = useAppSelector(state => state.auth)
  const router = useRouter()
  
  // Example API calls demonstrating different HTTP methods
  const { data: banksData, isLoading: banksLoading } = useGetAllBanksQuery([])

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) return <div>Redirecting...</div>

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.name}!
      </h1>
      
      {/* Role-based content */}
      {user?.role === 'admin' && (
        <div className="bg-red-50 p-4 rounded mb-4">
          <h2 className="font-bold">Admin Panel</h2>
          <p>You have admin privileges</p>
        </div>
      )}
      
      {/* API data display */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Banks Data (GET Request)</h3>
        {banksLoading ? (
          <p>Loading banks...</p>
        ) : (
          <p>Total Banks: {banksData?.data?.length || 0}</p>
        )}
      </div>
    </div>
  )
}
\`\`\`

### Role-Based Permissions System

#### How to Use Permissions
\`\`\`tsx
// components/PermissionGuard.tsx
import { useAppSelector } from '@/redux/hooks'

interface PermissionGuardProps {
  children: React.ReactNode
  requiredPermission: string
  fallback?: React.ReactNode
}

export default function PermissionGuard({ 
  children, 
  requiredPermission, 
  fallback = <div>Access denied</div> 
}: PermissionGuardProps) {
  const { user } = useAppSelector(state => state.auth)
  
  if (!user?.permissions[requiredPermission]) {
    return <>{fallback}</>
  }
  
  return <>{children}</>
}

// Usage in components
function AdminSection() {
  return (
    <PermissionGuard requiredPermission="canManageUsers">
      <button>Delete User</button>
    </PermissionGuard>
  )
}
\`\`\`

### Complete CRUD Operations Example

\`\`\`tsx
// components/BankManagement.tsx
'use client'
import { useState } from 'react'
import {
  useGetAllBanksQuery,
  useCreateBankMutation,
  useUpdateBankMutation,
  usePatchBankMutation,
  useDeleteBankMutation
} from '@/redux/api/bankApi'

export default function BankManagement() {
  const [editingBank, setEditingBank] = useState(null)
  
  // GET - Fetch all banks
  const { data: banks, isLoading, refetch } = useGetAllBanksQuery([])
  
  // POST - Create new bank
  const [createBank, { isLoading: isCreating }] = useCreateBankMutation()
  
  // PUT - Update entire bank
  const [updateBank, { isLoading: isUpdating }] = useUpdateBankMutation()
  
  // PATCH - Partial update
  const [patchBank, { isLoading: isPatching }] = usePatchBankMutation()
  
  // DELETE - Remove bank
  const [deleteBank, { isLoading: isDeleting }] = useDeleteBankMutation()

  const handleCreate = async (bankData) => {
    try {
      await createBank(bankData).unwrap()
      alert('Bank created successfully!')
      refetch() // Refresh the list
    } catch (error) {
      alert('Failed to create bank: ' + error.message)
    }
  }

  const handleUpdate = async (id, bankData) => {
    try {
      await updateBank({ id, bankData }).unwrap()
      alert('Bank updated successfully!')
      setEditingBank(null)
    } catch (error) {
      alert('Failed to update bank: ' + error.message)
    }
  }

  const handlePartialUpdate = async (id, updates) => {
    try {
      await patchBank({ id, updates }).unwrap()
      alert('Bank updated successfully!')
    } catch (error) {
      alert('Failed to update bank: ' + error.message)
    }
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this bank?')) {
      try {
        await deleteBank(id).unwrap()
        alert('Bank deleted successfully!')
      } catch (error) {
        alert('Failed to delete bank: ' + error.message)
      }
    }
  }

  if (isLoading) return <div>Loading banks...</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bank Management</h1>
      
      {/* Create Form */}
      <div className="mb-6 p-4 border rounded">
        <h2 className="font-semibold mb-2">Add New Bank</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          handleCreate({
            name: formData.get('name'),
            code: formData.get('code'),
            country: formData.get('country'),
            isActive: true
          })
          e.target.reset()
        }}>
          <input name="name" placeholder="Bank Name" required className="mr-2 p-2 border" />
          <input name="code" placeholder="Bank Code" required className="mr-2 p-2 border" />
          <input name="country" placeholder="Country" required className="mr-2 p-2 border" />
          <button type="submit" disabled={isCreating} className="px-4 py-2 bg-blue-500 text-white rounded">
            {isCreating ? 'Creating...' : 'Create Bank'}
          </button>
        </form>
      </div>

      {/* Banks List */}
      <div className="space-y-4">
        {banks?.data?.map((bank) => (
          <div key={bank.id} className="p-4 border rounded">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{bank.name}</h3>
                <p>Code: {bank.code} | Country: {bank.country}</p>
                <p>Status: {bank.isActive ? 'Active' : 'Inactive'}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handlePartialUpdate(bank.id, { isActive: !bank.isActive })}
                  disabled={isPatching}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Toggle Status
                </button>
                <button
                  onClick={() => setEditingBank(bank)}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(bank.id)}
                  disabled={isDeleting}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingBank && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Bank</h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              handleUpdate(editingBank.id, {
                ...editingBank,
                name: formData.get('name'),
                code: formData.get('code'),
                country: formData.get('country')
              })
            }}>
              <input 
                name="name" 
                defaultValue={editingBank.name} 
                placeholder="Bank Name" 
                required 
                className="w-full mb-2 p-2 border" 
              />
              <input 
                name="code" 
                defaultValue={editingBank.code} 
                placeholder="Bank Code" 
                required 
                className="w-full mb-2 p-2 border" 
              />
              <input 
                name="country" 
                defaultValue={editingBank.country} 
                placeholder="Country" 
                required 
                className="w-full mb-4 p-2 border" 
              />
              <div className="flex space-x-2">
                <button 
                  type="submit" 
                  disabled={isUpdating}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {isUpdating ? 'Updating...' : 'Update'}
                </button>
                <button 
                  type="button" 
                  onClick={() => setEditingBank(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
\`\`\`

### Running the Project

\`\`\`bash
# Install all dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API URL and other settings

# Start development server
npm run dev

# Visit http://localhost:3000
# Try logging in with test credentials
# Navigate to /dashboard to see protected content
# Test all CRUD operations in the bank management section
\`\`\`

This complete boilerplate provides working authentication, role-based permissions, all HTTP methods (GET, POST, PUT, PATCH, DELETE), and a production-ready foundation for B2B applications.

## 🌙 Dark Mode Setup & Implementation

### Step 1: Install Dark Mode Dependencies
\`\`\`bash
# Theme management
npm install next-themes

# Icons for theme toggle
npm install lucide-react
\`\`\`

### Step 2: Theme Provider Setup

The theme provider is already configured in `app/layout.tsx`:

\`\`\`tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
\`\`\`

### Step 3: Using the Theme Toggle

\`\`\`tsx
// components/ui/theme-toggle.tsx - Already included
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme } = useTheme()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
\`\`\`

### Step 4: Dark Mode in Components

\`\`\`tsx
// Example: Using dark mode classes
function MyComponent() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-gray-900 dark:text-gray-100">Title</h1>
      <p className="text-gray-600 dark:text-gray-400">Description</p>
    </div>
  )
}
\`\`\`

### Step 5: Programmatic Theme Control

\`\`\`tsx
// hooks/useThemeControl.ts
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeControl() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return { theme: 'light', setTheme, toggleTheme: () => {} }

  const currentTheme = theme === 'system' ? systemTheme : theme

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme: currentTheme,
    setTheme,
    toggleTheme,
    isDark: currentTheme === 'dark'
  }
}

// Usage in component
function Header() {
  const { isDark, toggleTheme } = useThemeControl()
  
  return (
    <button onClick={toggleTheme}>
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
\`\`\`

## 🔍 Zod Validation Setup & Examples

### Step 1: Install Zod Dependencies
\`\`\`bash
# Form validation
npm install zod @hookform/resolvers react-hook-form
\`\`\`

### Step 2: Create Validation Schemas

\`\`\`typescript
// lib/validations/auth.ts - Already included
import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
})

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters"),
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export type LoginInput = z.infer<typeof loginSchema>
export type SignupInput = z.infer<typeof signupSchema>
\`\`\`

### Step 3: Advanced Validation Schemas

\`\`\`typescript
// lib/validations/business.ts
import { z } from "zod"

// Product validation
export const productSchema = z.object({
  name: z.string().min(1, "Product name is required").max(100, "Name too long"),
  price: z.number().min(0.01, "Price must be greater than 0"),
  category: z.enum(["electronics", "clothing", "books", "home"], {
    errorMap: () => ({ message: "Please select a valid category" })
  }),
  description: z.string().optional(),
  inStock: z.boolean().default(true),
  tags: z.array(z.string()).max(5, "Maximum 5 tags allowed"),
  metadata: z.record(z.string()).optional(),
})

// User profile validation
export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s-()]+$/, "Invalid phone number format")
    .optional()
    .or(z.literal("")),
  birthDate: z
    .string()
    .refine((date) => {
      const parsed = new Date(date)
      const now = new Date()
      const age = now.getFullYear() - parsed.getFullYear()
      return age >= 13 && age <= 120
    }, "Age must be between 13 and 120 years"),
  website: z
    .string()
    .url("Invalid URL format")
    .optional()
    .or(z.literal("")),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
})

// File upload validation
export const fileUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Only JPEG, PNG, and WebP files are allowed"
    ),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
})

export type ProductInput = z.infer<typeof productSchema>
export type ProfileInput = z.infer<typeof profileSchema>
export type FileUploadInput = z.infer<typeof fileUploadSchema>
\`\`\`

### Step 4: Form Implementation with Zod

\`\`\`tsx
// components/forms/ProductForm.tsx
"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { productSchema, type ProductInput } from "@/lib/validations/business"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProductInput>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      inStock: true,
      tags: [],
    },
  })

  const onSubmit = async (data: ProductInput) => {
    try {
      console.log("Valid product data:", data)
      // API call here
      reset()
    } catch (error) {
      console.error("Submission error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          {...register("name")}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          step="0.01"
          {...register("price", { valueAsNumber: true })}
          className={errors.price ? "border-red-500" : ""}
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          {...register("category")}
          className={`w-full p-2 border rounded ${errors.category ? "border-red-500" : ""}`}
        >
          <option value="">Select category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="home">Home</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Product"}
      </Button>
    </form>
  )
}
\`\`\`

### Step 5: API Validation with Zod

\`\`\`typescript
// lib/api-validation.ts
import { z } from "zod"

// Server-side validation
export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): T {
  try {
    return schema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`Validation failed: ${error.errors.map(e => e.message).join(", ")}`)
    }
    throw error
  }
}

// Usage in API routes
// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server"
import { productSchema } from "@/lib/validations/business"
import { validateRequest } from "@/lib/api-validation"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = validateRequest(productSchema, body)
    
    // Process validated data
    console.log("Valid product:", validatedData)
    
    return NextResponse.json({ success: true, data: validatedData })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    )
  }
}
\`\`\`

### Step 6: Dynamic Validation

\`\`\`tsx
// components/forms/DynamicForm.tsx
"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export function DynamicForm() {
  const [userType, setUserType] = useState<"basic" | "premium">("basic")

  // Dynamic schema based on user type
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    ...(userType === "premium" && {
      company: z.string().min(1, "Company is required for premium users"),
      phone: z.string().min(1, "Phone is required for premium users"),
    }),
  })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>User Type:</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value as "basic" | "premium")}
          className="ml-2 p-1 border rounded"
        >
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      <input {...register("name")} placeholder="Name" className="w-full p-2 border rounded" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input {...register("email")} placeholder="Email" className="w-full p-2 border rounded" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      {userType === "premium" && (
        <>
          <input {...register("company")} placeholder="Company" className="w-full p-2 border rounded" />
          {errors.company && <p className="text-red-500">{errors.company.message}</p>}

          <input {...register("phone")} placeholder="Phone" className="w-full p-2 border rounded" />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </>
      )}

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  )
}
\`\`\`

### Step 7: Custom Validation Hooks

\`\`\`typescript
// hooks/useValidation.ts
import { useState } from "react"
import { z } from "zod"

export function useValidation<T>(schema: z.ZodSchema<T>) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (data: unknown): data is T => {
    try {
      schema.parse(data)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            errorMap[err.path[0].toString()] = err.message
          }
        })
        setErrors(errorMap)
      }
      return false
    }
  }

  const getError = (field: string) => errors[field]
  const hasError = (field: string) => Boolean(errors[field])
  const clearErrors = () => setErrors({})

  return {
    validate,
    errors,
    getError,
    hasError,
    clearErrors,
  }
}

// Usage
function MyForm() {
  const { validate, getError, hasError } = useValidation(loginSchema)
  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate(formData)) {
      console.log("Form is valid:", formData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        className={hasError("email") ? "border-red-500" : ""}
      />
      {hasError("email") && <p className="text-red-500">{getError("email")}</p>}
      
      <button type="submit">Submit</button>
    </form>
  )
}
