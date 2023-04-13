import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'QR Gen',
  description: 'QR Generator',
}

export default function RootLayout({ children }) {
  const logged = false;
  return (
    <html lang="en">
      <body className='bg-[#121C3F]'>
        {logged && <Navbar />}
        {children}
    </body>
    </html>
  )
}
