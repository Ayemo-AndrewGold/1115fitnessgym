import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#111317",
        surface: "#111317",
        "surface-container-lowest": "#0c0e12",
        "surface-container-low": "#1a1c20",
        "surface-container": "#1e2024",
        "surface-container-high": "#282a2e",
        "surface-container-highest": "#333539",
        "surface-variant": "#333539",
        "on-surface": "#e2e2e8",
        "on-surface-variant": "#e4beb8",
        primary: "#ffb4aa",
        "primary-container": "#b31312",
        "on-primary": "#690003",
        "secondary-container": "#8f0e0e",
        outline: "#ab8984",
        "outline-variant": "#5b403c",
      },
      borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem" },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        gutter: "1.25rem",
        margin: "2rem",
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-grotesk)", "sans-serif"],
      },
      // Weights are pushed up (500-700) so every line stays readable on dark backgrounds.
      fontSize: {
        "display-hero": ["56px", { lineHeight: "60px", letterSpacing: "0.02em", fontWeight: "700" }],
        "display-hero-mobile": ["38px", { lineHeight: "42px", letterSpacing: "0.02em", fontWeight: "700" }],
        "headline-xl": ["40px", { lineHeight: "46px", letterSpacing: "0.02em", fontWeight: "700" }],
        "headline-xl-mobile": ["30px", { lineHeight: "36px", letterSpacing: "0.02em", fontWeight: "700" }],
        "headline-lg": ["28px", { lineHeight: "34px", letterSpacing: "0.01em", fontWeight: "700" }],
        "headline-md": ["22px", { lineHeight: "28px", letterSpacing: "0.01em", fontWeight: "600" }],
        "title-sm": ["16px", { lineHeight: "22px", letterSpacing: "0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "label-caps": ["14px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "700" }],
        "label-numeric": ["13px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};

export default config;
