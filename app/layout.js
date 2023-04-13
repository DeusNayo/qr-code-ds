import './globals.css'
import { generateMetadata } from './users/[user]/page';

export const metadata = {
  title: 'QR Gen',
  description: 'QR Generator',
}

export default function RootLayout({ children }) {
  const logged = false;
  return (
    <html lang="en">
      <body className='bg-[#121C3F]'>
        {children}
    </body>
    </html>
  )
}
