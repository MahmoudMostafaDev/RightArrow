import localFont from "next/font/local";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

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
  title: "RightArrow",
  description: "Premium Silkscreen Printing Materials for Professional Results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative `}
      >
        <Header className="lg:container mx-auto" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
