<img src="public/little-lemon.webp" alt="Little Lemon Preview" width="100%" />

**Live:** https://little-lemon-pi-six.vercel.app

# Little Lemon Capstone

A friendly, modern web app for a fictional Mediterranean restaurant. It highlights the brand story,
specials, testimonials, and a complete reservation flow.

---

## ✨ What this project does

- **Showcases the restaurant** with Hero, Specials, Testimonials, and About sections.
- **Lets users reserve a table** with validation and confirmation.
- **Fetches availability** from a mock API to avoid double booking.
- **Adds subtle motion** with reusable reveal animations.

---

## 🧰 Tech Stack

<div id="header" align="left">
  <img decoding="async" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />
  <img decoding="async" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="react router" />
  <img decoding="async" src="https://img.shields.io/badge/Formik-2563EB?style=for-the-badge&logo=formik&logoColor=white" alt="formik" />
  <img decoding="async" src="https://img.shields.io/badge/Yup-7B61FF?style=for-the-badge&logo=youtube&logoColor=white" alt="yup" />
  <img decoding="async" src="https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white" alt="css modules" />
  <img decoding="async" src="https://img.shields.io/badge/Create_React_App-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white" alt="create react app" />
  <img decoding="async" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="jest" />
  <img decoding="async" src="https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white" alt="testing library" />
</div>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+

### Install

```bash
npm install
```

### Run the app

```bash
npm start
```

Open http://localhost:3000 in your browser.

### Run tests

```bash
npm test -- --watchAll=false
```

---

## 🧩 Booking API (Mock)

Loaded from `public/index.html`:

- `fetchAPI(date)` → returns available booking times for the given date.
- `submitAPI(formData)` → returns `true` when the booking is submitted.

---

## 🗂 Project Structure (high level)

```
src/
  components/
    Layout/        # Header, Nav, Main, Footer
    Pages/Booking/ # Booking page and subcomponents
    UI/            # Reusable UI sections (Hero, Specials, etc.)
  styles/          # Global styles and CSS variables
public/
```

---

## ♿ Accessibility Notes

- Inputs use ARIA attributes where needed.
- Focus states are visible.
- Animations respect `prefers-reduced-motion`.

---

## 📜 Scripts

- `npm start` - run development server
- `npm test -- --watchAll=false` - run unit tests
- `npm run build` - build production bundle

---

## 📄 License

This project is for educational purposes.
