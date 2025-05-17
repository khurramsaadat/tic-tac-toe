import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic Tac Toe Game",
  description: "A modern Tic Tac Toe game with multiple game modes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          <main className="flex-grow flex items-center justify-center">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
