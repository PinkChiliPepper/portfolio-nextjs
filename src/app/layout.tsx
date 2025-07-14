import Menu from "@/components/Menu";
import type { Metadata } from "next";
import { Roboto, Rubik } from "next/font/google";
import "./globals.css";

const bodyFont = Roboto({
  variable: "--font-bodies",
  subsets: ["latin"],
});

const headerFont = Rubik({
  variable: "--font-headers",
  subsets: ["latin"],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Portfolio Jessie van den Akker",
  description: "Portfolio Jessie van den Akker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headerFont.variable} antialiased`}
      >
        <Menu />
        <main>
          <div className="mx-40 my-20">
            {children}
          </div>
        </main>
        {/* <footer>Footer</footer> */}
      </body>
    </html>
  );
}
