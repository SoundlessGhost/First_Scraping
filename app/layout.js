// app/layout.js
import "./globals.css";

import { Work_Sans } from "next/font/google";
import { NavigationNavbar } from "@/components/navigation-navbar";
import Footer from "@/components/footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  title: "First Scraping | Web Data Expert",
  description: "Bypass bot protection and extract web data easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} font-sans antialiased`}>
        <NavigationNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
