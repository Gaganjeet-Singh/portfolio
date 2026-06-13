import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjsConfig from '../config/emailjsConfig';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

const contactIconMap = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
};

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const hasEmailConfig = Boolean(
    emailjsConfig.publicKey && emailjsConfig.serviceId && emailjsConfig.templateId
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      return 'Please fill out every field before sending your message.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }

    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    const validationMessage = validateForm();

    if (validationMessage) {
      setStatus({ type: 'error', message: validationMessage });
      return;
    }

    if (!hasEmailConfig) {
      setStatus({
        type: 'error',
        message: 'Email sending is not configured yet. Please check the portfolio environment setup.',
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        {
          publicKey: emailjsConfig.publicKey,
        }
      );

      setFormData(initialFormData);
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out. Your message was sent successfully.',
      });
    } catch (error) {
      const errorMessage =
        error?.status === 429
          ? 'Too many requests were sent in a short time. Please wait a moment and try again.'
          : 'The message could not be sent right now. Please try again in a moment.';

      setStatus({ type: 'error', message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-section className="page-section contact-section">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="eyebrow">{portfolioData.contact.eyebrow}</span>
          <h2>{portfolioData.contact.title}</h2>
          <p>{portfolioData.contact.subtitle}</p>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            className="contact-info-column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {portfolioData.contact.details.map((detail) => {
              const Icon = contactIconMap[detail.icon];
              const Wrapper = detail.href ? 'a' : 'div';
              const wrapperProps = detail.href ? { href: detail.href } : {};

              return (
                <Wrapper key={detail.label} className="info-card surface-card" {...wrapperProps}>
                  <div className="info-icon">
                    <Icon size={22} />
                  </div>
                  <div className="info-content">
                    <h3>{detail.label}</h3>
                    <p>{detail.value}</p>
                  </div>
                </Wrapper>
              );
            })}

            <div className="contact-side-card surface-card">
              <h3>Elsewhere on the web</h3>
              

              <div className="social-links">
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

          <motion.form
            className="contact-form surface-card"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {status ? (
              <div
                className={status.type === 'success' ? 'success-message' : 'error-message'}
                aria-live="polite"
              >
                {status.message}
              </div>
            ) : null}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the project, role, or idea you have in mind."
              />
            </div>

            <button type="submit" className="button button-primary submit-btn" disabled={loading}>
              {loading ? (
                'Sending...'
              ) : (
                <>
                  <Send size={17} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
