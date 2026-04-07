# IP Mudra — Intellectual Property Law Firm Website

A production-ready, fully responsive **React.js + Vite** website for **IP Mudra**, a premier Intellectual Property law firm in India.

## 🌐 Live Preview
Visit: [http://localhost:5173](http://localhost:5173) (local dev)

---

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 + Vite | Core framework + build tool |
| Material UI (MUI v5) | UI component library |
| React Router DOM v6 | Client-side routing |
| Redux Toolkit | Global state management |
| React Hook Form | Form validation |
| Framer Motion | Animations |
| Axios | HTTP client (ready for API) |
| @fontsource | Playfair Display + Inter fonts |

---

## 📁 Folder Structure

```
src/
├── assets/           # Hero background image
├── components/
│   ├── common/       # PageBanner, SectionTitle, FloatingEnquireButton
│   ├── layout/       # Navbar, Footer, Layout
│   └── ui/           # HeroSection, AboutSection, ServicesGrid, TeamSection, etc.
├── containers/
│   ├── home/         # HomeContainer
│   ├── contact/      # ContactContainer (React Hook Form + Redux)
│   └── services/     # ServicesContainer
├── hooks/            # useNavbarScroll, useScrollTop
├── pages/            # HomePage, AboutPage, ServicesPage, TrademarkPage,
│                     # CopyrightPage, PatentPage, DesignPage, ContactPage, NotFoundPage
├── routes/           # AppRoutes.jsx (lazy-loaded)
├── store/
│   ├── index.js
│   └── slices/       # servicesSlice, contactSlice, uiSlice
├── theme/            # muiTheme.js (Navy + Gold design system)
└── utils/            # constants.js (all static content)
```

---

## 🎨 Design System

- **Primary Color:** Deep Navy `#0B1F4B`
- **Accent Color:** Gold `#C9A84C`
- **Background:** Off-white `#F8F6F1`
- **Heading Font:** Playfair Display (serif)
- **Body Font:** Inter (sans-serif)

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About, Services, Why Us, Team, News, CTA |
| `/about` | About Us — Mission, Values, Stats, Team |
| `/services` | All 8 practice area service cards |
| `/trademark` | Trademark services detail |
| `/copyright` | Copyright services detail |
| `/patent` | Patent services detail |
| `/design` | Design IP services detail |
| `/contact` | Contact form + office info |
| `*` | 404 Not Found |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ✨ Key Features

- 🏛️ **Sticky Navbar** — Transparent on top, solid on scroll, active link highlighting
- 📱 **Fully Responsive** — Mobile drawer, 1-4 column grids, responsive typography
- ✨ **Framer Motion Animations** — Scroll-triggered section animations
- 📝 **React Hook Form** — Validated contact form with success/error feedback
- 🗄️ **Redux Toolkit** — Global state for services, contact submissions, and UI
- ⚡ **Lazy Loading** — All pages code-split via `React.lazy` + `Suspense`
- 🔍 **SEO Ready** — Meta tags, Open Graph, Twitter Cards in `index.html`
- 🎯 **Floating Enquiry FAB** — Gold FAB with quick enquiry modal

---

## 📦 Practice Areas Covered

- Trademark (Registration, Prosecution, Litigation)
- Copyright (Registration, Digital Rights, Licensing)
- Patent (Filing, Prosecution, Portfolio Management)
- Design IP (Registration, International Filing)
- IP Litigation
- Corporate Law
- Geographical Indication
- Technology, Media & Telecom (TMT)

---

## 📜 Legal Disclaimer

As per the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise. This website is solely for informational purposes and should not be construed as legal advice.

---

© 2026 IP Mudra. All Rights Reserved.
