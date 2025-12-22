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
  title: {
    default: "Pugofka - Digital Growth Architects",
    template: "%s | Pugofka",
  },
  description: "Highload systems, E-commerce, and Startup MVP development since 2011. St. Petersburg.",
  keywords: ["разработка", "highload", "e-commerce", "MVP", "стартапы", "Битрикс24", "Санкт-Петербург"],
  authors: [{ name: "Pugofka" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://pugofka.com",
    siteName: "Pugofka",
    title: "Pugofka - Digital Growth Architects",
    description: "Highload systems, E-commerce, and Startup MVP development since 2011.",
    images: [
      {
        url: "https://pugofka.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Pugofka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pugofka - Digital Growth Architects",
    description: "Highload systems, E-commerce, and Startup MVP development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // google: "ваш_код_верификации", // Добавьте когда будет
    // yandex: "ваш_код_верификации",
  },
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
