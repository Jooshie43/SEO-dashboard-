import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Dashboard',
  description: 'Page speed analysis, On-page SEO factors, Domain information, Backlink estimation, Keyword tracking capability, Historical data tracking',
  verification: {
    google: 'OfJVzaSjMaxBggfePfDcfAiw_ntxRXRAM6A0JVlktXQ',
    other: {
      'msvalidate.01': '52F7AD2C8250C0EAEB5E24C733232346',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="OfJVzaSjMaxBggfePfDcfAiw_ntxRXRAM6A0JVlktXQ" />
        <meta name="msvalidate.01" content="52F7AD2C8250C0EAEB5E24C733232346" />
      </head>
      <body>{children}</body>
    </html>
  );
}
