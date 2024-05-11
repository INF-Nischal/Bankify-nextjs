import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font_inter" });
const ibmPlexSErif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font_ibm_plex_serif",
});

export const metadata: Metadata = {
  title: "Horizon Bankify",
  description: "Horizon Bankify - The future of banking is here",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSErif.variable}`}>
        {children}
      </body>
    </html>
  );
}
