import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
      "./storage/framework/views/*.php",
      "./resources/views/**/*.blade.php",
      "node_modules/preline/dist/*.js",
    ],
  
    theme: {
      extend: {
        colors: {
          customBlue: '#1E3A8A', // Custom blue for the table header
          customGray: '#F3F4F6', // Custom gray for alternating rows
        },
        fontFamily: {
          sans: ["Figtree", ...defaultTheme.fontFamily.sans], // Custom font for sans-serif
        },
      },
    },
  
    darkMode: 'class',
    plugins: [require('@tailwindcss/forms'), require("preline/plugin")],
  };