/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "text-slide": "text-slide 35s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "slow-pulse": "slow-pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      keyframes: {
        "text-slide": {
          "0%, 5.71%": {
            transform: "translateY(0%)",
          },
          "7.14%, 12.85%": {
            transform: "translateY(-7.14%)",
          },
          "14.28%, 19.99%": {
            transform: "translateY(-14.28%)",
          },
          "21.42%, 27.13%": {
            transform: "translateY(-21.42%)",
          },
          "28.56%, 34.27%": {
            transform: "translateY(-28.56%)",
          },
          "35.7%, 41.41%": {
            transform: "translateY(-35.7%)",
          },
          "42.84%, 48.55%": {
            transform: "translateY(-42.84%)",
          },
          "49.98%, 55.69%": {
            transform: "translateY(-49.98%)",
          },
          "57.12%, 62.83%": {
            transform: "translateY(-57.12%)",
          },
          "64.26%, 69.97%": {
            transform: "translateY(-64.26%)",
          },
          "71.4%, 77.11%": {
            transform: "translateY(-71.4%)",
          },
          "78.54%, 84.25%": {
            transform: "translateY(-78.54%)",
          },
          "85.68%, 91.39%": {
            transform: "translateY(-85.68%)",
          },
          "92.82%, 100%": {
            transform: "translateY(-92.82%)",
          },
        },
        "slow-pulse": {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
      fontFamily: {
        caveat: ["Caveat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
