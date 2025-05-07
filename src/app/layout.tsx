import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load fonts
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Advantis | Data-Driven Remote Care",
  description: "Advantis provides technology-enabled support for patients at home, revolutionizing healthcare delivery with innovative solutions.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
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
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        {/* reCAPTCHA Script removed from layout; loaded client-side in RecaptchaWidget */}
        
        {/* Favicon setup */}
        <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon-32x32.png" sizes="180x180" />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T8NX742D8C"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T8NX742D8C');
        ` }} />
      </head>
      <body className="min-h-screen flex flex-col bg-neutral-100 font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
