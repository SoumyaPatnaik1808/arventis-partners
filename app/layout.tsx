import type { Metadata } from "next";
import "./globals.css";
import ScrollProvider from "./components/ScrollProvider";
import IntroManager from "./components/IntroManager";

export const metadata: Metadata = {
  title: "Arventis  Partners",
  description: "Elite advisory for the architecture of international commerce and the preservation of legal integrity. Navigating complexity with surgical precision and unwavering advocacy.",
  keywords: ["Consulting", "Strategy", "Legal Counsel", "Sovereign Operations", "Corporate Advisory", "Arventis"],
  authors: [{ name: "Arventis & Partners" }],
  icons: {
    icon: "/favicon.png?v=4",
    shortcut: "/favicon.png?v=4",
    apple: "/favicon.png?v=4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased selection:bg-[#c5a880] selection:text-[#081226]"
    >
      <head>
        <link rel="icon" href="/favicon.png?v=4" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png?v=4" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png?v=4" />
      </head>
      <body className="min-h-full bg-[#081226] text-white flex flex-col font-sans">
        <IntroManager />
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
