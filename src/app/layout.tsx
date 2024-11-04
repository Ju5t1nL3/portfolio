import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import StickyCursor from '../components/stickyCursor';
import RegCursor from '../components/regCursor';

export const metadata = {
  title: 'Justin Le',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en" className={GeistSans.className}>
      <body>
        <StickyCursor/>
        <RegCursor/>
        {children}
      </body>
    </html>
  );
}
