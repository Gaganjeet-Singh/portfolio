# Portfolio Update Summary

The portfolio has been rebuilt into a single scrolling page.

## What changed

- Removed route-based page navigation from the app shell
- Added sticky section navigation with active link highlighting
- Added a mobile menu and a navbar CTA for the contact section
- Moved editable content into `src/data/portfolioData.js`
- Reworked every section into one consistent light visual system
- Replaced the broken absolute-path hero image with a deploy-safe profile card
- Wired the contact form to EmailJS using environment variables
- Updated setup documentation to use `.env.local`

## Main files

- `src/App.js`
- `src/data/portfolioData.js`
- `src/components/Navbar.js`
- `src/components/Footer.js`
- `src/Pages/Hero.js`
- `src/Pages/About.js`
- `src/Pages/Projects.js`
- `src/Pages/Education.js`
- `src/Pages/Contact.js`

## EmailJS variables

Add these to `.env.local`:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

## Content updates

Edit `src/data/portfolioData.js` to replace placeholder contact info, project descriptions, education details, and any remaining generic text with your final portfolio content.
