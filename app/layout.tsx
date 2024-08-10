import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Providers from './providers'
import RadioNavbar from './components/RadioNavbar'
import Player from './components/player/Player'
import "./styles/globals.scss";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radio Paradis",
  description: "RADIO PARADIS - Paris 10ème arrondissement - Radio de quartier",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <body className={inter.className}>
        <Providers>
            <RadioNavbar />
            <Player />


          {children}


          <footer>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
            <h1>Footer</h1>
           
          </footer>


        </Providers>
      </body>
    </html>
  );
}
