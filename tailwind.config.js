/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse, #0033FF 40%, #001f9960 65%)',
        'custom-linear': 'linear-gradient(to right, #CAD0D9 15%, #D3D8DC 100%)',
      },
      boxShadow: {
        'bottom-right': '8px 8px 4px rgba(255, 213, 33, 90)', 
      },
      fontFamily: {
        montserrat: ["Montserrat", 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
