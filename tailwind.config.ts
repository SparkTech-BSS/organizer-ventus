import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "ventus-primary": "rgba(0, 0, 0, 0.50)",
        "ventus-secondary": "#DB3535",
        "ventus-primary-darken": "#E8B804",
        "ventus-purple": "#873DFF",
        "ventus-gray-900": "#1F1F1F",
        "ventus-gray-800": "#8E8E93",
        "ventus-gray-700": "#AEAEB2",
        "ventus-gray-600": "#C7C7CC",
        "ventus-gray-500": "#D1D1D6",
        "ventus-gray-400": "#E5E5EA",
        "ventus-gray-300": "#F2F2F7",
        "ventus-subtext": "#EBEBF599",
        "ventus-yellow": "#FFCC4D",
        "ventus-pink": "#FF557E",
        "ventus-auxiliary-red": "#FF3B30",
        "ventus-auxiliary-yellow": "#FFCC00",
        "ventus-auxiliary-green": "#34C759",
        "ventus-disabled-color": "#3c3c432e",
        "ventus-text-gradient": "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 226.44%);",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xss: "0.625rem",
      },
      maxWidth: {
        container: "1200px",
        "container-padding": "1439px",
      },
      backgroundImage: {
        "hero-primary":"url('/phone.png')",
        "hero-partern":"url('/parterner-banner.png')",
        "gradient-primary": "linear-gradient(180deg, rgba(116, 116, 128, 0.18) 0%, rgba(116, 116, 128, 0.00) 100%)",
        "gridient-tools": "linear-gradient(178deg, rgba(0, 0, 0, 0.50) -35.98%, rgba(0, 0, 0, 0.00) 88.75%)",
        "gradient-partern": "linear-gradient(180deg, rgba(151, 71, 255, 0.11) 0%, rgba(151, 71, 255, 0.00) 100%)",
        "gradient-quest-fest": "linear-gradient(180deg, rgba(116, 116, 128, 0.18) 0%, rgba(116, 116, 128, 0.00) 100%)",
        "gradient-text": " linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 226.44%)",
        "gradient-partner": "linear-gradient(143deg, rgba(116, 116, 128, 0.18) 21.43%, rgba(116, 116, 128, 0.00) 38.89%)",
      },
      gridTemplateColumns: {
        "grid-events": "repeat(auto-fill, minmax(343px, 1fr))",
        "grid-events-responsive":
          "repeat(auto-fit, minmax(min(14rem, 100%), 1fr))",
        "comment-text": "auto 1fr auto",
        "step-form-progress": "auto 1fr auto 1fr auto 1fr auto",
      },
      zIndex: {
        "999": "999",
        "1000": "1000",
      },
      keyframes: {
        "slide-in": {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        "slide-down": {
          from: {
            transform: "translateX(-50%) translateY(200%)",
          },
          to: {
            transform: "translateX(-50%) translateY(10%) ",
          },
        },
        "slide-down-full": {
          from: {
            transform: "translateX(-50%) translateY(200%)",
          },
          to: {
            transform: "translateX(-50%) translateY(0%) ",
          },
        },
        "slide-in-category": {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(60px)",
          },
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },

      animation: {
        "slide-in-header": "slide-in 0.5s ease forwards",
        "slide-in-category": "slide-in-category 0.5s ease forwards",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slide-down 0.5s ease forwards",
        "slide-down-full": "slide-down-full 0.5s ease forwards",
      },

      screens: {
        1450: "1450px",
        992: "992px",
        container: { max: "1440px" },
        "x300": { max: "300px" },
        "x350": { max: "350px" },
        "x450": { max: "450px" },
        "x640": { max: "640px" },
        "x880": { max: "880px" },
        "x1024": { max: "1024px" },
        "x1100": { max: "1100px" },
        "x1180": { max: "1180px" },
        "x1195": { max: "1195px" },
        "x1200": { max: "1200px" },
        "x1215": { max: "1215px" },
        "x1230": { max: "1230px" },

        "xl880": { min: "880px" },
        "xl1025": { min: "1025px" },
        "xl1100": { min: "1100px" },
        "xl1180": { min: "1195px" },
        "xl1200": { min: "1200px" },
        "xl1440": { min: "1440px" },
        "categorieis-break": { max: "1263px" },
      },
    },
  },
  plugins: [],
}
export default config
