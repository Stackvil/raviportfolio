# Premium Developer Portfolio

A modern, high-performance developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Vite + React**: Blazing fast development and production build.
- 🎨 **Tailwind CSS**: Utility-first styling with custom config.
- 🎭 **Framer Motion**: Smooth animations and micro-interactions.
- 🧩 **Component Architecture**: Reusable UI components (Buttons, Cards, Sections).
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop.
- 🌙 **Dark Mode**: Premium dark theme by default.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── layout/     # Navbar, Footer
│   └── ui/         # Button, Card, Section, Badge
├── sections/       # Page sections (Hero, About, etc.)
├── constants/      # Static data (links, projects, etc.)
├── hooks/          # Custom hooks (useTypewriter)
└── App.jsx         # Main application entry
```

## Customization

- Update **`src/constants/index.js`** to change links, projects, and text.
- Modify **`tailwind.config.js`** to adjust colors and fonts.
