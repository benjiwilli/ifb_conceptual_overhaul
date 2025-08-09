import { defineConfig } from "tailwindcss"

export default defineConfig({
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1.25rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
        screens: {
          "2xl": "1280px",
        },
      },
      colors: {
        background: "oklch(21% 0.03 260 / 1)", // #0B1120
        surface: "oklch(24% 0.03 260 / 1)", // #0E1624
        primary: "oklch(61% 0.22 262 / 1)", // #2563EB-ish
        accent: "oklch(79% 0.17 234 / 1)", // #29B6FF-ish
        ring: "oklch(79% 0.17 234 / 0.5)",
        border: "oklch(28% 0.02 260 / 1)",
        input: "oklch(28% 0.02 260 / 1)",
        card: "oklch(24% 0.03 260 / 1)",
        "card-foreground": "oklch(95% 0.01 260 / 1)",
        muted: "oklch(26% 0.02 260 / 1)",
        "muted-foreground": "oklch(70% 0.03 260 / 1)",
        popover: "oklch(24% 0.03 260 / 1)",
        "popover-foreground": "oklch(95% 0.01 260 / 1)",
        secondary: "oklch(28% 0.03 260 / 1)",
        "secondary-foreground": "oklch(92% 0.01 260 / 1)",
        destructive: "oklch(58% 0.22 22 / 1)",
        "destructive-foreground": "oklch(98% 0.01 260 / 1)",
        foreground: "oklch(96% 0.01 260 / 1)",
        // slate scale (subset)
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1f2937",
          900: "#0f172a",
        },
      },
      borderRadius: {
        lg: "16px",
        md: "14px",
        sm: "12px",
        xs: "10px",
      },
      boxShadow: {
        soft: "0 8px 24px -16px oklch(61% 0.22 262 / 0.35)",
        lift: "0 10px 30px -12px oklch(61% 0.22 262 / 0.4)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.05)",
        outline: "0 0 0 1px rgba(255,255,255,0.06)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
        mono: ["var(--font-mono, ui-monospace)"],
      },
    },
  },
  plugins: [],
})
