# Hindustan Scouts & Guides Association (HSGA) Website

## 1) Project Overview

This is a multi-page, responsive website built using HTML, CSS, and JavaScript for the Hindustan Scouts & Guides Association.

It presents:

- Organization introduction and mission/vision
- History and background
- Leadership and organization structure
- Activities/programs
- Gallery with lightbox preview
- Contact details and contact form

---

## 2) Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)

No external framework is required to run the website.

---

## 3) Folder Structure

```text
hsga-website/
├── index.html                 # Home page
├── about.html                 # About Us page
├── leadership.html            # Leadership / Organization Structure page
├── activities.html            # Activities / Programs page
├── gallery.html               # Gallery page (with lightbox)
├── contact.html               # Contact page (with form)
├── css/
│   └── style.css              # Shared styles + responsive design
├── js/
│   └── script.js              # Menu toggle, lightbox, form handling
├── screenshots/               # Submission screenshots
│   ├── home.png
│   ├── about.png
│   ├── leadership.png
│   ├── activities.png
│   ├── gallery.png
│   └── contact.png
└── PROJECT_DOCUMENTATION.md   # This document
```

Note: Images are referenced from the `../HSGA` folder as provided.

---

## 4) Page-wise Summary

### Home (`index.html`)

- Hero section with title/motto and CTAs
- Intro section
- Vision/Mission highlights
- Quick links
- Activities preview
- Footer with contact details

### About (`about.html`)

- Organization history
- Vision and mission details
- Background context

### Leadership (`leadership.html`)

- National leadership list
- State representatives
- Card-based layout for roles and names

### Activities (`activities.html`)

- Training programs
- Community service activities
- National events
- Youth development programs

### Gallery (`gallery.html`)

- Responsive image grid
- Lightbox popup with navigation

### Contact (`contact.html`)

- Address, phone, email
- Joint Secretary contact
- Contact form: name, email, phone, message

---

## 5) Key Features Implemented

- Responsive layout (mobile/tablet/desktop)
- Sticky navigation bar
- Mobile hamburger menu
- Smooth scrolling
- Hover effects on cards/images
- Lightbox gallery
- Contact form validation (client-side)

---

## 6) How to Run Locally

1. Open the project folder.
2. Open `index.html` in a browser.

Optional (recommended): use a local server:

```bash
python -m http.server 8000
```

Then visit: `http://localhost:8000`

---

## 7) Deployment Guide (Short)

### GitHub Pages

1. Push the project to a GitHub repository.
2. Open repository **Settings → Pages**.
3. Select branch: `main`, folder: `/root`.
4. Save and wait for deployment URL.

### Netlify

1. Login to Netlify.
2. Import project from GitHub.
3. Deploy as a static site (no build command needed).

---

## 8) Submission Checklist

- [x] Complete source code
- [x] Required pages/tabs
- [x] Responsive UI
- [x] Gallery and contact form
- [x] Screenshots of major pages
- [ ] GitHub repository link (add after push)
- [ ] Live deployed link (add after deployment)

---

## 9) Future Enhancements (Optional)

- Backend email integration for contact form
- Admin panel for gallery/content updates
- SEO metadata improvements
- Multi-language support

---

**Prepared for:** Website Development Assignment
**Organization:** Hindustan Scouts & Guides Association
