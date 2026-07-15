import localFont from "next/font/local";

export const tiempos = localFont({
  src: [
    {
      path: "../fonts/test-tiempos-text-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-face-title",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const geist = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-face-body",
  display: "swap",
  weight: "100 900",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const geistMono = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-face-mono",
  display: "swap",
  weight: "100 900",
  fallback: ["SFMono-Regular", "Menlo", "monospace"],
});
