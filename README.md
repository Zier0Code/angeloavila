# Angelo Avila – Developer Portfolio

This is a modern, responsive developer portfolio built with **Next.js**, **React**, and **Tailwind CSS**. It showcases projects, skills, and contact information in a clean, interactive layout.

## ✨ Features

- **Hero Section:** Introduction with profile image and download CV button.
- **About Me:** Brief background and experience.
- **Projects:** Featured projects with tech stack, code, and live demo links.
- **Skills:** Technologies and tools displayed as badges.
- **Contact:** Simple contact section.
- **Dark Mode:** Toggle between light and dark themes.
- **Sticky Navbar:** Highlights current section as you scroll.
- **Responsive Design:** Looks great on all devices.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Zier0Code/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## 🗂️ Project Structure

```
/app
  /pages
    hero.tsx
    aboutme.tsx
    projects.tsx
    skills.tsx
    contact.tsx
    footer.tsx
  page.tsx
/components
  topbar.tsx
  theme-toggle.tsx
  ui/
    badge.tsx
    button.tsx
    card.tsx
/public
  /images
  /pdf
    Avila_Resume.pdf
```

## 🛠️ Customization

- **Projects:** Edit `app/pages/projects.tsx` to add or update your projects.
- **Skills:** Edit `app/pages/skills.tsx` to update your tech stack.
- **Profile Image:** Replace `/public/images/me.jpg` with your own.
- **Resume:** Replace `/public/pdf/Avila_Resume.pdf` with your own CV.

## 📦 Built With

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Angelo Avila**
