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
  description: "RADIO PARADIS - Paris 10ème arrondissement - Radio de quartier",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export const prompt = Prompt({
  subsets: ['latin'],
  variable: '--font-prompt',
  weight: ['500', '800']
})

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  weight: ['500', '800']
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '500', '600', '800']
})

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
          <RadioNavbar menuItems={menuItems}/>
          <ReplayPlayer />

          {children}

          <footer>
            <Footer menuItems={menuItems}/>
          </footer>

        </Providers>
      </body>
    </html>
  );
}
