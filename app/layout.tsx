import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TicTacToe",
  description: "Play Tic-tac-toe with friends or challenge our AI!",
  metadataBase: new URL('https://khurram-tictactoe.netlify.app'),
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Tic Tac Toe',
    description: 'Play Tic Tac Toe with friends or challenge our AI!',
    images: [{
      url: 'https://khurram-tictactoe.netlify.app/hero-background.png',
      width: 1200,
      height: 1200,
      alt: 'Tic Tac Toe Game Preview',
    }],
    type: 'website',
    siteName: 'Tic Tac Toe',
    locale: 'en_US',
    url: 'https://khurram-tictactoe.netlify.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tic Tac Toe',
    description: 'Play Tic Tac Toe with friends or challenge our AI!',
    images: ['https://khurram-tictactoe.netlify.app/hero-background.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph / WhatsApp sharing meta tags */}
        <meta property="og:title" content="Tic Tac Toe" />
        <meta property="og:description" content="Play Tic Tac Toe with friends or challenge our AI!" />
        <meta property="og:image" content="/hero-background.svg" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
        
        {/* WhatsApp specific */}
        <meta property="og:image:alt" content="Tic Tac Toe Game Preview" />
        <meta property="og:site_name" content="Tic Tac Toe" />
      </head>
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
