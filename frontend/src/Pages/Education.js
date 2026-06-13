import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Education.css';

function Education() {
  return (
    <section id="education" data-section className="page-section education-section">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="eyebrow">{portfolioData.education.eyebrow}</span>
          <h2>{portfolioData.education.title}</h2>
          <p>{portfolioData.education.subtitle}</p>
        </motion.div>

        <section className="education-block">
          <div className="education-list">
            {portfolioData.education.entries.map((entry, index) => (
              <motion.article
                key={entry.degree}
                className="education-card surface-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="education-header-card">
                  <div className="education-icon">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3>{entry.degree}</h3>
                    <p className="institution">{entry.institution}</p>
                  </div>
                </div>

                <div className="education-details">
                  <span className="detail-item">
                    <Calendar size={15} />
                    <span>{entry.duration}</span>
                  </span>
                  <span className="detail-item">
                    <MapPin size={15} />
                    <span>{entry.location}</span>
                  </span>
                </div>

                <p className="education-field">{entry.field}</p>

                <ul className="highlights">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <div className="split-heading">
            <h3>Technical Skills</h3>
            
          </div>

          <div className="skills-grid">
            {portfolioData.education.skills.map((skillGroup, index) => (
              <motion.article
                key={skillGroup.category}
                className="skill-category surface-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <h4>{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="certifications-section">
          <div className="split-heading">
            <h3>Certifications</h3>
           
          </div>

          <div className="certifications-grid">
            {portfolioData.education.certifications.map((certification, index) => (
              <motion.article
                key={certification.title}
                className="certification-card surface-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="cert-icon">
                  <Award size={24} />
                </div>
                <h4>{certification.title}</h4>
                <p className="cert-issuer">{certification.issuer}</p>
                <p className="cert-date">{certification.date}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Education;
