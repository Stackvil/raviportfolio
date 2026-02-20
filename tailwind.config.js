/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF4D00", // Portilo Orange
                dark: "#050505", // Deep Black/Gray
                light: "#F5F5F5",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'], // Keep Outfit for bold headings
                mono: ['monospace'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
