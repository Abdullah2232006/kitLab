# KitLab — Electronics & Maker Kit E-Commerce Platform

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?style=flat-square)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=flat-square)](https://reactrouter.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

> **KitLab** is an educational e-commerce web application designed and built to showcase modern front-end engineering skills in React. It simulates an online storefront for electronics hardware, developer boards, DIY starter packs, and sensor kits.

---

## Table of Contents

- [Live Demo](#live-demo)
- [Project Overview & Purpose](#project-overview--purpose)
- [Key Features](#key-features)
  - [Product Catalog & Discovery](#product-catalog--discovery)
  - [Shopping Cart & Checkout Simulation](#shopping-cart--checkout-simulation)
  - [Responsive & Interactive UI](#responsive--interactive-ui)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [License](#license)

---

## Live Demo

**Experience the Live Application on Vercel:**  
[KitLab Live Demo](https://kit-lab-ecru.vercel.app)

---

## Project Overview & Purpose

This project was developed as an educational frontend capstone to demonstrate proficiency in core and modern React fundamentals.

---

## Key Features

### Product Catalog & Discovery
- **Rich Product Grid:** Displays hardware kits with high-resolution imagery, pricing, category tags, and real-time stock levels.
- **Instant Search:** Dynamic multi-field search filtering by title, category, or product description.
- **Product Details Modal:** Interactive modal popup showing in-depth product information, stock validation, and direct Add-to-Cart controls.

### Shopping Cart & Checkout Simulation
- **Global Cart Management:** Add items, adjust quantities, or remove products from anywhere in the app.
- **Stock Limit Protection:** Real-time stock validation prevents adding more units than available inventory.
- **Dynamic Badge Counter:** Cart icon in the navigation bar displays real-time item counts.
- **Order Confirmation Flow:** Generates unique order IDs (`ORD-XXXXXX`), calculates order totals, and displays an animated order summary modal upon checkout.
- **Persistent State:** Saves cart items and placed orders directly in `localStorage`.

### Responsive & Interactive UI
- **Mobile Drawer Navigation:** Custom animated hamburger drawer menu with a dimmed backdrop overlay for mobile and tablet devices.
- **Hero & Feature Sections:** Compelling landing page highlighting platform benefits (Fast Shipping, Premium Hardware, Step-by-Step Tutorials, Community Support).
- **Interactive FAQ Accordion:** Clean, accessible accordion component with smooth toggles.
- **Contact Form:** Interactive feedback and contact form section.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI library using functional components and hooks (`useState`, `useEffect`, `useContext`) |
| **[Vite](https://vitejs.dev/)** | Next-generation frontend build tooling and fast HMR development server |
| **[React Router v7](https://reactrouter.com/)** | Declarative client-side routing (`BrowserRouter`, `Routes`, `Route`, `Link`, `useLocation`) |
| **[CSS Modules](https://github.com/css-modules/css-modules)** | Scoped, modular CSS styling with custom design tokens and transitions |
| **[LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)** | Client-side persistence for cart data and confirmed orders |
| **[Vercel](https://vercel.com/)** | Cloud platform for automated deployment and production hosting |

---

## Project Structure

```text
kitLab/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Project images and graphics
│   ├── components/        # Reusable UI components
│   │   ├── BestProducts.jsx           # Featured products section
│   │   ├── BestProducts.module.css
│   │   ├── Card.jsx                   # Product card component
│   │   ├── Card.module.css
│   │   ├── ContactUs.jsx              # Contact & FAQ section
│   │   ├── ContactUs.module.css
│   │   ├── Features.jsx               # Platform benefits section
│   │   ├── Features.module.css
│   │   ├── Footer.jsx                 # Global footer
│   │   ├── Footer.module.css
│   │   ├── Hero.jsx                   # Homepage hero banner
│   │   ├── Hero.module.css
│   │   ├── NavBar.jsx                 # Responsive navigation bar
│   │   ├── NavBar.module.css
│   │   ├── OrderConfirmationModal.jsx # Checkout modal
│   │   ├── OrderConfirmationModal.module.css
│   │   ├── ProductModal.jsx           # Quick-view product modal
│   │   ├── ProductModal.module.css
│   │   ├── Search.jsx                 # Live search bar component
│   │   └── Search.module.css
│   ├── contexts/          # React Context providers
│   │   └── CartContext.jsx            # Cart & orders global state
│   ├── data/              # Mock dataset
│   │   └── db.json                    # Hardware products database
│   ├── pages/             # Route views
│   │   ├── Cart.jsx                   # Shopping cart page
│   │   ├── Cart.module.css
│   │   ├── Home.jsx                   # Landing page
│   │   ├── Products.jsx               # Product catalog page
│   │   └── Products.module.css
│   ├── app.css            # Global CSS variables & resets
│   ├── App.jsx            # Router setup and providers
│   └── main.jsx           # Application entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and `npm` installed:
```bash
node -v
npm -v
```

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abdullah2232006/kitLab.git
   cd kitLab
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and reference it for educational purposes.
