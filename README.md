# Lorins Consults Website

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## EmailJS Setup

Create a `.env` file in the project root with the following variables (use your EmailJS credentials):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Ensure your EmailJS template expects: `from_name`, `from_email`, `phone`, `service`, `message`.
