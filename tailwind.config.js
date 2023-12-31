/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,js,jsx,ts}"],
  theme: {
    colors: {
      white: {
        DEFAULT: "#fff",
        100: "#F4F4F4",
        200: "#E5E5E5",
        300: "#F5F5F5",
        400: "#7D7D7D",
        500: "#D7D4D4",
        600: "#F7EDE9",
        700: "#D1D1D1",
        800: "#CBD5E0",
        900: "#A5ACB8",
      },

      primary: {
        DEFAULT: "#8b5cf5",
        0: "#E5F1FB",
        50: "#f5f3ff",
        100: "#ede8fd",
        200: "#ddd6fe",
        300: "#c4b4fd",
        400: "#a68bfa",
        600: "#7c3bec",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4b1e94",
        950: "#000711",
      },

      secondary: {
        DEFAULT: "#6b7280",
        0: "#FCFCFC",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e4e7eb",
        300: "#d1d5da",
        400: "#9ca3af",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#171717",
      },
      tertiary: {
        DEFAULT: "#10b981",
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },
      danger: {
        DEFAULT: "#f43f5e",
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
      },
      error: {
        DEFAULT: "#ef4444",
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      success: {
        DEFAULT: "#22c55e",
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      warning: {
        DEFAULT: "#197316",
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
      },
      muted: {
        DEFAULT: "#737373",
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      info: {
        DEFAULT: "#0ea5e9",
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },
      light: {
        DEFAULT: "#78716c",
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
      },

      rose: {
        DEFAULT: "#f43f5e",
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
      },

      pink: {
        DEFAULT: "#ec4899",
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
      },

      fuchsia: {
        DEFAULT: "#d946ef",
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
      },

      purple: {
        DEFAULT: "#a855f7",
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
      },

      violet: {
        DEFAULT: "#8b5cf6",
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
      },

      indigo: {
        DEFAULT: "#6366f1",
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },

      blue: {
        DEFAULT: "#3b82f6",
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },

      lightBlue: {
        DEFAULT: "#0ea5e9",
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },

      darkBlue: {
        DEFAULT: "#0377e5",
        50: "#dbf3ff",
        100: "#addcfe",
        200: "#7cc2ff",
        300: "#4aa9fe",
        400: "#1c91ff",
        600: "#005cb4",
        700: "#004382",
        800: "#002851",
        900: "#010e21",
      },

      cyan: {
        DEFAULT: "#06b6d4",
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },

      teal: {
        DEFAULT: "#14b8a6",
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
      },

      emerald: {
        DEFAULT: "#10b981",
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },

      green: {
        DEFAULT: "#22c55e",
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },

      lime: {
        DEFAULT: "#84cc16",
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
      },

      yellow: {
        DEFAULT: "#eab308",
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
      },

      amber: {
        DEFAULT: "#f59e0b",
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
      },

      orange: {
        DEFAULT: "#f97316",
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
      },

      red: {
        DEFAULT: "#EF4444",
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        600: "#DC2626",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D",
      },

      warmGray: {
        DEFAULT: "#78716C",
        50: "#FAFAF9",
        100: "#F5F5F4",
        200: "#E7E5E4",
        300: "#D6D3D1",
        400: "#A8A29E",
        600: "#57534E",
        700: "#44403C",
        800: "#292524",
        900: "#1C1917",
      },

      trueGray: {
        DEFAULT: "#737373",
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },

      gray: {
        DEFAULT: "#71717A",
        50: "#FAFAFA",
        100: "#F4F4F5",
        200: "#E4E4E7",
        300: "#D4D4D8",
        400: "#A1A1AA",
        600: "#52525B",
        700: "#3F3F46",
        800: "#27272A",
        900: "#18181B",
      },

      coolGray: {
        DEFAULT: "#6B7280",
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },

      blueGray: {
        DEFAULT: "#64748b",
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
      },

      dark: {
        DEFAULT: "#a1a1aa",
        50: "#18181b",
        100: "#27272a",
        200: "#3f3f46",
        300: "#52525b",
        400: "#71717a",
        600: "#d4d4d8",
        700: "#e4e4e7",
        800: "#f4f4f5",
        900: "#FAFAFA",
      },
    },

    fontFamily: {
      body: ["SFPro-Regular", "sans"],
      display: ["SFPro-Regular", "sans"],
      light: ["SFPro-Light", "sans"],
      heavy: ["SFPro-Heavy", "sans"],
      heading: ["SFPro-Bold1", "sans"],
      Bold: ["SFPro-Bold1", "sans"],
      medium: ["SFPro-medium-webfont", "sans"],
      semibold: ["SFPro-Semibold", "sans"],
    },

    fontSize: {
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
      "7xl": "72px",
      "8xl": "96px",
      "9xl": "128px",
    },

    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",

          "@screen sm": {
            maxWidth: "370px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          },
          "@screen md": {
            maxWidth: "370px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          },
          "@screen lg": {
            maxWidth: "768px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          },
          "@screen xl": {
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          },
        },
      });
    },
  ],
};
