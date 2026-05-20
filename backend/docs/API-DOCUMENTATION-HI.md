# Ephonon Technology CMS Backend API Documentation

Yeh document Hindi me likha gaya hai taaki aap frontend ya admin dashboard me APIs ko aasani se integrate kar sako.

## 1. Base URL

Local development ke liye base URL:

```bash
http://localhost:5000/api
```

Health check endpoint:

```bash
GET /api/health
```

## 2. Common Response Format

Successful response:

```json
{
  "success": true,
  "message": "Project created successfully",
  "data": {}
}
```

Error response:

```json
{
  "success": false,
  "message": "Validation failed"
}
```

## 3. Authentication Kaise Kaam Karta Hai

- Login ke baad `accessToken` response me milta hai.
- `refreshToken` secure HTTP-only cookie me set hota hai.
- Protected APIs me `Authorization: Bearer <access_token>` header bhejna hota hai.
- Frontend se cookie bhejne ke liye `credentials: "include"` ya Axios me `withCredentials: true` use karo.

Example:

```http
Authorization: Bearer <access_token>
```

## 4. Auth APIs

### 4.1 Login

Endpoint:

```http
POST /api/auth/login
```

Request body:

```json
{
  "email": "admin@ephonon.com",
  "password": "ChangeThisPassword123!"
}
```

Success response:

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "accessToken": "jwt_token_here",
    "user": {
      "id": "user_id",
      "name": "Ephonon Admin",
      "email": "admin@ephonon.com",
      "role": "admin"
    }
  }
}
```

### 4.2 Register New CMS User

Endpoint:

```http
POST /api/auth/register
```

Note:

- Yeh protected route hai
- Sirf `admin` role use kar sakta hai
- Pehla admin `seed:admin` script se banta hai

Headers:

```http
Authorization: Bearer <admin_access_token>
```

Request body:

```json
{
  "name": "Content Manager",
  "email": "editor@ephonon.com",
  "password": "StrongPassword123!",
  "role": "editor"
}
```

### 4.3 Logout

Endpoint:

```http
POST /api/auth/logout
```

Headers:

```http
Authorization: Bearer <access_token>
```

### 4.4 Refresh Access Token

Endpoint:

```http
POST /api/auth/refresh
```

Is request me refresh token cookie automatically jaani chahiye.

Response:

```json
{
  "success": true,
  "message": "Access token refreshed successfully",
  "data": {
    "accessToken": "new_access_token"
  }
}
```

### 4.5 Get Logged-in Profile

Endpoint:

```http
GET /api/auth/profile
```

Headers:

```http
Authorization: Bearer <access_token>
```

## 5. Projects APIs

### 5.1 Get All Projects

```http
GET /api/projects
```

### 5.2 Get Single Project

```http
GET /api/projects/:id
```

Example:

```http
GET /api/projects/6641abc1234567890def1234
```

### 5.3 Create Project

```http
POST /api/projects
```

Protected:

- `admin`
- `editor`

Request body:

```json
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

### 5.4 Update Project

```http
PUT /api/projects/:id
```

### 5.5 Delete Project

```http
DELETE /api/projects/:id
```

Protected:

- Sirf `admin`

## 6. Blogs APIs

### 6.1 Get All Blogs

```http
GET /api/blogs
```

### 6.2 Get Single Blog By Slug

```http
GET /api/blogs/:slug
```

Example:

```http
GET /api/blogs/enterprise-cms-platform
```

### 6.3 Create Blog

```http
POST /api/blogs
```

Protected:

- `admin`
- `editor`

Request body:

```json
{
  "title": "Why Modern CMS Matters",
  "content": "Full blog content here",
  "thumbnail": "https://example.com/blog.jpg",
  "tags": ["cms", "software", "web"],
  "metaTitle": "Why Modern CMS Matters",
  "metaDescription": "Short SEO description",
  "published": true
}
```

### 6.4 Update Blog

```http
PUT /api/blogs/:id
```

### 6.5 Delete Blog

```http
DELETE /api/blogs/:id
```

Protected:

- Sirf `admin`

## 7. Services APIs

### 7.1 Get All Services

```http
GET /api/services
```

### 7.2 Get Single Service

```http
GET /api/services/:id
```

### 7.3 Create Service

```http
POST /api/services
```

Request body:

```json
{
  "title": "Web Development",
  "description": "Custom business websites and apps",
  "icon": "code",
  "active": true
}
```

### 7.4 Update Service

```http
PUT /api/services/:id
```

### 7.5 Delete Service

```http
DELETE /api/services/:id
```

## 8. Homepage APIs

### 8.1 Get Homepage Content

```http
GET /api/homepage
```

### 8.2 Update Homepage Content

```http
PUT /api/homepage
```

Protected:

- `admin`
- `editor`

Request body:

