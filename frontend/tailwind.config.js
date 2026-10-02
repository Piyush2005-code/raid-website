/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Maps to the CSS variables defined in index.css
        // Usage: className="font-head" / "font-body" / "font-mono"
        head:  ['Space Grotesk', 'system-ui', 'sans-serif'],
        body:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],  // overrides Tailwind default sans
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "secondary": "#000000",
          "accent": "#000000",
          "neutral": "#000000",
          "base-100": "#000000", // Set background color to black
          "info": "#000000",
          "success": "#000000",
          "warning": "#000000",
          "error": "#000000",
        },
      },
    ],
  },
}
