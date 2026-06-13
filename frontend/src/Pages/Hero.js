import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

function Hero() {
  return (
    <section id="home" data-section className="page-section hero-section">
      <div className="section-inner hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow hero-eyebrow">
            <Sparkles size={15} />
            <span>{portfolioData.profile.availability}</span>
          </div>

          <h1 className="hero-name">
            Hi, I&apos;m <span>{portfolioData.profile.name}</span>
          </h1>

          <p className="hero-title">{portfolioData.profile.title}</p>
          <p className="hero-description">{portfolioData.profile.description}</p>

          <div className="hero-focus-list">
            {portfolioData.profile.focusAreas.map((focusArea) => (
              <span key={focusArea} className="hero-focus-pill">
                {focusArea}
              </span>
            ))}
          </div>

          <div className="hero-buttons">
            <a className="button button-primary" href="#contact">
              Contact Me
              <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#projects">
              View Projects
            </a>
          </div>

          <div className="hero-contact-line">
            <Mail size={17} />
            <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hero-card surface-card">
            <div className="hero-card-header">
              <div className="hero-monogram">{portfolioData.profile.initials}</div>
              <div>
                <p className="hero-card-label">Profile Snapshot</p>
                <h2>{portfolioData.profile.fullName}</h2>
                <p className="hero-card-copy">{portfolioData.profile.location}</p>
              </div>
            </div>

            <div className="hero-stats-grid">
              {portfolioData.profile.heroStats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-socials">
              {portfolioData.socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];

                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    <Icon />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
