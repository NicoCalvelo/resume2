/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.0rem",
        "5xl": "3.0rem"
      },
      colors: {
        dark: {
          background: {
            color: "#28232E",
            light: "#3B3545",
          },
          text: {
            color: "#DDE0E4",
            light: "#A3A3A3",
          },
        },
        text: {
          color: "#141514",
          light: "#50514F",
        },
        background: {
          color: "#d7c0a9",
          dark: "#D8CBBD",
        },
        primary: {
          light: "#50514F",
          color: "#141514",
          dark: "#141514",
          on: "#ffffff",
        },
        secondary: {
          light: "#7AC2E1",
          color: "#247BA0",
          dark: "#174D64",
          on: "#ffffff",
        },
        info: {
          light: "#93C5FD",
          color: "#2563EB",
          dark: "#1E40AF",
          on: "#fff",
        },
        warning: {
          light: "#FFF3C2",
          color: "#FFE066",
          dark: "#A38300",
          on: "#141514",
        },
        error: {
          light: "#FAC7C6",
          color: "#F25F5C",
          dark: "#960F0D",
          on: "#141514",
        },
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" })
],
};
