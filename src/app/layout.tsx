import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Kuzin Artem - Frontend Developer Portfolio",
  description: "Student's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${montserrat.variable}  antialiased`}
        >
          <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
