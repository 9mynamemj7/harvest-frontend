/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E6F1EE",
          100: "#B0D4CB",
          200: "#8ABFB2",
          300: "#54A28E",
          400: "#339079",
          500: "#007457",
          600: "#006A4F",
          700: "#00523E",
          800: "#004030",
          900: "#003125",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#FCFCFC",
          300: "#F5F5F5",
          400: "#F0F0F0",
          500: "#D9D9D9",
          600: "#BFBFBF",
          700: "#8C8C8",
          800: "#595959",
          900: "#454545",
          1000: "#262626",
          1100: "#1F1F1F",
          1200: "#141414",
          1300: "#000000",
        },
      },
      // fontFamily: {
      //   Inter: ["Inter", "sans-serif"],
      //   NotoSansKRRegular: ["NotoSansKR-Regular", "sans-serif"],
      //   NotoSansKRBold: ["NotoSansKR-Bold", "sans-serif"],
      // },
      fontFamily: {
        "noto-sans-kr": "Noto Sans KR",
        inter: "Inter",
      },
      fontSize: {
        sm: "0.625rem",
        base: "0.875rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5625rem",
        "3xl": "1.9375rem",
        "4xl": "2.4375rem",
        "5xl": "3.0625rem",
        "6xl": "3.8125rem",
      },
      boxShadow: {
        "shadow-sm": "0px 2px 2px 0px rgba(0,82,62,0.08)",
        "shadow-md": "0px 2px 4px 4px rgba(0,82,62,0.2)",
        "shadow-lg": "0px 2px 8px 4px rgba(0,82,62,0.25)",
      },
    },
  },
  plugins: [],
};
