# One-Page Portfolio

This React app is a single-page portfolio for Gagan. It includes:

- Section-based navigation with active state and mobile menu
- A clean responsive layout for hero, about, projects, education, and contact
- Shared portfolio content in `src/data/portfolioData.js`
- An EmailJS-powered contact form configured through environment variables

## Run locally

```bash
npm install
npm start
```

## Build for production

```bash
npm run build
```

## EmailJS setup

Create `.env.local` in the project root and add:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

The contact form reads those values at build time. More detail is in `SETUP_GUIDE.md`.

## Update portfolio content

Most editable portfolio text and links now live in:

```text
src/data/portfolioData.js
```

That file controls:

- Navbar and footer links
- Hero content
- About section copy and stats
- Projects
- Education, skills, and certifications
- Contact details and social links
