#!/bin/bash

# B2B Next.js Boilerplate Setup Script
echo "🚀 Setting up B2B Next.js Boilerplate..."

# Create project structure
echo "📁 Creating project structure..."
mkdir -p src/{components,lib,hooks,store,types,utils}
mkdir -p src/components/{ui,forms,layout,charts,tables}
mkdir -p src/app/{auth,dashboard,settings}

# Install dependencies
echo "📦 Installing dependencies..."
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-tabs @radix-ui/react-tooltip

npm install class-variance-authority clsx tailwind-merge tailwindcss-animate lucide-react react-icons next-themes

npm install react-hook-form @hookform/resolvers zod

npm install @reduxjs/toolkit react-redux redux-persist

npm install axios @tanstack/react-table

npm install date-fns dayjs react-day-picker

npm install framer-motion cmdk sonner react-phone-number-input libphonenumber-js country-data-list react-circle-flags embla-carousel-react embla-carousel-autoplay

npm install html2canvas jspdf jspdf-autotable xlsx react-image-file-resizer sharp

npm install jwt-decode gapi-script uuid

# Install dev dependencies
echo "🛠️ Installing dev dependencies..."
npm install -D @types/node @types/react @types/react-dom @types/jest @types/react-phone-number-input @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom babel-jest identity-obj-proxy ts-node

echo "✅ Setup complete! Run 'npm run dev' to start development."
