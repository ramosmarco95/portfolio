Portfolio Website

This is my personal portfolio website, built to showcase my skills, projects, and professional experience as a software developer. The site highlights my background in full-stack web development, provides access to my resume, and serves as a central hub for my online presence.

🌐 Live Demo

https://your-username.github.io/portfolio/

🚀 Features

Responsive Design – Works seamlessly across desktop and mobile devices.

Interactive UI – Built with React components and modern styling.

Experience & Skills – Expandable sections that highlight my programming languages, frameworks, and work history.

About & Contact Pages – Information about me, with a contact form and links to my social platforms.

Resume Download – Easily accessible downloadable resume.

GitHub Pages Deployment – Automated CI/CD pipeline using GitHub Actions for continuous deployment.

🛠️ Tech Stack

Frontend: React, React Router (BrowserRouter with /portfolio basename)

Styling: CSS with custom responsive layouts

Build Tools:

Vite
 or Create React App (depending on setup)

Deployment: GitHub Pages (via GitHub Actions CI/CD)

Containerization (Optional): Docker (used for local dev consistency, not required for deployment)

⚙️ Deployment Workflow

Push changes to the main branch → GitHub Actions automatically builds and deploys to GitHub Pages.

Supports SPA routing by copying index.html to 404.html for React Router.