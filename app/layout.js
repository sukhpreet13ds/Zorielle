import "animate.css";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollAnimate from "@/components/ScrollAnimate";

export const metadata = {
  metadataBase: new URL("https://www.zoriellehotels.com"),
  title: "Zorielle Hospitality | Hotel Management & Development",
  description:
    "Zorielle Hospitality specializes in hotel management, luxury hotel development, destination resorts, serviced residences, and wellness retreats.",
  icons: {
    icon: [
      { url: "/assets/favicon.jpg" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/assets/favicon.jpg",
    apple: "/assets/favicon.jpg",
  },
  openGraph: {
    title: "Zorielle Hospitality | Hotel Management & Development",
    description:
      "Zorielle Hospitality specializes in hotel management, luxury hotel development, destination resorts, serviced residences, and wellness retreats.",
    url: "https://www.zoriellehotels.com",
    siteName: "Zorielle Hospitality",
    images: [
      {
        url: "/assets/zorielle-logo.png",
        width: 1200,
        height: 630,
        alt: "Zorielle Hospitality",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorielle Hospitality | Hotel Management & Development",
    description:
      "Zorielle Hospitality specializes in hotel management, luxury hotel development, destination resorts, serviced residences, and wellness retreats.",
    images: ["/assets/zorielle-logo.png"],
  },
  verification: {
    google: "EkNhAW7ekmf4zKqdPqzDFbt41DTMvh-yutUpkwoMnck",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="EkNhAW7ekmf4zKqdPqzDFbt41DTMvh-yutUpkwoMnck"
        />
        {/* Google Tag Manager / Google Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-M4NG5TLZ"
          strategy="afterInteractive"
        />
        <Script id="google-gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4NG5TLZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollAnimate />
        <Navbar />
        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>
        <Footer />
        
        <FloatingActions />
      </body>
    </html>
  );
}
