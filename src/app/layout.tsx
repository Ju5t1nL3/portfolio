import "./globals.css";
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

    <html lang="en">
      <body>
        <StickyCursor/>
        <RegCursor/>
        {children}
      </body>
    </html>
  );
}
