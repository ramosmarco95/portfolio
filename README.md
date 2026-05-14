# Portfolio Website

A Playful theme UI, responsive personal portfolio website showcasing  skills, experience, and projects. Built with React and Vite, featuring interactive animations, a contact form, and a downloadable resume.

## 🌐 Live Demo

Visit your deployed portfolio at:

```
https://your-username.github.io/portfolio/
```

## 🚀 Features

- **Responsive Design** – Adapts to desktop, tablet, and mobile devices
- **Interactive Animations** – Smooth transitions
- **Multi-Section Layout** – Home, About, Experience, Projects, and Contact sections
- **Contact Form** – Integrated form with validation and Formspree backend
- **Resume Download** – Direct download link to  resume from the navbar
- **Dynamic Home Section** – Rotating role titles with smooth animations
- **Fully Responsive Navigation** – Mobile-friendly navbar with section links
- **Modern Styling** – Custom CSS, Playful theme
- **Easy Deployment** – Built-in Vite configuration for GitHub Pages deployment

## 🛠️ Tech Stack

### Frontend

- **React** (^19.1.1) – UI library
- **React Router DOM** (^7.8.2) – Client-side routing
- **React Icons** (^5.5.0) – Icon library
- **Css** – Responsive design framework
- **Vite** (^7.1.2) – Lightning-fast build tool

### Development Tools

- **ESLint** – Code quality and style linting
- **Node.js** (20+) – Runtime environment
- **Docker** – Containerization for consistent development environments

### Deployment

- **GitHub Pages** – Static site hosting
- **GitHub Actions** – CI/CD automation (optional)

## 📋 Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- (Optional) **Docker** and **Docker Compose** for containerized development

## 📦 Installation

### Local Setup

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/ramosmarco95/portfolio.git>
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables** (if using contact form):
   Create a `.env.local` file in the root directory:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

## 🚀 Development

### Local Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Docker Development

Run the project in a Docker container for consistent environments:

1. **Start with Docker Compose:**

   ```bash
   docker-compose up
   ```

2. **Access the dev server:**
   Open `http://localhost:5173` in your browser

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

The Docker setup includes:

- Node.js 20 Alpine image for lightweight containers
- Live code reloading via mounted volumes
- Preserved `node_modules` to avoid conflicts between host and container

## 🏗️ Build

### Production Build

Create an optimized production build:

```bash
npm run build
```

Output files are generated in the `dist/` directory.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── ContactForm-v1.jsx    # Contact form with validation
│   │   ├── FlipCard.jsx          # Animated flip card component
│   │   ├── Footer.jsx            # Footer section
│   │   ├── MatrixBg.jsx          # Matrix background animation
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── ResumeDownload.jsx    # Resume download button
│   │   └── ScrollToTop.jsx       # Scroll-to-top utility
│   ├── pages/                # Page sections
│   │   ├── HomeSection.jsx       # Hero section with animated titles
│   │   ├── AboutSection.jsx      # About me section
│   │   ├── ExperienceSection.jsx # Work experience timeline
│   │   ├── ProjectsSection.jsx   # Portfolio projects grid
│   │   └── ContactSection.jsx    # Contact information and form
│   ├── styles/               # CSS stylesheets
│   ├── assets/               # Images, logos, resume
│   ├── App.jsx               # Main app component
│   └── main.jsx              # React entry point
├── public/
│   └── resume/               # Resume files
├── docker-compose.yml        # Docker Compose configuration
├── Dockerfile.dev            # Docker development image
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint rules
└── package.json              # Dependencies and scripts
```

## 🔧 Configuration

### Vite Configuration (`vite.config.js`)

- Uses React plugin for Fast Refresh
- Base path set to `/portfolio` for GitHub Pages deployment

### ESLint

Code quality checks run with:

```bash
npm run lint
```

### Environment Variables

Create `.env.local` to configure:

- `VITE_FORMSPREE_ENDPOINT` – Contact form submission endpoint

## 🚢 Deployment to GitHub Pages

### Prerequisites

- Repository pushed to GitHub
- GitHub Pages enabled in repository settings
- Base URL configured as `/portfolio`

### Automatic Deployment (CI/CD)

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys to `gh-pages` branch
3. Site updates at `https://your-username.github.io/portfolio/`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` directory to GitHub Pages or your hosting service

## 📝 Customization

### Add Your Information

1. **Update personal details** in component files
2. **Replace images** in `src/assets/`
3. **Add projects** in `ProjectsSection.jsx`
4. **Update experience** in `ExperienceSection.jsx`
5. **Modify styles** in `src/styles/`

### Contact Form

To enable the contact form:

1. Create a Formspree account at https://formspree.io
2. Add your form endpoint to `.env.local`
3. Test form submission

### Resume Download

Place your resume PDF in `public/resume/` and update the link in `ResumeDownload.jsx`

## 📚 Available Scripts

| Command           | Purpose                           |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Create optimized production build |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint code quality checks    |

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, feel free to fork and customize!

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or issues, please open an issue in the repository or contact through the portfolio contact form.

## 🤖 AI Assistance Disclosure

This project was developed with the assistance of [Claude](https://claude.ai), an AI assistant made by Anthropic. AI support was used to help with [writing code, debugging, documentation, etc.]. All content has been reviewed and is the responsibility of the author(s).

---

**Happy coding! 🚀**
