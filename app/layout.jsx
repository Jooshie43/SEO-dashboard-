import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Dashboard',
  description: 'Page speed analysis, On-page SEO factors, Domain information, Backlink estimation, Keyword tracking capability, Historical data tracking',
  verification: {
    google: 'OfJVzaSjMaxBggfePfDcfAiw_ntxRXRAM6A0JVlktXQ',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="OfJVzaSjMaxBggfePfDcfAiw_ntxRXRAM6A0JVlktXQ" />
      </head>
      <body>{children}</body>
    </html>
  );
}
