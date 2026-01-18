# The Modern Journal

This project is a blog platform developed for the Web Frameworks course assignment.

## Features
- User authentication (Register / Login) using Supabase Auth
- Create, edit and delete blog posts (authenticated users only)
- Public blog archive and individual post pages
- Account page acting as a simple user dashboard
- Responsive layout built with Astro and Tailwind CSS

## Pages
- Home: Displays the latest published posts
- Posts: Archive of all published posts
- Post Detail: Full post content with discussion section placeholder
- Account: User dashboard to manage posts
- Login / Register: Authentication pages

## Database
The project uses Supabase with the following tables:
- profiles
- posts
- comments (planned, UI placeholder only)

## Deployment
The project is deployed on Netlify:  
https://the-modern-journal.netlify.app/

## Notes
Due to time constraints, the comment system is visually implemented but not fully connected to the database.
