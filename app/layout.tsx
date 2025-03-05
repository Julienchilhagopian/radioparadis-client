import type { Metadata, Viewport } from "next";
import Providers from './providers'
import RadioNavbar from './components/RadioNavbar'
import ReplayPlayer from './components/player/ReplayPlayer'
import { Prompt, Inconsolata, Inter } from 'next/font/google'

import "./globals.css";
import "./styles/globals.scss";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Radio Paradis",
  description: "Radio Paradis est une web radio de quartier dans le 10ème arrondissement à Paris.",
  openGraph: {
    title: "Radio Paradis",
    description: "Radio Paradis est une web radio de quartier dans le 10ème arrondissement à Paris.",
    url: "https://www.radioparadis.live/",
    siteName: "Radio Paradis",
    images: [
      {
        url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/manifeste_carousel_3.jpg",
        width: 1200,
        height: 630,
        alt: "Radio Paradis Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Paradis",
    description: "Radio Paradis est une web radio de quartier dans le 10ème arrondissement à Paris.",
    images: ["https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/manifeste_carousel_3.jpg"],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

const prompt = Prompt({
  subsets: ['latin'],
  variable: '--font-prompt',
  weight: ['500', '800']
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  weight: ['500', '800']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '500', '600', '800']
});

const menuItems = [
  {
    title: "Archives",
    url: "../archives"
  },
  {
    title: "Se retrouver",
    url: "../events"
  },
  {
    title: "Manifeste",
    url: "../manifeste"
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr" className={`${inconsolata.variable} ${prompt.variable} ${inter.variable}`}>
      <body>
        <Providers>
          <RadioNavbar menuItems={menuItems} />
          <ReplayPlayer />

          {children}

          <footer>
            <Footer menuItems={menuItems} />
          </footer>

        </Providers>
      </body>
    </html>
  );
}
