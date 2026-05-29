import localFont from "next/font/local";

export const geist = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-face-body",
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

export const jetbrainsMono = localFont({
  src: "../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-face-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

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
