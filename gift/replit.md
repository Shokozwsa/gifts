# replit.md

## Overview

This is a full-stack e-commerce application for personalized gifts built with React, Express, and PostgreSQL. The application allows users to browse customizable products, add them to cart, and create personalized gifts with various customization options.

## System Architecture

The application follows a monorepo structure with clear separation between client and server components:

- **Frontend**: React with TypeScript, styled using Tailwind CSS and shadcn/ui components
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for database operations
- **Build System**: Vite for frontend bundling and development
- **Development**: Hot module replacement in development, production build optimization

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: React Context API with useReducer for global state
- **Data Fetching**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Connection**: Neon serverless PostgreSQL via `server/db.ts`
- **Storage Layer**: DatabaseStorage class implements IStorage interface
- **Schema**: Defined in `shared/schema.ts` with Zod validation schemas
- **Current Tables**: Users table with username/password authentication
- **Database Push**: Schema changes applied via `npm run db:push`

## Data Flow

1. **Client Requests**: React components make API calls to Express backend
2. **Server Processing**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Flow**: Data flows back through Express to React components
5. **State Management**: Global state managed via React Context, local component state for UI interactions

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Connection**: Environment variable `DATABASE_URL` required

### UI Framework
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend build tool and dev server
- **ESBuild**: Backend bundling for production
- **TypeScript**: Type safety across the stack

## Deployment Strategy

### Development
- Frontend: Vite dev server with HMR
- Backend: tsx for TypeScript execution
- Database: Drizzle kit for schema management

### Production Build
- Frontend: Vite build to `dist/public`, then copied to `server/public` for serving
- Backend: ESBuild bundle to `dist/index.js`
- Database: Drizzle migrations applied via `db:push` script
- Static File Serving: Express serves frontend files from `server/public/` in production

### Deployment Process
1. Run `./deploy.sh` or manually execute build steps
2. Build creates `dist/index.js` (server) and `dist/public/` (frontend)
3. Frontend files copied to `server/public/` for static serving
4. Production server runs from `dist/index.js` serving both API and static files

### Environment Configuration
- Development: NODE_ENV=development (Vite dev server + Express API)
- Production: NODE_ENV=production (Single Express server for everything)
- Database URL required in both environments
- Port: 5000 (internal) mapped to 80 (external) in Replit deployment

## Changelog

```
Changelog:
- July 2, 2025. Made application hostable/deployable from backend
  - Created deployment script (deploy.sh) for production builds
  - Added deployment documentation (DEPLOYMENT.md)  
  - Configured proper static file serving for production
  - Updated architecture documentation for deployment process
- June 30, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```