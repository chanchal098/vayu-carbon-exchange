# VAYU DAO Carbon MRV Platform - Development Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn or bun
- Git

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd vayu-carbon-exchange

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env.local
# Edit .env.local with your actual API keys and configuration

# Start development server
npm run dev
```

## 📁 Project Structure

```
vayu-carbon-exchange/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── CarbonMap.tsx   # Interactive carbon map
│   │   ├── Navigation.tsx  # Main navigation
│   │   └── ...
│   ├── pages/              # Route components
│   │   ├── Index.tsx       # Landing page
│   │   ├── Login.tsx       # Authentication
│   │   ├── *Dashboard.tsx  # Role-based dashboards
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── assets/             # Static assets
│   └── main.tsx           # Application entry point
├── public/                 # Public assets
├── docs/                   # Documentation
└── dist/                   # Build output
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (port 8080)
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run build:prod` - Build for production (explicit)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build directory
- `npm run analyze` - Analyze bundle size

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite with SWC
- **UI Framework**: Tailwind CSS + shadcn/ui
- **State Management**: TanStack Query
- **Routing**: React Router v6
- **Charts**: Recharts
- **3D Graphics**: Three.js

### Key Features
- **Multi-role Dashboards**: Admin, Company, NGO, Verifier
- **Blockchain Integration**: Carbon credit tokenization
- **Real-time Data**: Live market data and analytics
- **Interactive Maps**: Carbon project visualization
- **MRV System**: Monitoring, Reporting, Verification

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and configure:

- **API Configuration**: Base URL and version
- **Blockchain**: Network and contract addresses
- **Third-party Services**: Google Maps, weather APIs
- **Feature Flags**: Enable/disable features

### Build Optimization
The project uses manual chunk splitting for optimal loading:
- `vendor`: React core libraries
- `ui`: Radix UI components
- `charts`: Recharts library
- `router`: React Router
- `query`: TanStack Query
- `three`: Three.js library

## 🎯 User Roles & Routes

### Public Routes
- `/` - Landing page
- `/login` - User authentication
- `/register` - User registration
- `/public` - Public portal

### Admin Routes (`/admin/*`)
- Dashboard, project management, verification, market analytics

### Company/Buyer Routes (`/company/*`)
- Marketplace, portfolio, trading dashboard

### NGO/Developer Routes (`/ngo/*`)
- Project creation, data upload, credit management

### Verifier Routes (`/verifier/*`)
- Verification dashboard and tools

## 🧪 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use shadcn/ui components for consistency
- Implement responsive design with Tailwind CSS

### Component Structure
```tsx
// Component template
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface MyComponentProps extends ComponentProps<"div"> {
  // Custom props
}

export const MyComponent = ({ className, ...props }: MyComponentProps) => {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {/* Component content */}
    </div>
  );
};
```

### State Management
- Use TanStack Query for server state
- Use React hooks for local state
- Implement proper error handling

## 🚀 Deployment

### Production Build
```bash
npm run build:prod
```

### GitHub Pages Deployment
The project is configured for GitHub Pages deployment with:
- Proper base path configuration
- Optimized asset handling
- CSP headers for security

## 🐛 Troubleshooting

### Common Issues
1. **Build Warnings**: Large bundle size warnings are normal due to comprehensive feature set
2. **TypeScript Errors**: Run `npm run type-check` to identify issues
3. **Environment Variables**: Ensure `.env.local` is properly configured

### Performance Optimization
- Use dynamic imports for code splitting
- Optimize images and assets
- Implement proper caching strategies
- Monitor bundle size with `npm run analyze`

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TanStack Query](https://tanstack.com/query)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is part of the Smart India Hackathon 2024 submission for VAYU DAO.
