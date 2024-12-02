import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'red-hat': ['"Red Hat Display"', 'sans-serif'], // Add the font family here
        'epilogue': ['Epilogue', 'sans-serif'],
        'clash-display' : ['clash-display', 'sans-serif']
      },
    },
  },
  plugins: [],
};

export default config;
