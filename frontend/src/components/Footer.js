import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import './footer.css';

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="section-inner footer-grid">
        <div className="footer-brand">
          <span className="footer-mark">{portfolioData.profile.initials}</span>
          <div>
            <h2>{portfolioData.profile.fullName}</h2>
            <p>{portfolioData.profile.title}</p>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-link-list">
            {portfolioData.navigationItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>{portfolioData.contact.email}</p>
          <p>{portfolioData.contact.phone}</p>
          <p>{portfolioData.contact.location}</p>

          <div className="footer-socials">
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
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright {currentYear} {portfolioData.profile.fullName}. Built with React, Framer Motion,
          and EmailJS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
