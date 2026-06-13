# Portfolio Setup Guide

## 1. EmailJS configuration

Use `.env.example` as the template, then create `.env.local` in the project root with the real values:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

The contact form reads those values from `process.env`, so the component code no longer needs hardcoded EmailJS IDs.

## 2. EmailJS account steps

1. Create an account at `https://www.emailjs.com/`
2. Create an email service
3. Create an email template
4. Copy your public key, service ID, and template ID into `.env.local`
5. Restart the development server after editing `.env.local`

## 3. Suggested template variables

Use these variables in your EmailJS template:

- `from_name`
- `from_email`
- `reply_to`
- `subject`
- `message`

Example template:

```text
Subject: {{subject}}

From: {{from_name}} ({{from_email}})
Reply to: {{reply_to}}

Message:
{{message}}
```

## 4. Where to edit portfolio content

Update `src/data/portfolioData.js` to change:

- Name, role, hero text, and contact details
- Social links
- About section copy
- Projects
- Education entries
- Skills and certifications

## 5. Local commands

Start development:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

## 6. If the form does not send

Check these first:

- `.env.local` exists in the project root
- All three `REACT_APP_EMAILJS_*` keys are present
- The EmailJS template uses the same variable names listed above
- The dev server was restarted after editing environment variables
