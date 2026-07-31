// Trigger deployment: 2026-04-12
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { Navbar, ScrollToTop, Footer } from "@/components/layout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Dr. Prabanand S C | AI Researcher & Associate Professor",
  description: "Portfolio of Dr. Prabanand S C - Ph.D., Associate Professor atBIT Sathyamangalam. Expert in AI, Deep Learning, Computer Vision, and Blockchain.",
  keywords: ["AI researcher", "machine learning", "deep learning", "computer vision", "blockchain", "assistant professor", "Bannari Amman Institute of Technology", "Dindigul", "Tamil Nadu", "research publications"],
  authors: [{ name: "Dr. Prabanand S C" }],
  creator: "Dr. Prabanand S C",
  publisher: "Dr. Prabanand S C",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scprabanand.github.io/portfolio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Prabanand S C | AI Researcher & Associate Professor",
    description: "Ph.D. and Associate Professor specializing in AI, Deep Learning, and Blockchain technology.",
    url: "https://scprabanand.github.io/portfolio",
    siteName: "Dr. Prabanand S C Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Prabanand S C Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Prabanand S C | AI Researcher & Associate Professor",
    description: "Associate Professor specializing in AI, Computer Vision, and Blockchain.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} font-body antialiased bg-cream text-navy min-h-screen`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Prabanand S C",
              "jobTitle": "Associate Professor",
              "affiliation": "Bannari Amman Institute of Technology",
              "url": "https://scprabanand.github.io/portfolio",
              "sameAs": [
                "https://linkedin.com/in/scprabanand",
                "https://github.com/scprabanand",
                "https://scholar.google.com/citations?user=your_id"
              ]
            })
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
