import './globals.css'




export const metadata = {
  title: 'WiredWave',
  description: 'E-commerce electronics shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
