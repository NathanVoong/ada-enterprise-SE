# Campus Event Application

## Table of Contents
1. [Introduction](#introduction)
    - [Solution Overview](#solution-overview)
    - [Project Aim & Objectives](#project-aim--objectives)
2. [Enterprise Considerations](#enterprise-considerations)
    - [Performance](#performance)
    - [Scalability](#scalability)
    - [Robustness](#robustness)
    - [Security](#security)
    - [Deployment](#deployment)
3. [Installation & Usage Instructions](#installation--usage-instructions)
    - [Prerequisites](#prerequisites)
    - [Setup Steps](#setup-steps)
    - [Running the Application](#running-the-application)
4. [Feature Overview](#feature-overview)
5. [Known Issues & Future Enhancements](#known-issues--future-enhancements)

---

## Introduction

### Solution Overview
The **Campus Event Application** is a full-stack web application designed to facilitate event management for users within a campus environment. The application allows users to create, view, and manage events, as well as register for events hosted by others. It features secure user authentication, real-time data updates, and an intuitive user interface.

### Project Aim & Objectives
- **Main Goal**: To provide a platform for organizing and managing campus events efficiently.

#### Key Objectives:
1. Implement secure user authentication and authorization using JWT tokens.
2. Enable real-time updates for event creation and registration.
3. Provide a responsive and user-friendly interface for seamless navigation.
4. Ensure robust error handling and data validation across all modules.
5. Optimize performance for scalability and reliability.

---

## Enterprise Considerations

### Performance
- **Efficient API Calls**: Minimized redundant API calls by caching frequently accessed data.
- **Lazy Loading**: Implemented lazy loading for frontend components to reduce initial load times.
- **Database Indexing**: Used database indexing to optimize query performance.

### Scalability
- **Microservices Architecture**: Backend services are modular and can be scaled independently.
- **Load Balancing**: Configured load balancing to distribute traffic evenly across servers.
- **Cloud Hosting**: Deployed on scalable cloud platforms (e.g., AWS or Render).

### Robustness
- **Error Handling**: Comprehensive error handling ensures graceful degradation in case of failures.
- **Retry Mechanisms**: Implemented retry logic for transient errors in API requests.
- **Logging**: Centralized logging with tools like Winston for monitoring and debugging.

### Security
- **JWT Authentication**: Secure token-based authentication for user sessions.
- **Password Hashing**: Passwords are hashed using bcrypt before being stored in the database.
- **CSRF Protection**: Enabled CSRF protection on sensitive endpoints to prevent cross-site request forgery.
- **HTTPS**: All communication between the client and server is encrypted using HTTPS.

### Deployment
- **Frontend**: Hosted on Vercel for fast static site delivery.
- **Backend**: Deployed on Render or AWS Elastic Beanstalk for scalable API hosting.
- **Database**: PostgreSQL database hosted on Render or AWS RDS.

---

## Installation & Usage Instructions

### Prerequisites
- **Node.js**: v20.x or higher.
- **npm**: v9.x or higher.
- **PostgreSQL**: Installed and configured locally or hosted on a cloud provider.
- **Environment Variables**: `.env` files for both frontend and backend configurations.

### Setup Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/campus-event-application.git

2. **Install Dependencies**:
- Frontend
   ```bash
   cd campus-event-frontend
   npm install
- Backend
   ```bash
   cd campus-event-backend
   npm install

### Configure Environment Variables :
Create a .env file in both frontend and backend directories.
Add the following variables:

Frontend :
NEXT_PUBLIC_API_URL=http://localhost:5000

Backend :
DATABASE_URL=postgresql://username:password@host:port/database
PORT=5000

### Run Migrations :
Navigate to the backend directory and run migrations:
npx sequelize-cli db:migrate
Seed the Database (Optional) :
If you want to populate the database with sample data, run:
npx sequelize-cli db:seed:all

### Running the Application
Start the Backend :
cd campus-event-backend
npm start
The backend will run on http://localhost:5000.
Start the Frontend :

cd campus-event-frontend
npm run dev
The frontend will run on http://localhost:3000.

Access the Application :
Open your browser and navigate to http://localhost:3000 to access the application.

### Feature Overview
1. User Authentication
   Purpose : Securely authenticate users and manage sessions.
   Location :
   Frontend: src/app/login/page.tsx, src/app/register/page.tsx
   Backend: routes/userRoutes.js
   Endpoints :
   POST /users: Register a new user.
   GET /users: Fetch user details.

2. Event Management
   Purpose : Allow users to create, view, and manage events.
   Location :
   Frontend: src/app/events/page.tsx, src/app/create-event/page.tsx
   Backend: routes/eventRoutes.js
   Endpoints :
   GET /events: Fetch all events.
   POST /events: Create a new event.

3. Profile Management
   Purpose : Display and update user profile information.
   Location :
   Frontend: src/app/profile/page.tsx
   Backend: routes/userRoutes.js
   Endpoints :
   GET /users/:uuid: Fetch user profile details.

4. Navigation Bar
   Purpose : Provide navigation links and user-specific options.
   Location :
   Frontend: src/components/navbar/Navbar.tsx


### Known Issues
Testing Failures : Some test cases fail due to asynchronous rendering issues.
   
Error Handling : Certain edge cases in error handling need improvement.
   
### Future Enhancements
Real-Time Notifications : Integrate WebSocket for real-time updates.
   
Admin Dashboard : Add an admin panel for managing users and events.
  
Mobile App : Develop a mobile version of the application using React Native.
