import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" data-section className="page-section projects-section">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="eyebrow">{portfolioData.projects.eyebrow}</span>
          <h2>{portfolioData.projects.title}</h2>
          <p>{portfolioData.projects.subtitle}</p>
        </motion.div>

        <div className="projects-grid">
          {portfolioData.projects.items.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card surface-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="project-visual">
                <span>{project.visual}</span>
                <p>{project.summary}</p>
              </div>

              <div className="project-content">
                <div className="project-topline">
                  <h3>{project.title}</h3>
                  <span className="project-status">{project.status}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub size={16} />
                      <span>Source</span>
                    </a>
                  ) : null}

                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  ) : null}

                  {!project.github && !project.live ? (
                    <span className="project-pending">
                      Details can be swapped in from the shared data file.
                    </span>
                  ) : (
                    <span className="project-open">
                      Open <ArrowUpRight size={14} />
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
