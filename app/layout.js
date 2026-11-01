import "animate.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollAnimate from "@/components/ScrollAnimate";

export const metadata = {
  metadataBase: new URL("https://www.zoriellehotels.com"),
  title: "Zorielle Hospitality | Where Vision Meets Hospitality",
  description:
    "Zorielle Hospitality is a hospitality management and development company dedicated to creating, developing and managing exceptional hospitality destinations.",
  icons: {
    icon: [
      { url: "/assets/favicon.jpg" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/assets/favicon.jpg",
    apple: "/assets/favicon.jpg",
  },
  openGraph: {
    title: "Zorielle Hospitality | Where Vision Meets Hospitality",
    description:
      "Zorielle Hospitality is a hospitality management and development company dedicated to creating, developing and managing exceptional hospitality destinations.",
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
    title: "Zorielle Hospitality | Where Vision Meets Hospitality",
    description:
      "Zorielle Hospitality is a hospitality management and development company dedicated to creating, developing and managing exceptional hospitality destinations.",
    images: ["/assets/zorielle-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
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
