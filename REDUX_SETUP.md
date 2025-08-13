# Redux Setup Guide

## Overview
This boilerplate includes a complete Redux setup with RTK Query, Redux Persist, and authentication management.

## Key Features
- **Redux Toolkit** for state management
- **RTK Query** for API calls and caching
- **Redux Persist** for state persistence
- **Authentication slice** with login/logout actions
- **Session management** with React Context
- **Type-safe hooks** for Redux usage

## File Structure
\`\`\`
src/
├── redux/
│   ├── store.ts                 # Main store configuration
│   ├── hooks.ts                 # Typed Redux hooks
│   ├── api/
│   │   ├── baseApi.ts          # Base RTK Query API
│   │   ├── adminApi.ts         # Admin-specific API
│   │   └── flightApi.ts        # Flight-specific API
│   └── features/
│       └── auth/
│           ├── authSlice.ts    # Authentication state
│           └── authApi.ts      # Authentication API endpoints
├── providers/
│   ├── ReduxProvider.tsx       # Redux Provider wrapper
│   └── PersistGateWrapper.tsx  # Redux Persist wrapper
├── hooks/
│   └── useSession.tsx          # Session management hook
└── types/
    ├── index.ts                # Common types
    └── user.ts                 # User-related types
\`\`\`

## Usage Examples

### Using Redux State
\`\`\`tsx
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { login, logout } from '@/redux/features/auth/authSlice';

function MyComponent() {
  const { isAuthenticated, user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  return (
    <div>
      {isAuthenticated ? `Welcome ${user?.name}` : 'Please login'}
    </div>
  );
}
\`\`\`

### Using RTK Query
\`\`\`tsx
import { useGetUserProfileQuery, useSendLoginRequestMutation } from '@/redux/features/auth/authApi';

function ProfileComponent() {
  const { data: user, isLoading, error } = useGetUserProfileQuery();
  const [sendLoginRequest, { isLoading: isLoggingIn }] = useSendLoginRequestMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return <div>Welcome {user?.name}</div>;
}
\`\`\`

### Using Session Hook
\`\`\`tsx
import { useSession } from '@/hooks/useSession';

function AuthComponent() {
  const { session, setSession, isLoading } = useSession();

  if (isLoading) return <div>Loading session...</div>;

  return (
    <div>
      {session?.isAuthenticated ? 'Logged in' : 'Not logged in'}
    </div>
  );
}
\`\`\`

## Environment Variables
Add these to your `.env.local`:
\`\`\`
NEXT_PUBLIC_API_URL=http://localhost:3001
\`\`\`

## API Configuration
The base API is configured to automatically include authentication headers from localStorage. Update the `config/index.ts` file to match your API endpoints.
