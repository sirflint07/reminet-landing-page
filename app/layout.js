import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "REMINET",
  description: "REMINET is a platform for developers to learn, share, and grow.",
  icons: "/img/logo.png",
  url: "https://reminet.vercel.app",
  type: "website",
  siteName: "REMINET",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6f5f9]`}
      >
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
