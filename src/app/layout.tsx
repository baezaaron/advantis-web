import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load fonts
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advantis.care"),
  title: "Advantis Care | Member Engagement & Social Care Operations",
  description: "Advantis helps health plans, care networks, and community partners engage hard-to-reach members, coordinate social-care services, and document closed-loop outcomes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Advantis Care | Member Engagement & Social Care Operations",
    description: "Advantis helps health plans, care networks, and community partners engage hard-to-reach members, coordinate social-care services, and document closed-loop outcomes.",
    url: "/",
    siteName: "Advantis Care",
    type: "website",
    images: [
      {
        url: "/images/Advantis-Logo-200.png",
        alt: "Advantis Care logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advantis Care | Member Engagement & Social Care Operations",
    description: "Advantis helps health plans, care networks, and community partners engage hard-to-reach members, coordinate social-care services, and document closed-loop outcomes.",
    images: ["/images/Advantis-Logo-200.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} scroll-smooth`}>
      <head>
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="kszwebzvzwcerfejsau1js6whcddak" />
        {/* reCAPTCHA Script removed from layout; loaded client-side in RecaptchaWidget */}
        
        {/* Favicon setup */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-T8NX742D8C" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T8NX742D8C');
        ` }} />
      </head>
      <body className={`min-h-screen flex flex-col bg-neutral-100 antialiased ${lora.variable} ${inter.variable} font-sans`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
