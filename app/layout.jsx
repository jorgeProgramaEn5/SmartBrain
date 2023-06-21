import { Navegation } from "../components/Navegation"
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My First app Next</title>
      </head>
      <body>
        <Navegation/>
        {children}
      </body>
    </html>
  )
}
