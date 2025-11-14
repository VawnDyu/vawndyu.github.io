import { useState } from 'react';
import ProjectCard from '../components/projects/projectsCard';
import projectsData from '../data/projectsData';
import '../components/projects/Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');

  // Get unique tech categories
  const categories = ['All', 'Web Apps', 'Games', 'Tools'];

  // Filter projects based on category
  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => {
        if (filter === 'Web Apps') {
          return project.techStack.some(tech =>
            ['MERN', 'React', 'PHP', 'Javascript'].includes(tech)
          );
        }
        if (filter === 'Games') {
          return ['Moon Chess', 'Pet Care Simulator', 'Visual Novel Game', 'Gacha', 'Guess the Picture'].includes(project.title);
        }
        if (filter === 'Tools') {
          return ['PokéSearch', 'Weather App'].includes(project.title);
        }
        return true;
      });

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>Projects</h1>
        <p className="projects-subtitle">
          A collection of my work in web development and interactive experiences
        </p>
      </header>

      {/* Filter Tabs */}
      <nav className="filter-tabs" aria-label="Project categories">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`filter-tab ${filter === category ? 'active' : ''}`}
            aria-pressed={filter === category}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Projects Count */}
      <div className="projects-count">
        {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid-minimal">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            index={index}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="empty-state">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
