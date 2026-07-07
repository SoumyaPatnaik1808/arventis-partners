import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollProvider from "./components/ScrollProvider";
import DisclaimerModal from "./components/DisclaimerModal";
import Preloader from "./components/Preloader";

const graphik = localFont({
  src: '../public/fonts/Graphik-Medium-Web.woff2',
  variable: '--font-graphik',
  display: 'swap',
  weight: '500',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arventispartners.com"),
  title: {
    default: "Arventis Partners | Strategy & Legal Advisory",
    template: "%s | Arventis Partners",
  },
  description:
    "Arventis Partners is an elite dual-discipline firm combining strategy consulting and legal advocacy across corporate litigation, arbitration, regulatory compliance, and GTM expansion.",
  keywords: [
    "Arventis Partners",
    "Strategy Consulting",
    "Legal Advisory",
    "Corporate Advocacy",
    "Arbitration Lawyers",
    "High Court Advocates",
    "Supreme Court Lawyers",
    "GTM Strategy",
    "Hyderabad Law Firm",
    "Lucknow Law Firm",
    "Cuttack Law Firm",
    "Shimla Law Firm",
    "Commercial Dispute Resolution",
  ],
  authors: [{ name: "Arventis Partners", url: "https://arventispartners.com" }],
  creator: "Arventis Partners",
  publisher: "Arventis Partners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Arventis Partners | Strategy & Legal Advisory",
    description: "Elite advisory for the architecture of international commerce and the preservation of legal integrity.",
    url: "https://arventispartners.com",
    siteName: "Arventis Partners",
    images: [
      {
        url: "/logo-extended.png",
        width: 1200,
        height: 630,
        alt: "Arventis Partners Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arventis Partners | Strategy & Legal Advisory",
    description: "Elite advisory for international commerce and legal advocacy.",
    images: ["/logo-extended.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://arventispartners.com/#organization",
        "name": "Arventis Partners",
        "url": "https://arventispartners.com",
        "logo": "https://arventispartners.com/logo-extended.png",
        "description": "Elite dual-discipline firm combining strategy consulting and legal advocacy.",
        "slogan": "Where Strategy meets standing",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "House No 8-3-A/413, Krishna Nagar, Yusufguda",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "110, First Floor Durgma Tower, Lalbagh",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Plot No C/71, Sector 8, CDA",
            "addressLocality": "Cuttack",
            "addressRegion": "Odisha",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Anoop Sood Building, Paras Dass Gardan, Near CPRI",
            "addressLocality": "Shimla",
            "addressRegion": "Himachal Pradesh",
            "postalCode": "171001",
            "addressCountry": "IN"
          }
        ],
        "founder": [
          { "@type": "Person", "name": "Suman Thakur", "jobTitle": "Founding Partner - Legal Practice" },
          { "@type": "Person", "name": "Yash Thakur", "jobTitle": "Founding Partner" },
          { "@type": "Person", "name": "Sweta Verma", "jobTitle": "Founding Partner" },
          { "@type": "Person", "name": "Adarsh Kashyap", "jobTitle": "Founding Partner" },
          { "@type": "Person", "name": "Anshuman Mohanty", "jobTitle": "Strategy Consulting Practice Lead" }
        ],
        "areaServed": ["Delhi", "Mumbai", "Pune", "Shimla", "Chandigarh", "Kolkata", "Hyderabad", "Lucknow", "Cuttack", "GCC", "UK", "US"],
        "sameAs": [
          "https://linkedin.com",
          "https://twitter.com",
          "https://facebook.com",
          "https://youtube.com"
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`h-full antialiased selection:bg-[#fcbe03] selection:text-[#000000] ${graphik.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#000000] text-white flex flex-col font-sans">
        <Preloader />
        <ScrollProvider>
          {children}
        </ScrollProvider>
        <DisclaimerModal />
      </body>
    </html>
  );
}