```json
{
  "heroSection": {
    "heading": "Build Modern Digital Products",
    "subheading": "We help companies scale with technology",
    "backgroundImage": "https://example.com/hero.jpg",
    "primaryButtonText": "Get Started",
    "primaryButtonUrl": "/contact"
  },
  "statistics": [
    {
      "label": "Projects Delivered",
      "value": "120+"
    }
  ],
  "ctaSection": {
    "heading": "Start Your Next Project",
    "description": "Let's build something impactful together",
    "buttonText": "Contact Us",
    "buttonUrl": "/contact"
  },
  "aboutPreview": {
    "heading": "About Ephonon",
    "description": "We create scalable software solutions",
    "image": "https://example.com/about.jpg"
  }
}
```

## 9. Testimonials APIs

### 9.1 Get All Testimonials

```http
GET /api/testimonials
```

### 9.2 Get Single Testimonial

```http
GET /api/testimonials/:id
```

### 9.3 Create Testimonial

```http
POST /api/testimonials
```

Request body:

```json
{
  "clientName": "Rahul Sharma",
  "company": "TechNova",
  "review": "Great team and excellent delivery.",
  "rating": 5,
  "image": "https://example.com/client.jpg"
}
```

### 9.4 Update Testimonial

```http
PUT /api/testimonials/:id
```

### 9.5 Delete Testimonial

```http
DELETE /api/testimonials/:id
```

## 10. Team APIs

### 10.1 Get All Team Members

```http
GET /api/team
```

### 10.2 Get Single Team Member

```http
GET /api/team/:id
```

### 10.3 Create Team Member

```http
POST /api/team
```

Request body:

```json
{
  "name": "Amit Verma",
  "role": "Full Stack Developer",
  "bio": "Experienced in scalable web applications",
  "image": "https://example.com/amit.jpg",
  "linkedin": "https://linkedin.com/in/amitverma"
}
```

### 10.4 Update Team Member

```http
PUT /api/team/:id
```

### 10.5 Delete Team Member

```http
DELETE /api/team/:id
```

## 11. Contact APIs

### 11.1 Submit Contact Form

```http
POST /api/contact
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "company": "Acme Inc",
  "message": "We need a software solution."
}
```

### 11.2 Get All Contact Leads

```http
GET /api/contact
```

Protected:

- `admin`
- `editor`

## 12. Media Upload API

### 12.1 Upload Image

```http
POST /api/media/upload
```

Protected:

- `admin`
- `editor`

Content type:

```bash
multipart/form-data
```

Form field name:

```bash
image
```

Response:

```json
{
  "success": true,
  "message": "Image uploaded successfully",
  "data": {
    "url": "https://res.cloudinary.com/....",
    "publicId": "ephonon-cms/abc123"
  }
}
```

Is `url` ko aap `thumbnail`, `image`, `backgroundImage` ya kisi bhi media field me save kar sakte ho.

## 13. Validation Notes

Backend me validation in modules par lagayi gayi hai:

- Auth
- Projects
- Blogs
- Contact

Agar validation fail hota hai to `400 Bad Request` response milega.

## 14. Frontend Integration Examples

### Login Example Using Fetch

```ts
const response = await fetch("http://localhost:5000/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({
    email: "admin@ephonon.com",
    password: "ChangeThisPassword123!"
  })
});

const result = await response.json();
```

### Protected Request Example

```ts
const response = await fetch("http://localhost:5000/api/projects", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  },
  credentials: "include",
  body: JSON.stringify({
    title: "New Project",
    description: "Project description",
    category: "Web App"
  })
});

const result = await response.json();
```

## 15. Quick Route Summary

- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `GET /api/auth/profile`
- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `GET /api/blogs`
- `GET /api/blogs/:slug`
- `POST /api/blogs`
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`
- `GET /api/services`
- `GET /api/services/:id`
- `POST /api/services`
- `PUT /api/services/:id`
- `DELETE /api/services/:id`
- `GET /api/homepage`
- `PUT /api/homepage`
- `GET /api/testimonials`
- `GET /api/testimonials/:id`
- `POST /api/testimonials`
- `PUT /api/testimonials/:id`
- `DELETE /api/testimonials/:id`
- `GET /api/team`
- `GET /api/team/:id`
- `POST /api/team`
- `PUT /api/team/:id`
- `DELETE /api/team/:id`
- `POST /api/contact`
- `GET /api/contact`
- `POST /api/media/upload`

## 16. Useful Backend Files

- [backend/src/routes/index.ts](/home/pawan/ephonon/ephonomagic-forge/backend/src/routes/index.ts)
- [backend/src/modules/auth/auth.routes.ts](/home/pawan/ephonon/ephonomagic-forge/backend/src/modules/auth/auth.routes.ts)
- [backend/src/modules/projects/project.routes.ts](/home/pawan/ephonon/ephonomagic-forge/backend/src/modules/projects/project.routes.ts)
- [backend/src/modules/blogs/blog.routes.ts](/home/pawan/ephonon/ephonomagic-forge/backend/src/modules/blogs/blog.routes.ts)

