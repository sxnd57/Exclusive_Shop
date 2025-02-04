/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
            primary: {
               1: "var(--color-primary-1)",
            },
            secondary: {
               1: "var(--color-secondary-1)",
               2: "var(--color-secondary-2)",
               3: "var(--color-secondary-3)",
            },
            text: {
               1: "var(--color-text-1)",
               2: "var(--color-text-2)",
               3: "var(--color-text-3)",
            },
            button: {
               1: "var(--color-button-1)",
               2: "var(--color-button-2)",
               hover: {
                  1: "var(--color-button-hover-1)",
                  2: "var(--color-button-hover-2)",
               },
            },
         },
         container: {
            center: true,
            padding: "1rem",
         },
         screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1400px",
         },
      },
   },
   plugins: [],
};
