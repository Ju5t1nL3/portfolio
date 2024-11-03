import "./globals.css";

export const metadata = {
  title: 'hi, ',
  description: 'Welcome to Next.js 101',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
