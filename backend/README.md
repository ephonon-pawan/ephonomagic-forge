# Ephonon Technology CMS Backend

A clean and modular Node.js + Express.js + MongoDB + TypeScript backend for managing the Ephonon Technology website and admin CMS dashboard.

## Stack

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- JWT authentication
- Multer + Cloudinary
- Express Validator
- Helmet, CORS, rate limiting, mongo sanitize

## Project Structure

```text
backend/
├── src/
│   ├── config/
│   ├── middleware/
│   ├── modules/
│   │   ├── auth/
│   │   ├── blogs/
│   │   ├── contacts/
│   │   ├── homepage/
│   │   ├── media/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── team/
│   │   └── testimonials/
│   ├── routes/
│   ├── scripts/
│   ├── types/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── .env.example
├── package.json
└── tsconfig.json
```

## Setup

1. Install dependencies:

```bash
cd backend
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Update `.env` with MongoDB, JWT, and Cloudinary credentials.

4. Seed default admin:

```bash
npm run seed:admin
```

5. Start development server:

```bash
npm run dev
```

## Main API Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `GET /api/auth/profile`

### Projects

- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`

### Blogs

- `GET /api/blogs`
- `GET /api/blogs/:slug`
- `POST /api/blogs`
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`

### Other CMS Modules

- `GET/POST/PUT/DELETE /api/services`
- `GET/PUT /api/homepage`
- `GET/POST/PUT/DELETE /api/testimonials`
- `GET/POST/PUT/DELETE /api/team`
- `POST /api/contact`
- `GET /api/contact`
- `POST /api/media/upload`

## Example Request

### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@ephonon.com",
  "password": "ChangeThisPassword123!"
}
```

### Register Another CMS User

```http
POST /api/auth/register
Authorization: Bearer <admin_access_token>
Content-Type: application/json

{
  "name": "Content Manager",
  "email": "editor@ephonon.com",
  "password": "StrongPassword123!",
  "role": "editor"
}
```

### Create Project

```http
POST /api/projects
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "title": "Enterprise CMS Platform",
  "description": "A modular CMS solution for business sites.",
  "thumbnail": "https://example.com/project.jpg",
  "technologies": ["Node.js", "TypeScript", "MongoDB"],
  "category": "Web Application",
  "githubUrl": "https://github.com/example/repo",
  "liveUrl": "https://example.com",
  "featured": true
}
```

## Response Format

```json
{
  "success": true,
  "message": "Project created successfully",
  "data": {}
}
```

## Notes

- Route flow follows `Route -> Controller -> Service -> Model`.
- Use the seed script to create the first admin account, then use the protected register endpoint to add more CMS users.
- Refresh token is stored in a secure HTTP-only cookie.
- Protected write routes require an `Authorization: Bearer <access_token>` header.
- Media uploads expect a multipart form field named `image`.

## Extra Docs

- Hindi API documentation: `backend/docs/API-DOCUMENTATION-HI.md`
- Printable HTML version: `backend/docs/API-DOCUMENTATION-HI.html`
