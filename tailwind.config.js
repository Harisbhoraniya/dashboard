module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
      },

      // 🔹 OP dot animation
      keyframes: {
        "dot-pop": {
          "0%": { transform: "scale(0.4)", opacity: "0" },
          "50%": { transform: "scale(1.3)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "dot-pop": "dot-pop 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
