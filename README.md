# Express.js Modular Backend Template

A production-ready, scalable Express.js backend template using clean architecture principles and modular design.

## Features

- **Modular Architecture**: Feature-based folder structure (User, Role, Auth).
- **MongoDB & Mongoose**: Data modeling and validation.
- **Authentication & Authorization**: JWT-based auth with Role policies.
- **Validation**: Request validation using Joi.
- **Swagger Documentation**: API documentation at `/api/docs`.
- **Security**: Helmet, CORS, and best practices.
- **Docker Support**: Ready for containerization.

## Prerequisites

- Node.js (v18+)
- MongoDB (running locally or via Docker)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repo-url>
    cd express-modular-template
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure Environment:
    Copy `.env.example` to `.env` and update values if needed.
    ```bash
    cp .env.example .env
    ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## Database Seeding

Initialize the database with default Roles and a Superadmin user.

```bash
npm run seed
```

**Default Credentials:**
- **Email:** `superadmin@agam.com`
- **Password:** `Admin@123`
- **Role:** `SUPERADMIN`

## API Documentation

Start the server and visit:
http://localhost:5000/api/docs

## Docker

### Build and Run
```bash
docker-compose up -d --build
```
This will start the API service and a MongoDB instance.

## Project Structure

```
src/
 ├── config/            # Database, Swagger, etc.
 ├── modules/           # Feature modules (User, Role, Auth)
 ├── middleware/        # Global middleware (Auth, Error, Validation)
 ├── utils/             # Shared utilities (Response, Constants)
 ├── seed/              # Database seed scripts
 ├── app.js             # App setup
 └── server.js          # Entry point
```
