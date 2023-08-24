import { Navegation } from "../components/Navegation"
import '../styles/globals.css'

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
      <body>
        <Navegation/>
        {children}
      </body>
    </html>
  )
}
