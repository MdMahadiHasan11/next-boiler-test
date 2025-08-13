# Naria B2B - Next.js Project Setup Documentation

## Project Overview

**Naria B2B** is a comprehensive Next.js 14 application built with TypeScript, featuring a modern tech stack optimized for B2B applications. The project uses the App Router architecture and includes advanced UI components, state management, and testing capabilities.

## Tech Stack

### Core Framework
- **Next.js 14.2.25** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type safety and developer experience

### UI & Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Headless UI components for accessibility
- **Framer Motion 12.6.3** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets
- **Next Themes** - Dark/light mode support

### State Management & Data
- **Redux Toolkit 2.6.1** - State management
- **React Redux 9.2.0** - React bindings for Redux
- **Redux Persist 6.0.0** - State persistence
- **React Hook Form 7.54.2** - Form handling
- **Zod 3.24.2** - Schema validation
- **TanStack Table 8.21.3** - Data tables

### Utilities & Libraries
- **Axios 1.9.0** - HTTP client
- **Date-fns 3.6.0** - Date manipulation
- **Day.js 1.11.13** - Date library
- **JWT Decode 4.0.0** - JWT token handling
- **UUID 11.1.0** - Unique identifier generation
- **Sharp 0.34.1** - Image processing

### Development & Testing
- **Jest 29.7.0** - Testing framework
- **Testing Library** - React testing utilities
- **ESLint** - Code linting
- **PNPM 10.9.0** - Package manager

## Project Structure

\`\`\`
naria-b2b/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   └── pages/              # Additional pages (if needed)
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── next.config.js         # Next.js configuration
\`\`\`

## Configuration Files

### Package.json Scripts
\`\`\`json
{
  "dev": "next dev",                    # Development server
  "build": "next build",                # Production build
  "start": "next start -p 3002",       # Production server on port 3002
  "lint": "next lint",                  # Code linting
  "test": "jest",                       # Run tests
  "test:watch": "jest --watch",         # Watch mode testing
  "test:coverage": "jest --coverage"    # Test coverage report
}
\`\`\`

### TypeScript Configuration
- **Strict mode enabled** for better type safety
- **Path mapping** configured (`@/*` → `./src/*`)
- **Next.js plugin** integrated
- **Modern ES modules** support

### Tailwind CSS Configuration
- **Dark mode** support with class strategy
- **Custom color system** using CSS variables
- **Extended animations** (accordion, slide-up)
- **Container** centered with responsive breakpoints
- **Custom border radius** system

## Key Features

### UI Components (Radix UI)
- Accordion, Alert Dialog, Avatar
- Checkbox, Dialog, Dropdown Menu
- Label, Popover, Progress
- Radio Group, Scroll Area, Select
- Separator, Slider, Tabs, Tooltip

### Advanced Functionality
- **Form Management** - React Hook Form with Zod validation
- **Data Tables** - TanStack Table for complex data display
- **File Handling** - Image resizing and Excel export (XLSX)
- **PDF Generation** - jsPDF with auto-table support
- **Phone Number Input** - International phone number handling
- **Date Picking** - React Day Picker integration
- **Carousel** - Embla Carousel with autoplay
- **Toast Notifications** - Sonner for user feedback

### Developer Experience
- **Hot Reload** - Fast development with Next.js
- **Type Safety** - Full TypeScript coverage
- **Testing Suite** - Jest with React Testing Library
- **Code Quality** - ESLint configuration
- **Modern Tooling** - PNPM for efficient package management

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- PNPM 10.9.0+

### Installation Steps

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd naria-b2b
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   pnpm install
   \`\`\`

3. **Environment setup**
   \`\`\`bash
   cp .env.example .env.local
   # Configure your environment variables
   \`\`\`

4. **Run development server**
   \`\`\`bash
   pnpm dev
   \`\`\`

5. **Access the application**
   - Development: `http://localhost:3000`
   - Production: `http://localhost:3002`

## Development Workflow

### Running Tests
\`\`\`bash
# Run all tests
pnpm test

# Watch mode for development
pnpm test:watch

# Generate coverage report
pnpm test:coverage
\`\`\`

### Building for Production
\`\`\`bash
# Create production build
pnpm build

# Start production server
pnpm start
\`\`\`

### Code Quality
\`\`\`bash
# Run linting
pnpm lint

# Fix linting issues
pnpm lint --fix
\`\`\`

## Architecture Decisions

### Why This Stack?

1. **Next.js 14** - Latest features, App Router, and excellent performance
2. **TypeScript** - Type safety reduces bugs and improves developer experience
3. **Tailwind CSS** - Rapid UI development with consistent design system
4. **Radix UI** - Accessible, unstyled components for custom designs
5. **Redux Toolkit** - Predictable state management for complex applications
6. **React Hook Form** - Performant forms with minimal re-renders
7. **PNPM** - Faster, more efficient package management

### Design System
- **CSS Variables** for theming and dark mode support
- **Consistent spacing** and typography scales
- **Accessible color contrasts** following WCAG guidelines
- **Responsive design** with mobile-first approach

## Best Practices

### Code Organization
- **Component co-location** - Keep related files together
- **Custom hooks** - Extract reusable logic
- **Type definitions** - Centralized TypeScript interfaces
- **Utility functions** - Shared helper functions

### Performance
- **Image optimization** with Next.js Image component
- **Code splitting** with dynamic imports
- **Bundle analysis** for optimization opportunities
- **Caching strategies** for API calls

### Testing Strategy
- **Unit tests** for utility functions
- **Component tests** for UI components
- **Integration tests** for user workflows
- **Coverage targets** to maintain code quality

## Deployment

### Production Checklist
- [ ] Environment variables configured
- [ ] Database connections tested
- [ ] Build process successful
- [ ] Performance metrics acceptable
- [ ] Security headers configured
- [ ] Error monitoring setup

### Recommended Platforms
- **Vercel** - Optimal for Next.js applications
- **Netlify** - Alternative with good Next.js support
- **AWS/GCP/Azure** - For enterprise deployments

## Troubleshooting

### Common Issues
1. **Port conflicts** - Change port in package.json start script
2. **Module resolution** - Check TypeScript paths configuration
3. **Build failures** - Verify all dependencies are installed
4. **Type errors** - Update TypeScript and @types packages

### Performance Optimization
- Use Next.js Image component for images
- Implement proper caching strategies
- Optimize bundle size with webpack-bundle-analyzer
- Use React.memo for expensive components

## Contributing

### Development Setup
1. Fork the repository
2. Create feature branch
3. Follow coding standards
4. Write tests for new features
5. Submit pull request

### Code Standards
- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Include tests for new functionality

---

*This documentation serves as a comprehensive guide for setting up and maintaining the Naria B2B Next.js application. Keep it updated as the project evolves.*
