import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import { ActiveThemeProvider } from "@/components/active-theme"
import "./retro-globals.css";

const RetroSans = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Yurika",
  description: "Blockchain Innovation Program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${RetroSans.className} `}
      >
        <ActiveThemeProvider>
          {children}
        </ActiveThemeProvider>
      </body>
    </html>
  );
}
