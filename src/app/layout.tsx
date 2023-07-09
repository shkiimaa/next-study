import './globals.css';
import styles from './layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ subsets: ['latin'], weight: '700' });
//next font는 자동으로 호스팅하기에 cdn으로 불러온 것과 다르게 레이아웃 쉬프트가 일어나지 않음

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 사이트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
