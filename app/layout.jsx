import { Navegation } from "../components/Navegation";
import { Playfair_Display } from 'next/font/google';
import '../styles/globals.css';

const playDisplay = Playfair_Display({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My First app Next</title>
        <link 
          rel="icon" 
          href="/favicon.ico" 
          sizes="any" 
        />

        <link
          rel="icon"
          href="/icon.png"
          type="image"
          sizes="any"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image"
          sizes="any"
        />
      </head>
      <body className={playDisplay.className}>
        <Navegation/>
        {children}
      </body>
    </html>
  )
}
