import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
          fontFamily: {
      kumbh: ['Kumbh Sans', 'sans-serif'],
    },
     screens: {
        '2xl-plus': '2000px',  
      },
    },
  },
  plugins: [],
} satisfies Config;
