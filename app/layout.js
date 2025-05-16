import './globals.css';

export const metadata = {
  title: 'Secret Combination',
  description: 'Scopri il luogo segreto.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-gray-100 text-black font-sans">
        {children}
      </body>
    </html>
  );
}
