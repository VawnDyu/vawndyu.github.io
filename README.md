# 🚀 Vonne Dew - Portfolio

A minimalist, performant portfolio website showcasing my work as a Full Stack Web Developer. Built with React and designed with a focus on clean aesthetics and user experience.

![Portfolio Preview](./public/og-image.png) <!-- Add a screenshot later -->

## ✨ Features

- **Minimalist Design** - Clean, modern interface with smooth animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Performance Optimized** - Lazy loading, GPU-accelerated animations, smooth scrolling
- **Project Filtering** - Filter projects by category (Web Apps, Games, Tools)
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation support

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **CSS3** - Styling with modern features (Grid, Flexbox, CSS Variables)
- **Vite** - Build tool and dev server

### Hosting
- **GitHub Pages** - Static site hosting

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── assets/            # Images and static files
│   ├── components/
│   │   ├── common/        # Reusable components (SocialLinks, ThemeToggle)
│   │   ├── home/          # Home page components (Hero, AboutMe, TechStack)
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   └── projects/      # Projects page components (ProjectCard)
│   ├── data/              # Project data and tech stack data
│   ├── pages/             # Page components (Home, Projects)
│   ├── hooks/             # Custom React hooks (useTheme)
│   ├── globals.css        # Global styles and CSS variables
│   ├── imports.js         # Asset imports
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/VawnDyu/vawndyu.github.io.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

This portfolio is deployed on GitHub Pages. To deploy:

1. Update `base` in `vite.config.js` to your repository name
2. Run the build command:
```bash
npm run build
```
3. Deploy the `dist` folder to GitHub Pages

## 🎨 Design Philosophy

- **Minimalism** - Less is more. Focus on content, not decoration
- **Performance First** - Only GPU-accelerated animations (transform, opacity)
- **Accessibility** - Everyone should be able to use the portfolio
- **Responsive** - Mobile-first approach with fluid typography
- **Consistency** - Cohesive design system with CSS variables

## 🌈 Color Scheme

### Light Mode
- Background: `#e4e4e4`
- Surface: `#ffffff`
- Text: `#303030`

### Dark Mode
- Background: `#121212`
- Surface: `#000000`
- Text: `#dedede`

## 📱 Responsive Breakpoints

- Mobile: `< 480px`
- Tablet: `481px - 768px`
- Desktop: `> 768px`
- Large Desktop: `> 1600px`

## 🔧 Key Features Explained

### Theme Toggle
Persistent dark/light mode using localStorage. Theme preference is saved across sessions.

### Smooth Scrolling
Native CSS `scroll-behavior: smooth` for performant page navigation.

### Project Filtering
Client-side filtering based on project categories with smooth transitions.

### Image Optimization
- Lazy loading with native `loading="lazy"`
- Skeleton loaders for better perceived performance
- Responsive images with `object-fit`

## 📝 Adding New Projects

Edit `src/data/projectsData.js`:

```javascript
{
  title: "Project Name",
  description: "Brief description of the project",
  image: YourProjectImage,
  techStack: ["React", "Node.js", "MongoDB"],
  liveLink: "https://your-project.com",
  githubLink: "https://github.com/yourusername/project"
}
```

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:
- Open an issue for bugs or suggestions
- Fork the repo and submit a pull request
- Share feedback on design or performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

- **Portfolio**: [https://vawndyu.github.io/](https://vawndyu.github.io/)
- **GitHub**: [@VawnDyu](https://github.com/VawnDyu)
- **LinkedIn**: [Vonne Dew](https://www.linkedin.com/in/vonnedewsalig/)

---

⭐ If you found this portfolio inspiring, consider giving it a star!