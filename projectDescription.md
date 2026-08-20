# KitLab — Electronics Kit E-Commerce Platform
## Project Description (Personal Reference + AI Agent Context)

---

## What This Project Is

KitLab is a fully functional e-commerce single-page application built with React + Vite that sells electronics maker kits — Arduino starter kits, ESP32 dev bundles, sensor packs, breadboard kits, and similar products. It is a front-end graduation capstone project for the Pixels'26 program.

The app simulates a real online shop with user authentication, a product catalog, a shopping cart, and an order confirmation flow. All data is fetched dynamically from a public API (DummyJSON or FakeStore API). User and cart data are persisted in localStorage.

---

## Tech Stack

- **Framework:** React 18 (via Vite)
- **Styling:** External CSS (plain CSS files per component, no Tailwind)
- **Data:** Fetched from DummyJSON Products API using `fetch()` inside `useEffect`
- **Persistence:** localStorage (user auth state, cart, login status)
- **State:** useState, useEffect (no Redux; Context API optional as bonus)
- **Routing:** React Router DOM (for multi-page navigation)
- **Language:** JavaScript only — no TypeScript

---

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── Cart.jsx
│   ├── Footer.jsx
│   ├── LoginForm.jsx
│   ├── SignupForm.jsx
│   └── FAQ.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   └── Auth.jsx
├── assets/
├── data/
├── App.jsx
└── main.jsx
```

---

## Pages & Features

### Home Page
- **Navbar** with links: Home, Products, Contact Us, Login/Logout
  - If logged in: show username + Logout button
  - If not logged in: show Login button
- **Hero Section** with "Order Now" CTA
  - Not logged in → alert → redirect to login
  - Logged in → redirect to Products page
- **Features Section** — shop advantages with hover effects and CSS transitions
- **Best Products Section** — featured/popular products with animations
- **Footer** — social media icons, contact info, hover effects

### Products Page
- Fetch all products from API using `fetch()` inside `useEffect`
- Show loading state while fetching
- Handle fetch errors
- Display products as cards with: image, name, category, price
- **Filter** by category
- **Search** by product name
- **Sort** by price
- Product cards rendered with `map()`

#### Product Card
- **Add to Cart button**
  - Not logged in → alert → redirect to login
  - Logged in → add to cart, update total
- **View Details button** → opens modal with: image, description, category, price, Close + Add to Cart buttons

#### Cart
- List of added products with quantity and individual price
- Total price updated dynamically
- Remove button per product
- **Confirm Order button** → opens modal with: product list, images, total price, "Order Confirmed" message

### Auth Page (Sign In / Sign Up)
- Sign Up form: Name, Email, Password
- Sign In form: Email, Password
- Validate: no empty fields, valid email format
- Store user data in localStorage
- After sign in: redirect to Home (or Products if "Add to Cart" triggered the redirect)
- Navbar updates dynamically after login/logout
- Animations and hover effects on inputs and buttons

### FAQ Page
- List of Frequently Asked Questions
- Click question → toggle answer visibility
- Accordion behavior: only one answer visible at a time
- Driven by React state

---

## React Requirements (Mandatory)

| Requirement | Implementation |
|---|---|
| useState | Products, cart, logged user, search input, category filter, modal open/close, form inputs |
| useEffect | Fetch products on mount, load localStorage on mount, save cart to localStorage |
| Props | Pass product data, username, button text, event handlers between components |
| map / filter / sort | Render product list, filter by category, search by name, sort by price |
| Conditional rendering | Login/logout state, empty cart message, no products found, loading state |
| Form handling | Controlled inputs via useState, validation on submit |
| Spread operator | Add item to cart, update quantity, remove item |
| localStorage | Persist user, cart, login status across page refresh |
| Data fetching | fetch() from DummyJSON inside useEffect, loading + error states |

---

## Bonus Features (Pick 2)

Planned:
- **Loading Spinner** — shown while products are being fetched
- **Back to Top Button** — appears on scroll, smooth scroll to top

Optional if time allows:
- Dark Mode
- Toast Notifications

---

## Data Source

Primary: **DummyJSON Products API**
`https://dummyjson.com/products`

Products will be displayed as-is from the API. Category labels and product names are acceptable as generic electronics references. If time allows, a custom `db.json` with real kit names (Arduino Uno Starter Kit, ESP32 Dev Bundle, etc.) can replace or supplement the API data.

---

## What This Project Is NOT

- Not a backend project — no real server, no database
- Not using TypeScript
- Not using Tailwind or any CSS framework
- Not using Redux or Zustand — useState only (Context API is optional bonus)
- Not a full authentication system — localStorage only, no tokens or hashing

---

## Constraints & Context

- **Deadline:** 8 days from project start
- **Daily study time available:** 2–4 hours
- **Developer background:** Third-year Intelligent Systems Engineering student, knows JavaScript and has embedded systems experience (hence the electronics theme), completing IBM Full Stack JS Certificate
- **React level:** Revising/refreshing — not writing React daily yet
- **AI usage rule:** AI is used for review, unblocking, and explanation — not for generating full components. All code is written by the developer first.

---

## Definition of Done

The project is complete when:
- [ ] All pages are built and linked correctly
- [ ] Products fetch from API and display dynamically
- [ ] Auth flow works (sign up, sign in, logout, localStorage persistence)
- [ ] Cart works (add, remove, quantity, total, confirm order modal)
- [ ] Filter, search, and sort work on Products page
- [ ] FAQ accordion works
- [ ] Navbar updates dynamically on login/logout
- [ ] Responsive on mobile, tablet, laptop
- [ ] All buttons and modals function correctly
- [ ] CSS animations on cards, buttons, modals, and hover states
- [ ] Loading state shown during fetch
- [ ] 2 bonus features implemented