import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Layers3, MessageSquareText, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const iconMap = {
  brain: BrainCircuit,
  layers: Layers3,
  message: MessageSquareText,
  rocket: Rocket,
};

function About() {
  return (
    <section id="about" data-section className="page-section about-section">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="eyebrow">{portfolioData.about.eyebrow}</span>
          <h2>{portfolioData.about.title}</h2>
          <p>{portfolioData.about.subtitle}</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-story surface-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {portfolioData.about.sections.map((section) => (
              <article key={section.title} className="about-copy-block">
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </motion.div>

          <div className="about-highlights">
            {portfolioData.about.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon];

              return (
                <motion.article
                  key={highlight.title}
                  className="highlight-card surface-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="highlight-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="about-stats">
          {portfolioData.about.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item surface-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
