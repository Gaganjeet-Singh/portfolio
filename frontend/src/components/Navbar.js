import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

function Navbar({ theme, onThemeToggle }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = portfolioData.navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className={`navbar-shell${isMenuOpen ? ' is-open' : ''}`}>
      <nav className="navbar-container" aria-label="Primary">
        <a className="navbar-brand" href="#home" onClick={handleNavClick}>
          <span className="brand-mark">{portfolioData.profile.initials}</span>
          <span className="brand-text">{portfolioData.profile.name}</span>
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`navbar-panel${isMenuOpen ? ' open' : ''}`}>
          <div className="navbar-links">
            {portfolioData.navigationItems.map((item) => (
              <a
                key={item.id}
                className={activeSection === item.id ? 'is-active' : ''}
                href={`#${item.id}`}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="navbar-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={onThemeToggle}
              aria-label={`Switch to ${nextTheme} mode`}
              aria-pressed={theme === 'dark'}
              title={`Switch to ${nextTheme} mode`}
            >
              {theme === 'dark' ? <SunMedium size={17} /> : <MoonStar size={17} />}
              <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <div className="navbar-socials" aria-label="Social links">
              {portfolioData.socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <a className="button button-primary navbar-cta" href="#contact" onClick={handleNavClick}>
              Contact Me
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
