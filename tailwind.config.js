/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B00CC",
        primaryDark: "#150099",
        primaryDarkest: "#0e045fff",
        accent: "#FBBF24", // warm yellow
        success: "#10B981", // emerald
        success: "#036444ff", // emerald
        danger: "#EF4444", // red
        neutral: "#1F2937", // gunmetal/charcoal
        txtWhite: "#fff", // light text
        backgroundWhite: "#fff", // light text
        background: "#F9FAFB", // light background
        // Yellow

         lightAccent: "#FFFBEB",
        softAccent: "#FDE68A",
        accent: "#FBBF24",       // your main accent
        goldenAccent: "#F59E0B",
        deepAccent: "#D97706",

        // Access Bank Color

       highlights: "#F07C00",
       buttons: "#F07C00",
       navigation: "#002E6D",
       headers: "#002E6D" 
      },
    },
  },
  plugins: [],
};
