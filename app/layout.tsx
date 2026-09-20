import type { Metadata } from 'next';
import '@fontsource-variable/literata/wght.css';
import '@fontsource-variable/literata/wght-italic.css';
import '@fontsource-variable/source-sans-3/wght.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Layla Henrique | Advocacia estratégica',
  description:
    'Advocacia pessoal, estratégica e transparente em Pernambuco. Conheça a trajetória e as frentes de atuação de Layla Henrique.',
  icons: { icon: '/layla-logo.png' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
