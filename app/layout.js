import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata = {
  title: "Zorielle Hospitality | Where Vision Meets Hospitality",
  description:
    "Zorielle Hospitality is a hospitality management and development company dedicated to creating, developing and managing exceptional hospitality destinations.",
  icons: {
    icon: "/assets/zorielle.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
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
