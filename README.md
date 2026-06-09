# Devin's Portfolio (Refrizor)

Hello! This is my portfolio application.

It contains a React application (TypeScript) with a Vite build setup and a currently unused Express app.

It is currently ran at: https://portfolio-dev.inferris.com using Cloudflare pages.

## Overview

The main React app is organized across re-usable components, features, and pages.

It uses `react-router-dom` for routes, `react-helmet-async` for setting page titles, and`react-fontawesome` and `@fortawesome` packages for many of the icons.

Language, tech, and tooling-like icons use shields.io.

## Building

1. Navigate to `./frontend`
2. Install the dependencies with `npm install`
3. Run a build with `npm run build`
4. To run it locally, use `npm run dev`

## Backend server

The Express server is currently unused, but it will eventually hold useful routes for featured projects, potential comments, and more.

### Plan: Featured Projects

The `/featured-projects` endpoint will expose projects that should be highlighted throughout the portfolio.

#### List featured projects

```http
GET /featured-projects
```

Returns a collection of featured projects.

#### Retrieve a featured project

```http
GET /featured-projects/:key
```

Returns the details for a specific featured project.

##### Example response

```json
{
  "key": "tea_vendor",
  "title": "Tea Example",
  "description": "the totally awesome tea marketplace application for your tea and all!",
  "isActive": true,
  "createdAtMs": "1749499200000",
  "updatedAtMs": "1749585600000"
}
```

> [!NOTE]
> **Future plans:** This service will probably later be containerized to simplify orchestration
