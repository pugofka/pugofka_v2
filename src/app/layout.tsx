import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { UIProvider } from "@/context/UIContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Pugofka - Digital Growth Architects",
  description: "Highload systems, E-commerce, and Startup MVP development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <UIProvider>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </UIProvider>
      </body>
    </html>
  );
}
