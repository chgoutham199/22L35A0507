import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Product Search</title>
      </head>
      <body>{children}</body>
    </html>
  );
}