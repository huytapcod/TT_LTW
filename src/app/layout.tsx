import type { Metadata } from 'next';
import '../app/globals.css';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js app with HTML and CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}